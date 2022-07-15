import { MeshReflectorMaterial } from "@react-three/drei/core";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

export function Ground() {

    const [roughness, normal] = useLoader(TextureLoader,  [
        process.env.PUBLIC_URL + "textures/asphalt-roughness.jpg",
        process.env.PUBLIC_URL + "textures/asphalt-normal.jpg",
    ]);

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5, 5);
        });

        normal.encoding = LinearEncoding;
        roughness.encoding = LinearEncoding;
    }, [normal, roughness])

    useFrame((state, delta) => {
        let t = -state.clock.getElapsedTime() * 0.256;
        roughness.offset.set(0, t);
        normal.offset.set(0, t);
    })

    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
            <circleGeometry 
                args={[10, 100]} 
            />
            <meshStandardMaterial 
                envMapIntensity={0}
                normalMap={normal}
                normalScale={[0.15, 0.15]}
                roughness={1}
                roughnessMap={roughness}
                color={[0.1, 0.1, 0.1]}
            />
{/*             <MeshReflectorMaterial 
                envMapIntensity={0}
                normalMap={normal}
                normalScale={[0.15, 0.15]}
                roughnessMap={roughness}
                dithering={true}
                color={[0.015, 0.015, 0.015]}
                roughness={1}
                blur={[1000, 400]}
                mixBlur={50}
                mixStrength={3}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                debug={0}
                reflectorOffset={0.2}
            /> */}
        </mesh>
    );
}