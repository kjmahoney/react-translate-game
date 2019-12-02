import React, {useEffect}  from "react";
import { init } from "kontra";
import styles from './Canvas.module.scss';

const Canvas = () => {
  useEffect(() => {
    init();
  });

  return <canvas className={styles.canvas}></canvas>;
};

export default Canvas;
