function waitForElement(els, func, timeout = 100) {
  const queries = els.map((el) => document.querySelector(el));
  if (queries.every((a) => a)) {
    func(queries);
  } else if (timeout > 0) {
    setTimeout(waitForElement, 300, els, func, --timeout);
  }
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

function createBackgroundButton() {
  const btn = document.createElement('button');
  btn.className = 'customnight-btn';
  btn.innerHTML = '🎨 Background';
  document.body.appendChild(btn);

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
  `;
  document.body.appendChild(menu);

  const urlInput = document.getElementById('customnight-url-input');
  const preview = document.getElementById('customnight-preview');
  const currentDisplay = document.getElementById('customnight-current');

  const currentBg = getCustomBackgroundUrl();
  if (currentBg) {
    preview.style.backgroundImage = `url("${currentBg}")`;
    currentDisplay.textContent = `Current: ${currentBg}`;
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('show');
    }
  });

  document.getElementById('customnight-apply').addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (url) {
      setCustomBackgroundUrl(url);
      window.location.reload();
    }
  });

  document.getElementById('customnight-reset').addEventListener('click', () => {
    setCustomBackgroundUrl(null);
    window.location.reload();
  });

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

waitForElement(['.Root__top-container'], ([topContainer]) => {
  const r = document.documentElement;
  const rs = window.getComputedStyle(r);

  const backgroundContainer = document.createElement('div');
  backgroundContainer.className = 'background-container';
  topContainer.appendChild(backgroundContainer);

  const rootElement = document.querySelector('.Root__top-container');
  rootElement.style.zIndex = '0';

  const customBgUrl = getCustomBackgroundUrl();

  if (customBgUrl) {
    backgroundContainer.classList.add('user-bg');
    backgroundContainer.style.backgroundImage = `url("${customBgUrl}")`;
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

  createBackgroundButton();

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

  function handleLabelChange() {
    const img = document.querySelector(
      '.main-nowPlayingWidget-coverArt .cover-art img'
    );
    if (document.querySelector('[data-encore-id="buttonPrimary"]').getAttribute('aria-label') == 'Pause') {
      img.classList.add('running-animation');
    } else {
      img.classList.remove('running-animation');
    }
  }
});
