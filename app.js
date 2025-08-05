
document.addEventListener("DOMContentLoaded", () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }

  const canvas = document.getElementById("progressChart");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, 300, 200);
    ctx.fillStyle = "orange";
    ctx.fillRect(20, 180 - 60, 30, 60); // mock value
    ctx.fillText("پیشرفت", 20, 190);
  }
});
