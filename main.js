// This is the new debug line at the top.
console.log("MINIMAP SCRIPT IS RUNNING!");

import OBR from "@owlbear-rodeo/sdk";

// This function will run when the extension is ready.
function setupMinimap() {
  console.log("Minimap extension is ready inside OBR.onReady!");
}

// Initialize the extension.
OBR.onReady(() => {
  setupMinimap();
});