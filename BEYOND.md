# Above and Beyond Features

## CSS Styling
- **What:** Added background color, styled buttons with hover/disabled states, Google Fonts (Baloo 2, Nunito, Space Mono), responsive design with media queries at 1200px, 992px, and 768px, flex layouts for game area and stats, and container styling with border and padding. 
    - General format is heavily based on the About Me web design project
- **Where:** In `style.css` (the WHOLE file)
- **Why:** Makes the game look polished and fun while being responsive across screen sizes.

## Dark/Light Mode
- **What:** A toggle that switches between light and dark color themes of the page. 
    - Can be activated by clicking the "Dark Mode" button or pressing "d" on the keyboard. Button text updates to show the opposite mode. ("Light Mode")
- **Where:** 
    - `script.js` lines 260-265 (darkMode function), lines 285-291 (keyboard shortcut)
    - `style.css` lines 108-174 (all body.dark rules)
- **Why:** Improves accessibility and reduces eye strain for players in low-light environments or for those with sensitive eyes.

## Mystery Meme Image with Blur Reveal
- **What:** A random programming meme is selected each round and displayed fully blurred. As the player's guesses get closer to the answer, the image gradually unblurs (cold = blur 20px, warm = blur 10px, hot = blur 5px, correct = fully revealed). The image is randomly chosen from a collection of 17 memes.
- **Where:** 
    - `script.js` lines 66-68 (memes array), lines 155-157 (random selection in play()), lines 203-244 (blur classes in makeGuess())
    - `style.css` lines 189-210 (blur classes)
- **Why:** Adds a visual reward system and extra motivation to keep guessing --> players want to see which meme is hidden.

## Keyboard Shortcuts
- **What:** Space bar to submit a guess, "g" to give up, "d" to toggle dark mode. Shortcuts are disabled when typing in the guess input to prevent conflicts.
- **Where:**
    - `script.js` lines 268-291 (all shortcut functions)
- **Why:** Faster gameplay without needing to click buttons, improving the user experience.

## Custom Fonts
- **What:** Three Google Fonts — Baloo 2 for headings and buttons, Nunito for body text and messages, Space Mono for the timer display.
- **Where:** 
    - `index.html` line 7 (Google Fonts link)
    - `style.css` lines 24, 35, 40, 51, 59, 78, 95 (font-family declarations)
- **Why:** Creates a more game-like vibe while maintaining readability.

## Input Validation
- **What:** Rejects non-numeric input, numbers outside the range (below 1 or above the range), and NaN values with a clear error message.
- **Where:** 
    - `script.js` lines 173-177 (validation check in makeGuess())
- **Why:** Prevents errors and guides the player to enter valid guesses.

## Shoutouts
- Claude AI for helping me debug and recommend me color palettes
- GeeksForGeeks for helping me understand more about JS syntax, especially for keyboard shortcuts
- MDN for helping me better understand the document.getElementById() method.