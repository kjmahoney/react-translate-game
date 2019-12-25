import React, { useEffect } from "react";
import Phaser from "phaser";
import { moveBall } from "./utils/move-ball.js";
import { movePlayer } from "./utils/move-player.js";
import { collision } from "./utils/collision.js";
import settings from "./settings";
import styles from "./Canvas.module.scss";
import Field from "./grass.jpg";

const Canvas = () => {
  const fieldWidth = window.innerWidth - 100;
  const fieldHeight = window.innerHeight - 100;

  useEffect(() => {
    var config = {
      type: Phaser.CANVAS,
      width: fieldWidth,
      height: fieldHeight,
      parent: "canvasContainer",
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    var game = new Phaser.Game(config);

    function preload() {
      this.load.image("field", Field);
    }

    function create() {
      const field = this.add.image(0, 0, "field").setOrigin(0, 0);
      field.displayWidth = fieldWidth;
      field.displayHeight = fieldHeight;
    }

    function update() {}
  });

  return <div className={styles.container} id="canvasContainer"></div>;
};

export default Canvas;
