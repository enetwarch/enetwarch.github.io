export function addStarfieldCanvas(starfieldCanvasId, numberOfStars) {
  const canvas = document.getElementById(starfieldCanvasId);
  const canvasContext = canvas.getContext("2d");

  let width = window.innerWidth;
  let height = window.innerHeight;

  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push({
      xCoordinates: Math.random() * width,
      yCoordinates: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      xSpeed: (Math.random() - 0.5) * 0.1,
      ySpeed: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }

  const draw = () => {
    canvasContext.clearRect(0, 0, width, height);

    for (let star of stars) {
      star.xCoordinates += star.xSpeed;
      star.yCoordinates += star.ySpeed;

      if (star.xCoordinates < 0) star.xCoordinates = width;
      if (star.xCoordinates > width) star.xCoordinates = 0;
      if (star.yCoordinates < 0) star.yCoordinates = height;
      if (star.yCoordinates > height) star.yCoordinates = 0;

      star.opacity += (Math.random() - 0.5) * 0.02;
      star.opacity = Math.min(Math.max(star.opacity, 0.3), 1);

      canvasContext.beginPath();
      canvasContext.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      canvasContext.arc(star.xCoordinates, star.yCoordinates, star.size, 0, Math.PI * 2);
      canvasContext.fill();
    }

    requestAnimationFrame(draw);
  };
  draw();

  const resize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    const xRatio = newWidth / width;
    const yRatio = newHeight / height;

    stars.forEach((star) => {
      star.xCoordinates *= xRatio;
      star.yCoordinates *= yRatio;
    });

    width = canvas.width = newWidth;
    height = canvas.height = newHeight;
  };
  window.addEventListener("resize", resize);
  resize();
}
