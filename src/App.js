import "./style.css";
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CarShow from "./CarShow.js"

let carCount = 1;

function App() {
  const bimmer = {
    model: "models/bimmer_new/scene.gltf",
    scale: 0.3,
    wheels: ["Back_left_wheel", "Back_right_wheel", "Front_left_wheel", "Front_right_wheel"]
  }
  const nissan = {
    model: "models/car3/scene.gltf",
    scale: 2,
    wheels: [10, 11, 12, 13]
  }
/*   const porsche = {
    model: "models/porsche/scene.gltf",
    scale: 0.5,
    wheels: [23, 24, 25, 26]
  } */

  const carDataLocal = [bimmer, nissan]

  const [carData, setCarData] = useState(carDataLocal);
  const [currentCar, setCurrentCar] = useState(carDataLocal[0]);

  useEffect(() => {
    setCarData(carDataLocal);
    setCurrentCar(carData[0])
  }, [])

  function setNextCar() {
    console.log("next car", carData[carCount % carData.length])
    setCurrentCar(carData[carCount % carData.length])
    carCount++;
  }

  return (
    <div>
      <button onClick={() => setNextCar()} type="button">Change car</button>  
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow currentCar={currentCar}/>
      </Canvas>
    </Suspense>
    </div>
  )
}

export default App;