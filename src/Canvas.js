import React, {useEffect}  from "react";
import { init } from "kontra";

const Canvas = () => {
  useEffect(() => {
    init();
  });

  return <canvas></canvas>;
};

export default Canvas;
