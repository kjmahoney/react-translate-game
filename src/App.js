import React from "react";
import Canvas from './Canvas';
import styles from './App.module.scss'

const App = () => {
  return (
      <div className={styles.container}>
        <Canvas />  
      </div>
    )
};

export default App;
