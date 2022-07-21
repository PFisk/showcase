import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

export function Ground() {

    const [roughness, normal, alpha] = useLoader(TextureLoader, [
        process.env.PUBLIC_URL + "textures/asphalt-roughness.jpg",
        process.env.PUBLIC_URL + "textures/asphalt-normal.jpg",
        process.env.PUBLIC_URL + "textures/alpha-10.png",
    ]);

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(2, 2);
        });

        normal.encoding = LinearEncoding;
        roughness.encoding = LinearEncoding;
    }, [normal, roughness])

    useFrame(({ clock }) => {
        const t = -clock.getElapsedTime() * 0.128;
        roughness.offset.set(t, 0);
        normal.offset.set(t, 0);
    })

    return (
        <>
            <mesh rotation-x={-Math.PI * 0.5} rotation-z={Math.PI * 0.5} castShadow receiveShadow>
                <circleGeometry
                    args={[7, 100]} />
                <meshStandardMaterial
                    envMapIntensity={0}
                    transparent={true}
                    normalMap={normal}
                    normalScale={[1, 5]}
                    roughnessMap={roughness}
                    roughness={1}
                    color={[0.01, 0.01, 0.01]} />
            </mesh>
            <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.01, 0]}>
                <circleGeometry
                    args={[9, 100]} />
                <meshStandardMaterial
                    envMapIntensity={0}
                    alphaMap={alpha}
                    transparent={true}
                    color={[0.01, 0.01, 0.01]}/>
            </mesh>
        </>
    );
}