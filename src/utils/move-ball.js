export const moveBall = (ball, canvas) => {
  if (ball.x === canvas.width) ball.dx = -ball.dx;
  if (ball.x === 0) ball.dx = Math.abs(ball.dx);
  if (ball.y === canvas.height - ball.radius) ball.dy = -ball.dy;
  if (ball.y === 0 + ball.radius) ball.dy = Math.abs(ball.dy);
};
