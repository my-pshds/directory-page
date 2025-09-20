const storageKey = 'theme-preference'

const onClick = () => {
  // flip current value
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light'

  setPreference();
  reflectPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild
    .setAttribute('data-new-ui-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)

    if (theme.value === 'dark') {
      document.documentElement.style.setProperty('--background', '#21373d');
      document.documentElement.style.setProperty('--support-info', '#e9f2f1');
      document.documentElement.style.setProperty('--text-secondary', '#e9f2f1');
      document.documentElement.style.setProperty('--text-primary', '#d0deaa');
      document.documentElement.style.setProperty('--background-secondary', '#21373d');
      document.documentElement.style.setProperty('--background-selected', '#395e69ff');
      document.documentElement.style.setProperty('--text-secondary-alt', '#e9f2f1');
      document.documentElement.style.setProperty('--link-color', 'Plum');
      if (logo) logo.src = '/logo-dark.svg';
    } else {
      document.documentElement.style.setProperty('--background', '#e9f2f1');
      document.documentElement.style.setProperty('--support-info', '#1e1a71');
      document.documentElement.style.setProperty('--text-secondary', '#1e2f03');
      document.documentElement.style.setProperty('--text-primary', '#400000');
      document.documentElement.style.setProperty('--background-secondary', '#eddcf300');
      document.documentElement.style.setProperty('--background-selected', '#f3dde5e2');
      document.documentElement.style.setProperty('--text-secondary-alt', '#000000');
      document.documentElement.style.setProperty('--link-color', 'DarkMagenta');
      if (logo) logo.src = '/logo.svg';
    }
}

const theme = {
  value: getColorPreference(),
}

reflectPreference();

// ...existing code...
document.querySelector('#theme-toggle')?.addEventListener('click', onClick);

window.onload = () => {
  reflectPreference()
  document
    .querySelector('#theme-toggle')
    .addEventListener('click', onClick)
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })