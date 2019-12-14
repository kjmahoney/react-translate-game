import React, { useEffect } from "react";
import { init, Sprite, GameLoop, initKeys, keyPressed } from "kontra";
import { moveBall } from "./utils/move-ball.js";
import { movePlayer } from "./utils/move-player.js";
import { collision } from "./utils/collision.js";
import settings from "./settings";
import styles from "./Canvas.module.scss";

const { ballVelocity, playerVelocity } = settings;

const Canvas = () => {
  useEffect(() => {
    const { canvas } = init();

    let player = new Sprite({
      x: 300,
      y: 380,
      color: "blue",
      width: 50,
      height: 20
    });

    let ball = new Sprite({
      x: 100,
      y: 80,
      color: "white",
      radius: 20,
      dx: ballVelocity,
      dy: ballVelocity,
      render: function() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fill();
      }
    });

    let loop = GameLoop({
      update: function() {
        ball.update();
        moveBall(ball, canvas);
        movePlayer(player, canvas, playerVelocity);
        collision(ball, player, canvas);
      },
      render: function() {
        ball.render();
        player.render();
      }
    });

    loop.start(); // start the game
  });

  return <canvas height="400" width="600" className={styles.canvas}></canvas>;
};

export default Canvas;
