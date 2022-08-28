import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Ground } from './Ground';
import { Car } from './Car';

export const CarShow = (props) => {

    const {currentCar} = props
    
    return (
      <>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
  
        <color args={[1, 1, 1]} attach="background" />
        <Car model={currentCar.model} scale={currentCar.scale} wheels={currentCar.wheels}/>
  
        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[5, 5, 0]}
          castShadow shadow-bias={-0.0001}
        />
  
        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={2}
          angle={0.6}
          penumbra={0.5}
          position={[-5, 5, 0]}
          castShadow shadow-bias={-0.0001}
        />
  
        <spotLight
          color={[1, 1, 1]}
          intensity={2}
          angle={0.7}
          penumbra={0.5}
          position={[0, 10, 0]}
          castShadow shadow-bias={-0.0001}
        />

        <spotLight
          color={[1, 1, 1]}
          intensity={0.2}
          angle={0.7}
          penumbra={0.5}
          position={[0, 0.5, -8]}
          castShadow shadow-bias={-0.0001}
        />
  
        <ambientLight intensity={0.6} />
  
        <Ground />
      </>
    )
  }

export default CarShow;