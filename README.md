# Nuance - Be Bold
This is a tool I intially developped in order to achieve platform-independent text editing capabilities from within chromium based browsers, which has evolved into a unicode multitool for convenient browser based non-standard input transormation.
This tool will allow you to send bold and italic text even in web applications where formal text editing is restricted and markdown is not available. This is achieved by using unicode character equivalent substitution instead of traditional bold and italic character transforms.
Almost all systems are capable of rendering the bold and italic text generated by this extension. The tool's capabilities have been extended to produce interesting unicode substitutions and insertions on demand.

# Features

1. Bold unicode character substitution
2. Italic unicode character substitution
3. Terminating Diacritical Mark Up injection
4. Latin Small Ligature Long ST to ST transformation injection ( triggers on uppercase transforms )
5. Right-to-left override injection

More features will be added in the near future!

![Nuance Screenshot](https://github.com/PN-Tester/Nuance/blob/main/nuance_demo.png)

# Installation

1. git clone https://github.com/PN-Tester/Nuance/
2. In chrome, navigate to chrome://extensions
3. select the "Developer mode" switch in the upper right-hand corner
4. Select "Load unpacked" button which appears in upper left-hand corner
5. Select the Nuance folder and hit enter

# Usage
1. Select the text on screen you wish to transform
2. Click the extension icon to open extension pop-up
3. Select one of the options from the menu
4. The selected text is now replaced or injected with the appropriate unicode
5. Send the modified message using the native platform

This tool will have additonal functionality added periodically.
