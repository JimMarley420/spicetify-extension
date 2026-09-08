function waitForElement(els, func, timeout = 100) {
  const queries = els.map((el) => document.querySelector(el));
  if (queries.every((a) => a)) {
    func(queries);
  } else if (timeout > 0) {
    setTimeout(waitForElement, 300, els, func, --timeout);
  }
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const STORAGE_KEY = 'customnight-bg-url';
const SETTINGS_KEY = 'customnight-bg-settings';
const ACCENT_KEY = 'customnight-accent-colors';
const IDB_FLAG_KEY = 'customnight-bg-idb';
const SPICY_KEY = 'customnight-spicy-mode';

const DEFAULT_ACCENT = {
  'main-elevated': '#152238',
  'card': '#152238',
  'sidebar': '#142b44',
  'highlight-elevated': '#152238',
  'notification': '#4687d6',
};

const LABEL_MAP = {
  'sidebar': 'Sidebar',
  'card': 'Cards',
  'main-elevated': 'Elevated BG',
  'highlight-elevated': 'Highlight',
  'notification': 'Notifications',
};

function openImageDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('customnight-db', 1);
    req.onupgradeneeded = (e) => e.target.result.createObjectStore('images');
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function saveImageToDB(blob) {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readwrite');
    tx.objectStore('images').put(blob, 'background');
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = (e) => { db.close(); reject(e.target.error); };
  });
}

async function getImageFromDB() {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readonly');
    const req = tx.objectStore('images').get('background');
    req.onsuccess = (e) => { db.close(); resolve(e.target.result || null); };
    req.onerror = (e) => { db.close(); reject(e.target.error); };
  });
}

async function removeImageFromDB() {
  const db = await openImageDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readwrite');
    tx.objectStore('images').delete('background');
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = (e) => { db.close(); reject(e.target.error); };
  });
}

function compressImage(dataUrl, maxDimension = 1920, quality = 0.8, fileType) {
  if (fileType === 'image/gif') {
    return Promise.resolve(dataUrl);
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          const ratio = Math.min(maxDimension / width, maxDimension / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Failed to get canvas 2d context');
        ctx.drawImage(img, 0, 0, width, height);
        const outputType = fileType === 'image/png' ? 'image/png' : 'image/jpeg';
        resolve(canvas.toDataURL(outputType, quality));
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = () => reject(new Error('Failed to load image for compression'));
    img.src = dataUrl;
  });
}

function escapeForCssUrl(url) {
  return url.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\)/g, '\\)');
}

function getCustomBackgroundUrl() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function setCustomBackgroundUrl(url) {
  try {
    if (!url) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(IDB_FLAG_KEY);
      return true;
    }
    if (url.startsWith('blob:')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(IDB_FLAG_KEY, '1');
      return true;
    }
    localStorage.setItem(STORAGE_KEY, url);
    localStorage.removeItem(IDB_FLAG_KEY);
    return true;
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      Spicetify?.showNotification?.('Image too large after compression. Try a smaller image or use a URL instead.', true);
    } else {
      console.error('Failed to save custom background:', e);
    }
    return false;
  }
}

function getBackgroundSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    return saved ? JSON.parse(saved) : { size: 100, x: 50, y: 50 };
  } catch (e) {
    return { size: 100, x: 50, y: 50 };
  }
}

function setBackgroundSettings(size, x, y) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ size, x, y }));
  } catch (e) {
    console.error('Failed to save background settings:', e);
  }
}

function clearBackgroundSettings() {
  try {
    localStorage.removeItem(SETTINGS_KEY);
  } catch (e) {
    console.error('Failed to clear background settings:', e);
  }
}

