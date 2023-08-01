// popup.js

// Function to handle the button click and send a message to the content script
function replaceSelectedText(style) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: style });
  });
}

// Function to handle the button click for inserting diacritical mark above
function insertDiacriticalMarkAbove() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: 'diacritical' });
  });
}

// Function to handle the button click for inserting xss polyglot
function insertXSSPolyglot() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: 'XSS' });
  });
}

// Function to handle the button click for inserting hangul filler invisible character
function insertInvisible() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: 'invisible' });
  });
}

// Function to handle the button click for inserting kelvin character
function insertKelvin() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: 'kelvin' });
  });
}

// Function to handle the button click for inserting long S character
function insertSTIRT() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: 'STIRT' });
  });
}

// Function to handle the button click for inserting right-to-left override
function insertRightLeftMark() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceSelectedText', style: 'RightLeft' });
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
  document.getElementById('homoglyphButton').addEventListener('click', function () {
    replaceSelectedText('homoglyph');
  });

  // Add event listener for the diacritical button
  document.getElementById('diacriticalButton').addEventListener('click', function () {
    insertDiacriticalMarkAbove();
  });
  document.getElementById('invisibleButton').addEventListener('click', function () {
    insertInvisible();
  });
  document.getElementById('kelvinButton').addEventListener('click', function () {
    insertKelvin();
  });
  document.getElementById('xssButton').addEventListener('click', function () {
    insertXSSPolyglot();
  });
  // Add event listener for the stirt button
  document.getElementById('stirtButton').addEventListener('click', function () {
    insertSTIRT();
  });
  // Add event listener for the rightLeft button
  document.getElementById('rightLeftButton').addEventListener('click', function () {
    insertRightLeftMark();
  });
});
