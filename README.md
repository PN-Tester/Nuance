# Nuance - Be Bold
This is a tool I intially developped in order to achieve platform-independent text editing capabilities from within chromium based browsers, which has evolved into a unicode multitool for convenient browser based non-standard input transormation.
This tool will allow you to send bold and italic text even in web applications where formal text editing is restricted and markdown is not available. This is achieved by using unicode character equivalent substitution instead of traditional bold and italic character transforms.
Almost all systems are capable of rendering the bold and italic text generated by this extension. The tool's capabilities have been extended to produce interesting unicode substitutions and insertions on demand.

# Features

&#119809;&#119822;&#119819;&#119811; : Substitute selected text with bold unicode character equivalent 

&#119868;&#119879;&#119860;&#119871;&#119868;&#119862; : Substitute selected text with italic unicode character equivalent 

50 x &#8679;: Inject fifty Diacritical Mark Above characters at end of selection 

&#x17f; &#11179; S : Substitute selection with Latin Small Letter Long S collision character 

&#8490; &#11177; k : Substitute selection with Kelvin collision character 

123 &#8644; 321 : Inject right-to-left override in front of selection 

&#60; / &#62;: Substitute selection with Hangul Filler invisible character 

&#10007;&#119904;&#119904; : Substitute selection with XSS polyglot 

More features will be added in the near future!

# Installation
1. git clone https://github.com/PN-Tester/Nuance/
2. In chrome, navigate to chrome://extensions
3. select the "Developer mode" switch in the upper right-hand corner
4. Select "Load unpacked" button which appears in upper left-hand corner
5. Select the Nuance folder and hit enter
   
![Nuance Installation](https://github.com/PN-Tester/Nuance/blob/main/Nuance%20-%20Installation.gif)

# Usage
1. Select the text on screen you wish to transform
2. Click the extension icon to open extension pop-up
3. Select one of the options from the menu
4. The selected text is now replaced or injected with the appropriate unicode
5. Send the modified message using the native platform

This tool will have additonal functionality added periodically.

