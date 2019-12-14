export const collision = (ball, player, canvas) => {
  //still need to account for circumference
  if (
    ball.x >= player.x &&
    ball.x <= player.x + player.width &&
    ball.y === canvas.height - player.height - ball.radius
  ) {
    ball.dy = -ball.dy;
  }
};