function getAccentColors() {
  try {
    const saved = localStorage.getItem(ACCENT_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    return null;
  }
}

function setAccentColors(colors) {
  try {
    localStorage.setItem(ACCENT_KEY, JSON.stringify(colors));
  } catch (e) {
    console.error('Failed to save accent colors:', e);
  }
}

function clearAccentColors() {
  try {
    localStorage.removeItem(ACCENT_KEY);
  } catch (e) {
    console.error('Failed to clear accent colors:', e);
  }
}

function getSpicyMode() {
  try {
    return localStorage.getItem(SPICY_KEY) === 'spicy' ? 'spicy' : 'customnight';
  } catch (e) {
    return 'customnight';
  }
}

function setSpicyMode(mode) {
  try {
    localStorage.setItem(SPICY_KEY, mode);
  } catch (e) {
    console.error('Failed to save Spicy Lyrics mode:', e);
  }
}

function applySpicyMode() {
  if (!document.body) return;
  document.body.classList.toggle('cn-hide-spicy', getSpicyMode() === 'customnight');
}

function applyAccentColors(colors) {
  if (!colors) return;
  const root = document.documentElement;
  for (const [key, value] of Object.entries(colors)) {
    const hex = value.replace('#', '');
    root.style.setProperty(`--spice-${key}`, `#${hex}`);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    root.style.setProperty(`--spice-rgb-${key}`, `${r}, ${g}, ${b}`);
  }
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(c => Math.round(c).toString(16).padStart(2, '0')).join('');
}

function quantizeColors(data) {
  const colorMap = {};
  for (let i = 0; i < data.length; i += 8) {
    const r = Math.round(data[i] / 32) * 32;
    const g = Math.round(data[i + 1] / 32) * 32;
    const b = Math.round(data[i + 2] / 32) * 32;
    const key = `${r},${g},${b}`;
    colorMap[key] = (colorMap[key] || 0) + 1;
  }

  const sorted = Object.entries(colorMap)
    .map(([key, count]) => {
      const [r, g, b] = key.split(',').map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return { r, g, b, hex: rgbToHex(r, g, b), brightness, count };
    })
    .filter(c => c.brightness > 50 && c.brightness < 220)
    .sort((a, b) => b.count - a.count);

  const unique = [];
  for (const c of sorted) {
    let isDup = false;
    for (const u of unique) {
      if (Math.sqrt((c.r - u.r) ** 2 + (c.g - u.g) ** 2 + (c.b - u.b) ** 2) < 50) {
        isDup = true;
        break;
      }
    }
    if (!isDup) unique.push(c);
    if (unique.length >= 5) break;
  }

  return unique.length > 0 ? unique : null;
}

function extractColorsFromImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 64;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, size, size);
        const data = ctx.getImageData(0, 0, size, size).data;
        resolve(quantizeColors(data));
      } catch (e) {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

let currentPreviewUrl = null;

function customBackgroundInit() {
  const maxAttempts = 30;
  let attempts = 0;
  
  function init() {
    if (!Spicetify || !Spicetify.Topbar || !Spicetify.Topbar.Button) {
      attempts++;
      if (attempts >= maxAttempts) {
        console.error('[CustomNight] customBackgroundInit: Spicetify.Topbar.Button not available after 30 attempts');
        Spicetify?.showNotification?.('[CustomNight] Failed to initialize: Spicetify.Topbar.Button API unavailable', true);
        return;
      }
      setTimeout(init, 1000);
      return;
    }
    
    const icon = `<svg role="img" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    new Spicetify.Topbar.Button('Custom Background', icon, async () => {
      const savedSettings = getBackgroundSettings();
      const currentBg = getCustomBackgroundUrl();
      const idbFlag = localStorage.getItem(IDB_FLAG_KEY);
      let resolvedBg = currentBg || '';
      if (!resolvedBg && idbFlag === '1') {
        try {
          const blob = await getImageFromDB();
          if (blob) {
            if (currentPreviewUrl) { URL.revokeObjectURL(currentPreviewUrl); }
            resolvedBg = URL.createObjectURL(blob);
            currentPreviewUrl = resolvedBg;
          }
        } catch (e) {
          console.error('[CustomNight] Failed to load GIF for preview:', e);
        }
      }
      
      const content = document.createElement('div');
      content.style.cssText = 'min-width:340px;box-sizing:border-box;';
      const pickerRows = Object.entries(DEFAULT_ACCENT).map(([key, value]) => `
          <div class="cn-color">
            <span class="cn-color-label">${LABEL_MAP[key] || key}</span>
            <input type="color" id="customnight-color-${key}" value="${value}" />
          </div>`).join('');
      content.innerHTML = `
        <div class="cn">
          <div class="cn-tabs">
            <button id="customnight-tab-bg" class="cn-tab cn-tab-active" type="button">Background</button>
            <button id="customnight-tab-colors" class="cn-tab" type="button">Accent Colors</button>
            <button id="customnight-tab-spicy" class="cn-tab" type="button">Spicy Lyrics</button>
          </div>

          <div id="customnight-bg-section" class="cn-panel cn-panel-active">
            <input id="customnight-url-input" class="cn-input" type="text" placeholder="Paste an image URL…" autocomplete="off" />
            <div class="cn-divider"><span>or</span></div>
            <label class="cn-upload">
              <input id="customnight-file-input" type="file" accept="image/*" hidden />
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload from your computer
            </label>
            <div class="cn-hint">Recommended: 1920&#215;1080 or 2560&#215;1440 &#183; scroll to zoom, drag to move</div>
            <div id="customnight-preview" class="cn-preview"></div>
            <div class="cn-row">
              <span class="cn-label">Zoom</span>
              <input id="customnight-size" class="cn-slider" type="range" min="30" max="300" value="100" />
              <span id="customnight-size-val" class="cn-value">100%</span>
            </div>
            <div id="customnight-current" class="cn-current"></div>
          </div>

          <div id="customnight-colors-section" class="cn-panel">
            <div class="cn-subtitle">Accent colors</div>
            <div class="cn-hint">Tint the sidebar, cards, highlights and notifications.</div>
            ${pickerRows}
            <div class="cn-row-btns">
              <button id="customnight-suggest-colors" class="cn-btn cn-btn-secondary" type="button">Suggest from background</button>
              <button id="customnight-reset-colors" class="cn-btn cn-btn-ghost" type="button">Reset colors</button>
            </div>
          </div>

          <div id="customnight-spicy-section" class="cn-panel">
            <div class="cn-notice">
              <strong>Notice to Spicy Lyrics users:</strong>
              <span>When Spicy Lyrics is open, it paints its own album-art background that can cover this theme&#8217;s night sky. Choose which background shows behind the lyrics.</span>
            </div>
            <div class="cn-switch-row">
              <div>
                <div class="cn-label">Background behind lyrics</div>
                <div id="customnight-spicy-desc" class="cn-hint"></div>
              </div>
              <label class="cn-switch">
                <input id="customnight-spicy" type="checkbox" />
                <span class="cn-switch-slider"></span>
              </label>
            </div>
          </div>

          <div class="cn-actions">
            <button id="customnight-reset" class="cn-btn cn-btn-ghost" type="button">Reset</button>
            <button id="customnight-apply" class="cn-btn cn-btn-primary" type="button">Apply</button>
          </div>
        </div>
      `;
      
      let bgPositionX = savedSettings.x;
      let bgPositionY = savedSettings.y;
      let bgSize = savedSettings.size || 100;
      let currentUrl = resolvedBg;
      let isDragging = false;
      let dragStartX, dragStartY, startPosX, startPosY;
      
      const preview = content.querySelector('#customnight-preview');
      const currentEl = content.querySelector('#customnight-current');
      const sizeSlider = content.querySelector('#customnight-size');
      const sizeVal = content.querySelector('#customnight-size-val');
      
      function updatePreview() {
        if (preview && currentUrl) {
          const escaped = escapeForCssUrl(currentUrl);
          preview.style.backgroundImage = `url("${escaped}")`;
          preview.style.backgroundSize = bgSize + '%';
          preview.style.backgroundPosition = bgPositionX + '% ' + bgPositionY + '%';
          preview.style.backgroundRepeat = 'no-repeat';
        }
      }
      
      if (currentUrl && preview) {
        bgPositionX = savedSettings.x !== undefined ? savedSettings.x : 50;
        bgPositionY = savedSettings.y !== undefined ? savedSettings.y : 50;
        bgSize = savedSettings.size || 100;
        if (currentEl) {
          let displayUrl;
          if (currentUrl.startsWith('data:')) displayUrl = 'Local file (compressed)';
          else if (currentUrl.startsWith('blob:')) displayUrl = 'Local GIF (stored in browser)';
          else displayUrl = currentUrl;
          currentEl.textContent = `Current: ${displayUrl}`;
        }
      }
      
      if (sizeSlider) sizeSlider.value = bgSize;
      if (sizeVal) sizeVal.textContent = bgSize + '%';
      
      updatePreview();
      
      if (sizeSlider && sizeVal) {
        sizeSlider.addEventListener('input', () => {
          bgSize = parseInt(sizeSlider.value);
          sizeVal.textContent = bgSize + '%';
          preview.style.backgroundSize = bgSize + '%';
        });
      }
      
      if (preview) {
        preview.addEventListener('mousedown', (e) => {
          isDragging = true;
          dragStartX = e.clientX;
          dragStartY = e.clientY;
          startPosX = bgPositionX;
          startPosY = bgPositionY;
          preview.style.cursor = 'grabbing';
          e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
          if (isDragging) {
            const dx = (e.clientX - dragStartX) * 0.15;
            const dy = (e.clientY - dragStartY) * 0.15;
            bgPositionX = Math.max(0, Math.min(100, startPosX - dx));
            bgPositionY = Math.max(0, Math.min(100, startPosY - dy));
            preview.style.backgroundPosition = bgPositionX + '% ' + bgPositionY + '%';
          }
        });
        
        document.addEventListener('mouseup', () => {
          if (isDragging) {
            isDragging = false;
            preview.style.cursor = 'grab';
          }
        });
        
        preview.addEventListener('wheel', (e) => {
          e.preventDefault();
          const delta = e.deltaY > 0 ? -10 : 10;
          bgSize = Math.max(30, Math.min(300, bgSize + delta));
          if (sizeSlider) sizeSlider.value = bgSize;
          if (sizeVal) sizeVal.textContent = bgSize + '%';
          preview.style.backgroundSize = bgSize + '%';
        });
      }
      
      const urlInput = content.querySelector('#customnight-url-input');
      const applyBtn = content.querySelector('#customnight-apply');
      const resetBtn = content.querySelector('#customnight-reset');
      const fileInput = content.querySelector('#customnight-file-input');
      
      if (fileInput) {
        fileInput.addEventListener('change', async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const handleUploadedImage = (url) => {
            currentUrl = url;
            bgPositionX = 50;
            bgPositionY = 50;
            bgSize = 100;
            if (sizeSlider) sizeSlider.value = 100;
            if (sizeVal) sizeVal.textContent = '100%';
            if (currentEl) currentEl.textContent = 'Current: Local file';
            updatePreview();
          };

          if (file.type === 'image/gif') {
            try {
              Spicetify?.showNotification?.('Saving GIF locally, please wait...', false);
              await saveImageToDB(file);
              if (currentPreviewUrl) { URL.revokeObjectURL(currentPreviewUrl); }
              const blobUrl = URL.createObjectURL(file);
              currentPreviewUrl = blobUrl;
              handleUploadedImage(blobUrl);
            } catch (err) {
              Spicetify?.showNotification?.('Could not save GIF: ' + err.message, true);
            }
            return;
          }

          if (file.size > 30 * 1024 * 1024) {
            Spicetify?.showNotification?.('Large image (>30MB): compression may take a moment...', false);
          }
          const objectUrl = URL.createObjectURL(file);
          try {
            const compressed = await compressImage(objectUrl, 1920, 0.8, file.type);
            handleUploadedImage(compressed);
            if (confirm('Auto-detect accent colors from this image?')) {
              const extracted = await extractColorsFromImage(compressed);
              if (extracted) {
                const pickerIds = Object.keys(DEFAULT_ACCENT);
                for (let i = 0; i < Math.min(extracted.length, pickerIds.length); i++) {
                  const picker = content.querySelector(`#customnight-color-${pickerIds[i]}`);
                  if (picker) picker.value = extracted[i].hex;
                }
                Spicetify?.showNotification?.('Colors auto-detected from image!');
              }
            }
          } catch (err) {
            Spicetify?.showNotification?.('Could not process this image. Try a different format.', true);
          } finally {
            URL.revokeObjectURL(objectUrl);
          }
        });
      }
      
      if (urlInput) {
        urlInput.addEventListener('input', () => {
          const url = urlInput.value.trim();
          if (url) {
            currentUrl = url;
            const escaped = escapeForCssUrl(url);
            preview.style.backgroundImage = `url("${escaped}")`;
          } else {
            preview.style.backgroundImage = 'none';
          }
        });
        urlInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && urlInput.value.trim()) {
            currentUrl = urlInput.value.trim();
          }
        });
      }
      
      if (applyBtn) {
        applyBtn.addEventListener('click', () => {
          const url = urlInput?.value.trim() || currentUrl;
          const colors = {};
          for (const key of Object.keys(DEFAULT_ACCENT)) {
            const picker = content.querySelector(`#customnight-color-${key}`);
            if (picker) colors[key] = picker.value;
          }
          setAccentColors(colors);
          applyAccentColors(colors);
          if (url) {
            const saved = setCustomBackgroundUrl(url);
            if (!saved) return;
            setBackgroundSettings(bgSize, bgPositionX, bgPositionY);
            const container = document.querySelector('.customnight-bg-container');
            if (container) {
              container.style.backgroundImage = `url("${escapeForCssUrl(url)}")`;
              container.style.backgroundSize = bgSize + '%';
              container.style.backgroundPosition = bgPositionX + '% ' + bgPositionY + '%';
              container.style.backgroundRepeat = 'no-repeat';
              container.style.backgroundColor = '#000';
            }
          }
          Spicetify.PopupModal.hide();
          Spicetify?.showNotification?.('Theme applied! Reloading Spotify...');
          setTimeout(() => location.reload(), 1500);
        });
      }
      
      if (resetBtn) {
        resetBtn.addEventListener('click', async () => {
          setCustomBackgroundUrl(null);
          clearBackgroundSettings();
          clearAccentColors();
          await removeImageFromDB().catch(() => {});
          if (currentPreviewUrl) { URL.revokeObjectURL(currentPreviewUrl); currentPreviewUrl = null; }
          const container = document.querySelector('.customnight-bg-container');
          if (container) {
            container.style.backgroundImage = '';
            container.style.backgroundSize = '';
            container.style.backgroundPosition = '';
            container.style.backgroundRepeat = '';
            container.style.backgroundColor = '';
            if (!container.querySelector('img[alt="Moon"]')) {
              container.innerHTML = '';
              const moonImg = document.createElement('img');
              moonImg.src = 'https://raw.githubusercontent.com/JimMarley420/spicetify-extension/master/themes/CustomNight/assets/moon2.png';
              moonImg.alt = 'Moon';
              container.appendChild(moonImg);
              const stars = document.createElement('div');
              stars.className = 'stars';
              container.appendChild(stars);
              const twinkling = document.createElement('div');
              twinkling.className = 'twinkling';
              container.appendChild(twinkling);
              const clouds = document.createElement('div');
              clouds.className = 'clouds';
              container.appendChild(clouds);
            }
          }
          setSpicyMode('customnight');
          applySpicyMode();
          const root = document.documentElement;
          for (const key of Object.keys(DEFAULT_ACCENT)) {
            root.style.removeProperty(`--spice-${key}`);
            root.style.removeProperty(`--spice-rgb-${key}`);
          }
          Spicetify.PopupModal.hide();
        });
      }
      
      const savedAccent = getAccentColors();
      if (savedAccent) {
        for (const [key, value] of Object.entries(savedAccent)) {
          const picker = content.querySelector(`#customnight-color-${key}`);
          if (picker) picker.value = value;
        }
      }
      
      const suggestBtn = content.querySelector('#customnight-suggest-colors');
      if (suggestBtn) {
        suggestBtn.addEventListener('click', async () => {
          const url = currentUrl || getCustomBackgroundUrl();
          if (!url) {
            Spicetify?.showNotification?.('No background image to extract colors from', true);
            return;
          }
          suggestBtn.disabled = true;
          const originalText = suggestBtn.textContent;
          suggestBtn.textContent = 'Extracting...';
          try {
            const colors = await extractColorsFromImage(url);
            if (!colors) {
              Spicetify?.showNotification?.('Could not extract colors (CORS issue?). Try uploading the image instead.', true);
              return;
            }
            const pickerIds = Object.keys(DEFAULT_ACCENT);
            for (let i = 0; i < Math.min(colors.length, pickerIds.length); i++) {
              const picker = content.querySelector(`#customnight-color-${pickerIds[i]}`);
              if (picker) picker.value = colors[i].hex;
            }
            Spicetify?.showNotification?.('Colors auto-detected! Click Apply to save.');
          } finally {
            suggestBtn.disabled = false;
            suggestBtn.textContent = originalText;
          }
        });
      }
      
      const resetColorsBtn = content.querySelector('#customnight-reset-colors');
      if (resetColorsBtn) {
        resetColorsBtn.addEventListener('click', () => {
          clearAccentColors();
          const root = document.documentElement;
          for (const key of Object.keys(DEFAULT_ACCENT)) {
            root.style.removeProperty(`--spice-${key}`);
            root.style.removeProperty(`--spice-rgb-${key}`);
          }
          Spicetify.PopupModal.hide();
        });
      }
      
      const tabBg = content.querySelector('#customnight-tab-bg');
      const tabColors = content.querySelector('#customnight-tab-colors');
      const tabSpicy = content.querySelector('#customnight-tab-spicy');
      const bgSection = content.querySelector('#customnight-bg-section');
      const colorsSection = content.querySelector('#customnight-colors-section');
      const spicySection = content.querySelector('#customnight-spicy-section');

      function switchTab(tab) {
        tabBg.classList.toggle('cn-tab-active', tab === 'bg');
        tabColors.classList.toggle('cn-tab-active', tab === 'colors');
        tabSpicy.classList.toggle('cn-tab-active', tab === 'spicy');
        bgSection.classList.toggle('cn-panel-active', tab === 'bg');
        colorsSection.classList.toggle('cn-panel-active', tab === 'colors');
        spicySection.classList.toggle('cn-panel-active', tab === 'spicy');
      }

      tabBg.addEventListener('click', () => switchTab('bg'));
      tabColors.addEventListener('click', () => switchTab('colors'));
      tabSpicy.addEventListener('click', () => switchTab('spicy'));

      const spicyToggle = content.querySelector('#customnight-spicy');
      const spicyDesc = content.querySelector('#customnight-spicy-desc');

      function updateSpicyUI() {
        const mode = getSpicyMode();
        spicyToggle.checked = mode === 'customnight';
        if (spicyDesc) {
          spicyDesc.textContent = mode === 'customnight'
            ? 'Custom Night (this theme)'
            : 'Spicy Lyrics (default)';
        }
      }
      updateSpicyUI();

      spicyToggle.addEventListener('change', () => {
        const mode = spicyToggle.checked ? 'customnight' : 'spicy';
        setSpicyMode(mode);
        applySpicyMode();
        updateSpicyUI();
        Spicetify?.showNotification?.(
          mode === 'customnight'
            ? 'Custom Night background enabled behind the lyrics.'
            : 'Spicy Lyrics keeps its own background behind the lyrics.'
        );
      });

      Spicetify.PopupModal.display({
        title: 'Custom Night',
        content: content,
      });
    });
  }
  
  init();
}

