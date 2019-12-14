import React, { useEffect } from "react";
import { init, Sprite, GameLoop } from "kontra";
import { move } from "./utils/move.js";
import settings from "./settings";
import styles from "./Canvas.module.scss";

const { ballVelocity } = settings;

const Canvas = () => {
  useEffect(() => {
    const { canvas } = init();

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
        move(ball, canvas);
      },
      render: function() {
        ball.render();
      }
    });

    loop.start(); // start the game
  });

  return <canvas height="400" width="600" className={styles.canvas}></canvas>;
};

export default Canvas;
