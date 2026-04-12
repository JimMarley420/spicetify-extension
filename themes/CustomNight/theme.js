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

waitForElement(['.Root__top-container'], ([topContainer]) => {
  const r = document.documentElement;
  const rs = window.getComputedStyle(r);

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

  const btn = document.createElement('button');
  btn.className = 'e-10180-legacy-button e-10180-legacy-button-tertiary e-10180-overflow-wrap-anywhere e-10180-button-tertiary--icon-only-medium e-10180-button-tertiary--icon-only e-10180-button-tertiary--condensed e-10180-button-tertiary--text-subdued encore-internal-color-text-subdued link-subtle main-globalNav-navLink main-globalNav-link-icon custom-navlink';
  btn.setAttribute('aria-label', 'Custom Background');
  btn.setAttribute('data-encore-id', 'buttonTertiary');
  btn.innerHTML = '<span aria-hidden="true" class="e-10180-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-10180-icon" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg></span>';
  btn.title = 'Change Background';
  btn.style.width = '50px';
  
  const menu = document.createElement('div');
  menu.className = 'customnight-menu';
  menu.innerHTML = `
    <h3>Custom Background</h3>
    <input type="text" id="customnight-url-input" placeholder="Enter image URL..." />
    <div class="customnight-menu-buttons">
      <button class="btn-apply" id="customnight-apply">Apply</button>
      <button class="btn-reset" id="customnight-reset">Reset</button>
    </div>
    <div class="customnight-preview" id="customnight-preview"></div>
    <div class="customnight-current" id="customnight-current"></div>
    <div class="customnight-github">
      <a href="https://github.com/JimMarley420/spicetify-extension" target="_blank" rel="noopener noreferrer">
        <button class="btn-github">View on GitHub</button>
      </a>
    </div>
  `;
  menu.style.display = 'none';
  
  waitForElement(['#global-nav-bar'], ([navBar]) => {
    const carousel = navBar.querySelector('.spicetify-sc-carousel');
    if (carousel) {
      const navLinks = navBar.querySelector('.spicetify-sc-contentArea .spicetify-sc-scroller > div');
      if (navLinks) {
        navLinks.appendChild(btn);
        
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (menu.style.display === 'none' || menu.style.display === '') {
            const rect = btn.getBoundingClientRect();
            menu.style.display = 'block';
            menu.style.top = (rect.bottom + 5) + 'px';
            menu.style.left = rect.left + 'px';
          } else {
            menu.style.display = 'none';
          }
        });
      }
    }
    document.body.appendChild(menu);
    
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.style.display = 'none';
      }
    });

    const urlInput = menu.querySelector('#customnight-url-input');
    const preview = menu.querySelector('#customnight-preview');
    const currentDisplay = menu.querySelector('#customnight-current');

    const currentBg = getCustomBackgroundUrl();
    if (currentBg && preview) {
      preview.style.backgroundImage = `url("${currentBg}")`;
      if (currentDisplay) currentDisplay.textContent = `Current: ${currentBg}`;
    }

    const applyBtn = menu.querySelector('#customnight-apply');
    const resetBtn = menu.querySelector('#customnight-reset');

    if (applyBtn && urlInput) {
      applyBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (url) {
          setCustomBackgroundUrl(url);
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

    if (urlInput && preview) {
      urlInput.addEventListener('input', () => {
        const url = urlInput.value.trim();
        if (url) {
          preview.style.backgroundImage = `url("${url}")`;
        } else {
          preview.style.backgroundImage = 'none';
        }
      });

      urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const url = urlInput.value.trim();
          if (url) {
            setCustomBackgroundUrl(url);
            window.location.reload();
          }
        }
      });
    }
  });

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
});
