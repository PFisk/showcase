import "./dist/output.css";
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CarShow from "./CarShow.js"
import InfoBox from "./InfoBox";

let carCount = 1;

function App() {
  const bimmer = {
    model: "models/bimmer_new/scene.gltf",
    scale: 0.3,
    wheels: ["Back_left_wheel", "Back_right_wheel", "Front_left_wheel", "Front_right_wheel"],
    carName: "BMW E90",
    speed: 60,
    handling: 40,
    acceleration: 45,
    style: 80
  }
  const nissan = {
    model: "models/car3/scene.gltf",
    scale: 2,
    wheels: [10, 11, 12, 13],
    carName: "Datsun 240Z",
    speed: 50,
    handling: 20,
    acceleration: 65,
    style: 50
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
    setCurrentCar(carData[carCount % carData.length])
    carCount++;
  }

  function setPreviousCar() {
    setCurrentCar(carData[carCount % carData.length])
    carCount--;
  }

  return (
    <div>
      <div>
        <h2 className="flex flex-col items-center text-4xl font-bold pb-4">{currentCar.carName}</h2>
      </div>
      <div className="absolute z-20 bottom-0 top-0 left-0 right-0 w-1/5 h-1/4">
      <InfoBox
        carName={currentCar.carName}
        speed={currentCar.speed}
        handling={currentCar.handling}
        acceleration={currentCar.acceleration}
        style={currentCar.style} />
      </div>
      <div className="absolute z-10 justify-center flex bottom-0 left-0 right-0 pb-20"> 
        <button onClick={() => setPreviousCar()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">⮜ Change car</button>
        <button onClick={() => setNextCar()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Change car ⮞</button>
      </div>
      <Suspense fallback={null}>
        <Canvas shadows>
          <CarShow currentCar={currentCar} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App;