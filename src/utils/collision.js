export const collision = (ball, player, canvas) => {
  //still need to account for circumference
  if (
    ball.x >= player.x - ball.radius &&
    ball.x <= player.x + player.width + ball.radius &&
    ball.y === canvas.height - player.height - ball.radius
  ) {
    ball.dy = -ball.dy;
  }
  if (ball.y === canvas.height - ball.radius) {
    //placeholder for now
    ball.dy = 0;
  }
};
