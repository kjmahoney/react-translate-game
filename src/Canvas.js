import React, { useEffect } from "react";
import { init, Sprite, GameLoop } from "kontra";
import styles from "./Canvas.module.scss";

const Canvas = () => {
  useEffect(() => {
    const { canvas } = init();

    let road = Sprite({
      x: 100, 
      y: 80,
      color: "red", 
      width: 20, 
      height: 40,
    });

    let loop = GameLoop({
      update: function() {
      },
      render: function() {
        road.render();
      }
    });

    loop.start(); // start the game
  });

  return <canvas className={styles.canvas}></canvas>;
};

export default Canvas;
