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

function getCustomBackgroundUrl() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
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

function customBackgroundInit() {
  if (!Spicetify || !Spicetify.Topbar || !Spicetify.Topbar.Button) {
    setTimeout(customBackgroundInit, 1000);
    return;
  }
  
  const icon = `<svg data-encore-id="icon" role="img" aria-hidden="true" class="e-10180-icon" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>`;

  new Spicetify.Topbar.Button('Custom Background', icon, () => {
    const currentBg = getCustomBackgroundUrl();
    
    const content = document.createElement('div');
    content.style.cssText = 'display:flex;flex-direction:column;gap:12px;padding:10px;min-width:280px;font-family:sans-serif;';
    content.innerHTML = `
      <div style="font-size:16px;font-weight:bold;color:#fff;margin-bottom:8px;">Custom Background</div>
      <input type="text" id="customnight-url-input" placeholder="Enter image URL..." 
        style="width:100%;padding:10px;border:1px solid #444;border-radius:4px;background:#222;color:#fff;font-size:13px;box-sizing:border-box;" />
      <div style="display:flex;gap:8px;">
        <button id="customnight-apply" style="flex:1;padding:10px;background:#1db954;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Apply</button>
        <button id="customnight-reset" style="flex:1;padding:10px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Reset</button>
      </div>
      <div id="customnight-preview" style="width:100%;height:100px;border-radius:4px;background-size:cover;background-position:center;border:1px solid #333;"></div>
      <div id="customnight-current" style="font-size:11px;color:#888;word-break:break-all;"></div>
    `;
    
    if (currentBg) {
      const preview = content.querySelector('#customnight-preview');
      const currentEl = content.querySelector('#customnight-current');
      if (preview) preview.style.backgroundImage = `url("${currentBg}")`;
      if (currentEl) currentEl.textContent = `Current: ${currentBg}`;
    }
    
    Spicetify.PopupModal.display({
      title: 'Custom Background',
      content: content,
    });
    
    setTimeout(() => {
      const urlInput = document.getElementById('customnight-url-input');
      const applyBtn = document.getElementById('customnight-apply');
      const resetBtn = document.getElementById('customnight-reset');
      const preview = document.getElementById('customnight-preview');
      
      if (urlInput) {
        urlInput.addEventListener('input', () => {
          const url = urlInput.value.trim();
          if (preview) {
            preview.style.backgroundImage = url ? `url("${url}")` : 'none';
          }
        });
        urlInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter' && urlInput.value.trim()) {
            setCustomBackgroundUrl(urlInput.value.trim());
            window.location.reload();
          }
        });
      }
      
      if (applyBtn) {
        applyBtn.addEventListener('click', () => {
          if (urlInput && urlInput.value.trim()) {
            setCustomBackgroundUrl(urlInput.value.trim());
            window.location.reload();
          }
        });
      }
      
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          setCustomBackgroundUrl(null);
          window.location.reload();
        });
      }
    }, 100);
  });
}

waitForElement(['.Root__top-container'], ([topContainer]) => {
  const backgroundContainer = document.createElement('div');
  backgroundContainer.className = 'customnight-bg-container';
  topContainer.appendChild(backgroundContainer);

  const rootElement = document.querySelector('.Root__top-container');
  rootElement.style.zIndex = '0';

  const customBgUrl = getCustomBackgroundUrl();

  if (customBgUrl) {
    backgroundContainer.style.backgroundImage = `url("${customBgUrl}")`;
    backgroundContainer.style.backgroundSize = 'cover';
    backgroundContainer.style.backgroundPosition = 'center';
    backgroundContainer.style.backgroundRepeat = 'no-repeat';
  } else {
    const moonImg = document.createElement('img');
    moonImg.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png';
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

  waitForElement(['.Root__now-playing-bar'], ([playbar]) => {
    waitForElement(['.Root__right-sidebar'], ([rightbar]) => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === rightbar) {
            let newWidth = entry.contentRect.width;
            if (newWidth === 0) {
              const localStorageWidth = localStorage.getItem(
                '223ni6f2epqcidhx5etjafeai:panel-width-saved'
              );
              if (localStorageWidth) {
                newWidth = localStorageWidth;
              } else {
                newWidth = 420;
              }
            }
            playbar.style.width = `${newWidth}px`;
            break;
          }
        }
      });

      resizeObserver.observe(rightbar);
    });
  });

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