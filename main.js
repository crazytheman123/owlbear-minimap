import OBR from "@owlbear-rodeo/sdk";

// This function will run when the extension is ready
function setupMinimap() {
  console.log("Minimap extension is ready!");
}

// Initialize the extension
OBR.onReady(() => {
  setupMinimap();
});
```*   `import OBR from "@owlbear-rodeo/sdk";`: This line imports the Owlbear Rodeo SDK so we can use its features.
*   `OBR.onReady(() => { ... });`: This is the standard way to start an Owlbear Rodeo extension. It says, "When Owlbear Rodeo is fully loaded and ready for my extension to run, execute the code inside."
*   `console.log(...)`: This is a useful command for developers. It prints a message to a special "console" in your browser, which helps us see what's happening behind the scenes.

**Step 5: Create a Placeholder Icon**

We referenced an `icon.svg` file in our manifest, but we haven't created it yet. An SVG is a simple image format.

1.  Create a new file in VS Code named `icon.svg`.
2.  Copy and paste the following code into it. This is a simple circle shape.

```xml
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" fill="white" stroke="black" stroke-width="5" />
</svg>