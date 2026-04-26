(function customBackgroundExtension() {
  if (!Spicetify.Player || !Spicetify.Platform) {
    setTimeout(customBackgroundExtension, 100);
    return;
  }

  const STORAGE_KEY = 'customnight-bg-url';
  const SETTINGS_KEY = 'customnight-bg-settings';

  function escapeForCssUrl(url) {
    return url.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\)/g, '\\)');
  }

  function getCustomBackgroundUrl() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setCustomBackgroundUrl(url) {
    try {
      if (url) {
        localStorage.setItem(STORAGE_KEY, url);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save custom background:', e);
    }
  }

  function getBackgroundSettings() {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      return saved ? JSON.parse(saved) : { size: 100, x: 50, y: 50 };
    } catch {
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
    } catch {
      // ignore
    }
  }

  function initBackground() {
    const maxAttempts = 30;
    let attempts = 0;

    function waitForRoot() {
      const root = document.querySelector('.Root__top-container');
      if (!root) {
        attempts++;
        if (attempts >= maxAttempts) {
          console.error('[CustomBackground] Root element not found after 30 attempts');
          return;
        }
        setTimeout(waitForRoot, 1000);
        return;
      }

      const backgroundContainer = document.createElement('div');
      backgroundContainer.className = 'customnight-bg-container';
      backgroundContainer.style.position = 'absolute';
      backgroundContainer.style.top = '0';
      backgroundContainer.style.left = '0';
      backgroundContainer.style.right = '0';
      backgroundContainer.style.bottom = '0';
      backgroundContainer.style.zIndex = '0';
      root.insertBefore(backgroundContainer, root.firstChild);

      const customBgUrl = getCustomBackgroundUrl();
      const settings = getBackgroundSettings();

      if (customBgUrl) {
        const escaped = escapeForCssUrl(customBgUrl);
        backgroundContainer.style.backgroundImage = `url("${escaped}")`;
        backgroundContainer.style.backgroundSize = settings.size + '%';
        backgroundContainer.style.backgroundPosition = settings.x + '% ' + settings.y + '%';
        backgroundContainer.style.backgroundRepeat = 'no-repeat';
        backgroundContainer.style.backgroundColor = '#000';
      } else {
        const moonImg = document.createElement('img');
        moonImg.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png';
        moonImg.alt = 'Moon';
        moonImg.style.position = 'absolute';
        moonImg.style.top = '10%';
        moonImg.style.right = '15%';
        moonImg.style.width = '200px';
        moonImg.style.opacity = '0.9';
        moonImg.style.animation = 'float 6s ease-in-out infinite';
        backgroundContainer.appendChild(moonImg);

        const stars = document.createElement('div');
        stars.className = 'stars';
        stars.style.position = 'absolute';
        stars.style.top = '0';
        stars.style.left = '0';
        stars.style.width = '100%';
        stars.style.height = '100%';
        stars.style.backgroundImage = 'radial-gradient(white 1px, transparent 1px)';
        stars.style.backgroundSize = '50px 50px';
        backgroundContainer.appendChild(stars);

        const twinkling = document.createElement('div');
        twinkling.className = 'twinkling';
        twinkling.style.position = 'absolute';
        twinkling.style.top = '0';
        twinkling.style.left = '0';
        twinkling.style.width = '100%';
        twinkling.style.height = '100%';
        twinkling.style.background = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png") repeat';
        twinkling.style.animation = 'twinkle 5s ease-in-out infinite';
        backgroundContainer.appendChild(twinkling);

        const clouds = document.createElement('div');
        clouds.className = 'clouds';
        clouds.style.position = 'absolute';
        clouds.style.bottom = '0';
        clouds.style.left = '0';
        clouds.style.width = '200%';
        clouds.style.height = '100%';
        clouds.style.background = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat-x';
        clouds.style.backgroundSize = 'contain';
        clouds.style.animation = 'clouds 60s linear infinite';
        backgroundContainer.appendChild(clouds);
      }

      root.style.zIndex = '0';
    }

    function init() {
      if (!Spicetify.Topbar?.Button) {
        console.warn('[CustomBackground] Topbar.Button not available');
        return;
      }

      const icon = `<svg data-encore-id="icon" role="img" aria-hidden="true" class="e-10180-icon" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>`;

      new Spicetify.Topbar.Button('Custom Background', icon, () => {
        const currentBg = getCustomBackgroundUrl();
        const escapedBg = currentBg ? escapeForCssUrl(currentBg) : '';
        const savedSettings = getBackgroundSettings();

        const content = document.createElement('div');
        content.style.cssText = 'display:flex;flex-direction:column;gap:12px;padding:10px;min-width:350px;font-family:sans-serif;';
        content.innerHTML = `
          <div style="font-size:16px;font-weight:bold;color:#fff;margin-bottom:8px;">Custom Background</div>
          <input type="text" id="customnight-url-input" placeholder="Enter image URL..." 
            style="width:100%;padding:10px;border:1px solid #444;border-radius:4px;background:#222;color:#fff;font-size:13px;box-sizing:border-box;" />
          <div style="display:flex;gap:8px;">
            <button id="customnight-apply" style="flex:1;padding:10px;background:#1db954;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Apply</button>
            <button id="customnight-reset" style="flex:1;padding:10px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Reset</button>
          </div>
          <div style="text-align:center;color:#888;font-size:12px;margin:4px 0;">or upload from computer</div>
          <input type="file" id="customnight-file-input" accept="image/*" style="color:#fff;font-size:12px;" />
          <div style="font-size:11px;color:#666;margin-top:4px;">Recommended: 1920x1080 or 2560x1440</div>
          <div style="font-size:11px;color:#666;margin-bottom:4px;">Scroll to zoom • drag to move</div>
          <div id="customnight-preview" style="width:100%;height:200px;border-radius:4px;background-size:100%;background-position:center;background-repeat:no-repeat;background-color:#000;border:1px solid #333;overflow:hidden;cursor:grab;position:relative;"></div>
          <div style="display:flex;gap:8px;align-items:center;">
            <span style="font-size:11px;color:#666;">Zoom:</span>
            <input type="range" id="customnight-size" min="30" max="300" value="100" style="flex:1;" />
            <span id="customnight-size-val" style="font-size:11px;color:#888;min-width:40px;">100%</span>
          </div>
          <div id="customnight-current" style="font-size:11px;color:#888;word-break:break-all;max-height:40px;overflow:hidden;"></div>
        `;

        let bgPositionX = savedSettings.x;
        let bgPositionY = savedSettings.y;
        let bgSize = savedSettings.size || 100;
        let currentUrl = currentBg || '';
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
            const displayUrl = currentUrl.startsWith('data:') ? `Local file (base64)` : currentUrl;
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
          fileInput.addEventListener('change', (e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (ev) => {
                const dataUrl = ev.target?.result;
                if (typeof dataUrl === 'string') {
                  currentUrl = dataUrl;
                  bgPositionX = 50;
                  bgPositionY = 50;
                  bgSize = 100;
                  if (sizeSlider) sizeSlider.value = 100;
                  if (sizeVal) sizeVal.textContent = '100%';
                  if (currentEl) currentEl.textContent = 'Current: Local file (base64)';
                  updatePreview();
                }
              };
              reader.readAsDataURL(file);
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
            if (url) {
              setCustomBackgroundUrl(url);
              setBackgroundSettings(bgSize, bgPositionX, bgPositionY);
              window.location.reload();
            }
          });
        }

        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            setCustomBackgroundUrl(null);
            clearBackgroundSettings();
            window.location.reload();
          });
        }

        Spicetify.PopupModal.display({
          title: 'Custom Background',
          content: content,
        });
      });
    }

    if (!document.querySelector('.Root__top-container')) {
      attempts = 0;
      const checkRoot = setInterval(() => {
        attempts++;
        if (document.querySelector('.Root__top-container')) {
          clearInterval(checkRoot);
          waitForRoot();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkRoot);
          console.error('[CustomBackground] Root element not found');
        }
      }, 1000);
    } else {
      waitForRoot();
    }

    init();
  }

  initBackground();
})();