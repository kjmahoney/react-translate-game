import { initKeys, keyPressed } from "kontra";

export const movePlayer = (player, canvas, velocity) => {
  initKeys();
  if (keyPressed("left")) player.x -= velocity;
  if (keyPressed("right")) player.x += velocity;
  if (player.x <= 0) player.x = 0;
  if (player.x >= canvas.width - player.width)
    player.x = canvas.width - player.width;
};
