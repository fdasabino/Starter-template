console.log("Hello, class!");
// JavaScript to draw on the canvas element
window.onload = function () {
  // Get the canvas element by its ID
  const canvas = document.getElementById("myCanvas");
  // Get the 2D drawing context for the canvas
  const ctx = canvas.getContext("2d");

  // Set fill color to light blue
  ctx.fillStyle = "#00BFFF";
  // Draw a rectangle that fills the entire canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set fill color to red
  ctx.fillStyle = "#FF0000";
  // Draw a red circle in the middle of the canvas
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
  ctx.fill();

  // Set line color to black
  ctx.strokeStyle = "#000000";
  // Draw a line across the canvas
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.stroke();
};
