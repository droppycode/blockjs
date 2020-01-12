/* Block.js v0.1.0 */
var blockjs = {
  initialize: function() {
    document.querySelectorAll(".droppyBlock").forEach(function(droppyblock) {
      droppyblock.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text", droppyblock.alt);
        event.effectAllowed = "copy";
      });
    });
  }
}
