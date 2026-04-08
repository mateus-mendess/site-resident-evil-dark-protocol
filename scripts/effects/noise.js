const canvas = document.getElementById("noise");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  function generateNoise() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const buffer = new Uint32Array(imageData.data.buffer);

    for (let i = 0; i < buffer.length; i++) {
      if (Math.random() > 0.12) continue;

      const color = (Math.random() * 255) | 0;
      const alpha = 250;

      buffer[i] = (alpha << 24) | (color << 16) | (color << 8) | color;
    }

    ctx.putImageData(imageData, 0, 0);

    if (Math.random() < 0.15) {
      const drops = Math.random() * 20 + 10;

      for (let i = 0; i < drops; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        const size = Math.random() * 10 + 5;
        const gray = Math.random() * 255;

        ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, 0.5)`;
        ctx.fillRect(x, y, size, size);
      }
    }
  }

  function loop() {
    generateNoise();
    requestAnimationFrame(loop);
  }

  loop();
}
