import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

export function Ground() {

    const [roughness, normal, alpha] = useLoader(TextureLoader, [
        process.env.PUBLIC_URL + "textures/asphalt-roughness.jpg",
        process.env.PUBLIC_URL + "textures/asphalt-normal.jpg",
        process.env.PUBLIC_URL + "textures/asphalt-alpha-inv-clean.png",
    ]);

    console.log("alpha", alpha)
    console.log("normal", normal)
    console.log("roughness", roughness)

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5, 5);
        });

        normal.encoding = LinearEncoding;
        roughness.encoding = LinearEncoding;
    }, [normal, roughness])

    useFrame(({ clock }) => {
        const t = -clock.getElapsedTime() * 0.256;
        roughness.offset.set(0, t);
        normal.offset.set(0, t);
    })

    return (
        <>
            <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
                <circleGeometry
                    args={[7, 100]} />
                <meshStandardMaterial
                    envMapIntensity={0}
                    transparent={true}
                    normalMap={normal}
                    normalScale={[1, 1]}
                    roughnessMap={roughness}
                    roughness={1}
                    color={[0.01, 0.01, 0.01]} />
            </mesh>
            <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.01, 0]}>
                <circleGeometry
                    args={[8, 100]} />
                <meshStandardMaterial
                    envMapIntensity={0}
                    alphaMap={alpha}
                    transparent={true}
                    color={[0.01, 0.01, 0.01]}/>
            </mesh>
        </>
    );
}