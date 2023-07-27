//Nuance content script for inserting bold and italic unicode equivalents into text fields where there is no markdown control
//made by pn-tester 

function insertDiacriticalMarkAbove() {
  const selectedText = window.getSelection().toString();

  if (selectedText) {
    const diacriticalMarkAbove = '\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304\u0304'; // Diacritical mark above character (Example: 'Ā')

    // Get the active element where the selected text is located
    const activeElement = document.activeElement;

    if (activeElement) {
      if (activeElement.tagName === 'DIV' && activeElement.isContentEditable) {
        // Case 1: The active element is a contenteditable div

        // Create a new text node with the diacritical mark above character
        const newNode = document.createTextNode(diacriticalMarkAbove);

        // Get the selection range
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);

            // Insert the new node at the end of the selected content
          range.collapse();
          range.insertNode(newNode);
          range.collapse();
          
          // Trigger an input event to update the target element
          const targetElement = document.getElementsByClassName(document.activeElement.className)[0];
          targetElement.dispatchEvent(new Event('input'));
        }
      } else if (['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
        // Case 2: The active element is an input or textarea
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;

        // Append the diacritical mark above character to the end of the selected text
        const newText = selectedText + diacriticalMarkAbove;

        // Set the updated text back to the input field
        activeElement.value = activeElement.value.substring(0, start) + newText + activeElement.value.substring(end);

        // Move the cursor to the end of the inserted content
        activeElement.selectionStart = start;
        activeElement.selectionEnd = start + newText.length;
      }
    }
  }
}

function insertRightLeftMark() {
  const selectedText = window.getSelection().toString();

  if (selectedText) {
    const rightLeftMark = '\u202E';

    // Get the active element where the selected text is located
    const activeElement = document.activeElement;

    if (activeElement) {
      if (activeElement.tagName === 'DIV' && activeElement.isContentEditable) {
        // Case 1: The active element is a contenteditable div

        // Create a new text node with the diacritical mark above character
        const newNode = document.createTextNode(rightLeftMark);

        // Get the selection range
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);

          // Insert the new node before the selected content
          range.insertNode(newNode);
          range.setStartBefore(newNode);

          // Trigger an input event to update the target element
          const targetElement = document.getElementsByClassName(document.activeElement.className)[0];
          targetElement.dispatchEvent(new Event('input'));
        }
      } else if (['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
        // Case 2: The active element is an input or textarea
        const start = activeElement.selectionStart;

        // Prepend the diacritical mark above character to the selected text
        const newText = rightLeftMark + selectedText;

        // Set the updated text back to the input field
        activeElement.value = activeElement.value.substring(0, start) + newText + activeElement.value.substring(activeElement.selectionEnd);

        // Move the cursor to the end of the inserted content
        activeElement.selectionStart = start;
        activeElement.selectionEnd = start + newText.length;
      }
    }
  }
}


function insertSTIRT() {
  const selectedText = window.getSelection().toString();

  if (selectedText) {
    const stirtMark = '\uFB05'; // Insert the ft mark, which is converted to st when upper() operation occurs in most languages

    // Get the active element where the selected text is located
    const activeElement = document.activeElement;

    if (activeElement) {
      if (activeElement.tagName === 'DIV' && activeElement.isContentEditable) {
        // Case 1: The active element is a contenteditable div

        // Create a new text node with the diacritical mark above character
        const newNode = document.createTextNode(stirtMark);

        // Get the selection range
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();

          range.insertNode(newNode);
          range.collapse();
          
          // Trigger an input event to update the target element
          const targetElement = document.getElementsByClassName(document.activeElement.className)[0];
          targetElement.dispatchEvent(new Event('input'));
        }
      } else if (['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
        // Case 2: The active element is an input or textarea
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;

        // Append the diacritical mark above character to the end of the selected text
        activeElement.value = stirtMark;

        // Move the cursor to the end of the inserted content
        activeElement.selectionStart = start;
        activeElement.selectionEnd = start + newText.length;
      }
    }
  }
}

// Function to replace a character with its bold Unicode equivalent
function replaceWithBoldUnicode(char) {
  const charMap = {
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠',
    'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺',
    'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
    '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
  };

  // Check if the character is present in the map, if so, return its bold Unicode equivalent
  if (char in charMap) {
    return charMap[char];
  }

  // Return the original character if not present in the map
  return char;
}

// Function to replace a character with its italic Unicode equivalent
function replaceWithItalicUnicode(char) {
  const charMap = {
    'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔',
    'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮',
    'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
  };

  // Check if the character is present in the map, if so, return its italic Unicode equivalent
  if (char in charMap) {
    return charMap[char];
  }

  // Return the original character if not present in the map
  return char;
}

function replaceSelectedText(style) {
  const selectedText = window.getSelection().toString();

  if (selectedText) {
    let replacedText;

    if (style === 'bold') {
      replacedText = selectedText.split('').map(replaceWithBoldUnicode).join('');
    } else if (style === 'italic') {
      replacedText = selectedText.split('').map(replaceWithItalicUnicode).join('');
    }

    // Get the active element where the selected text is located
    const activeElement = document.activeElement;

    if (activeElement) {
      if (activeElement.tagName === 'DIV' && activeElement.isContentEditable) {
        // Case 1: The active element is a contenteditable div

        // Create a new text node with the replaced text
        const newNode = document.createTextNode(replacedText);

        // Get the selection range
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);

          // Delete the selected content and insert the new node in its place
          range.deleteContents();
          range.insertNode(newNode);

          // Move the caret to the end of the inserted content
          range.collapse(false);

          // Deselect the current selection
          selection.removeAllRanges();

          const spaceTextNode = document.createTextNode('');
          const spaceRange = document.createRange();
          spaceRange.setStart(newNode, newNode.length);
          spaceRange.setEnd(newNode, newNode.length);
          spaceRange.insertNode(spaceTextNode);

          //so because its vue.js we need to dispatch an actual input event in order for it to register the state change into the message store, otherwise it only changes the DOM
          const targetElement = document.getElementsByClassName(document.activeElement.className)[0]
          targetElement.dispatchEvent(new Event('input'));
        }
      } else if (['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
        // Case 2: The active element is an input or textarea
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;

        // Replace the selected text with its Unicode equivalent
        const newText = activeElement.value.substring(0, start) + replacedText + activeElement.value.substring(end);

        // Set the updated text back to the input field
        activeElement.value = newText;

        // Move the cursor to the end of the inserted content
        activeElement.selectionStart = start + replacedText.length;
        activeElement.selectionEnd = start + replacedText.length;
      }
    }

    // Debug output to the console
    console.log('Selected text: ', selectedText);
    console.log('Replaced text: ', replacedText);
  }
}


// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'replaceSelectedText') {
    if (message.style === 'diacritical') {
      insertDiacriticalMarkAbove();
    } 
    if (message.style === 'STIRT'){
      insertSTIRT();
    }
    if (message.style === 'RightLeft'){
      insertRightLeftMark();
    }
    else {
      replaceSelectedText(message.style);
    }
  }
});
