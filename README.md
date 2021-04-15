# chrome-tab-drag-bug
# chrome-tab-drag-bug

## Build to reproduce a bug where:
If a tab is created via `chrome.tabs.create({ ... })` in the newly created window that another tab is being dragged into, the drag is canceled and the dragged tab goes back to it's original window.

## To test the bug:
  1. Clone this repository
  3. Turn off any other extensions running in chrome
  4. Drag the repo folder into `chrome://extensions`
  5. Start with a single window that has one or more tabs
  6. Try to drag a tab to a new window
