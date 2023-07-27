// popup.js

// Function to handle the button click and send a message to the content script
function replaceSelectedText(style) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: style });
  });
}

// Wait for the DOM to be ready before adding the event listeners
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('boldButton').addEventListener('click', function () {
    replaceSelectedText('bold');
  });

  document.getElementById('italicButton').addEventListener('click', function () {
    replaceSelectedText('italic');
  });
});