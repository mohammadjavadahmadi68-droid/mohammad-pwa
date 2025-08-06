
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('progressChart');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'orange';
    ctx.fillRect(10, 50, 50, 70);
    ctx.fillStyle = 'green';
    ctx.fillRect(70, 30, 50, 90);
});