applySpicyMode();

waitForElement(['.Root__top-container'], ([topContainer]) => {
  applySpicyMode();
  const backgroundContainer = document.createElement('div');
  backgroundContainer.className = 'customnight-bg-container';
  topContainer.appendChild(backgroundContainer);

  const rootElement = document.querySelector('.Root__top-container');
  rootElement.style.zIndex = '0';

  const customBgUrl = getCustomBackgroundUrl();
  const idbFlag = localStorage.getItem(IDB_FLAG_KEY);
  const settings = getBackgroundSettings();

  function applyBgToContainer(url) {
    const escaped = escapeForCssUrl(url);
    backgroundContainer.style.backgroundImage = `url("${escaped}")`;
    backgroundContainer.style.backgroundSize = settings.size + '%';
    backgroundContainer.style.backgroundPosition = settings.x + '% ' + settings.y + '%';
    backgroundContainer.style.backgroundRepeat = 'no-repeat';
    backgroundContainer.style.backgroundColor = '#000';
  }

  function renderDefaultBackground() {
    const moonImg = document.createElement('img');
    moonImg.src = 'https://raw.githubusercontent.com/JimMarley420/spicetify-extension/master/themes/CustomNight/assets/moon2.png';
    moonImg.alt = 'Moon';
    backgroundContainer.appendChild(moonImg);
    const stars = document.createElement('div');
    stars.className = 'stars';
    backgroundContainer.appendChild(stars);
    const twinkling = document.createElement('div');
    twinkling.className = 'twinkling';
    backgroundContainer.appendChild(twinkling);
    const clouds = document.createElement('div');
    clouds.className = 'clouds';
    backgroundContainer.appendChild(clouds);
  }

  if (customBgUrl) {
    applyBgToContainer(customBgUrl);
  } else if (idbFlag === '1') {
    getImageFromDB().then(blob => {
      if (!blob) { renderDefaultBackground(); return; }
      applyBgToContainer(URL.createObjectURL(blob));
    }).catch(err => {
      console.error('[CustomNight] Failed to load background from IndexedDB:', err);
      renderDefaultBackground();
    });
  } else {
    renderDefaultBackground();
  }

  const savedAccent = getAccentColors();
  if (savedAccent) {
    applyAccentColors(savedAccent);
  }

  function handleLabelChange() {
    const playButton = document.querySelector('[data-encore-id="buttonPrimary"]');
    if (!playButton) return;
    
    const img = document.querySelector('.main-nowPlayingWidget-coverArt .cover-art img');
    if (!img) return;
    
    if (playButton.getAttribute('aria-label') == 'Pause') {
      img.classList.add('running-animation');
    } else {
      img.classList.remove('running-animation');
    }
  }

  

  waitForElement(['[data-encore-id="buttonPrimary"]'], ([targetElement]) => {
    if (!targetElement) return;
    
    handleLabelChange();
    
    const playObserver = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'aria-label'
        ) {
          handleLabelChange();
        }
      }
    });

    const playConfig = { attributes: true, attributeFilter: ['aria-label'] };
    playObserver.observe(targetElement, playConfig);
  });

  customBackgroundInit();
});