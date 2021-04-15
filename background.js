chrome.windows.onCreated.addListener((window) => {
  // Create a tab in every new window
  setTimeout(() => {
    chrome.tabs.create({
      url: 'https://www.google.com',
      windowId: window.id,
      active: false
    })
  }, 100)
});
