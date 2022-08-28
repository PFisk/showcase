import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";


export function Car(props) {

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + props.model
    )

    useEffect(() => {
        gltf.scene.scale.set(props.scale, props.scale, props.scale);
        gltf.scene.position.set(0, 0, 0);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf, props.scale]);

    console.log("gltf", gltf.scene.children[0].children[0])

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();

        let group = gltf.scene.children[0].children[0];

        //Rotate wheels
        group.children[group.children.findIndex(c => c.name === props.wheels[0])].rotation.x = t * 2;
        group.children[group.children.findIndex(c => c.name === props.wheels[1])].rotation.x = t * 2;
        group.children[group.children.findIndex(c => c.name === props.wheels[2])].rotation.x = t * 2;
        group.children[group.children.findIndex(c => c.name === props.wheels[3])].rotation.x = t * 2;

    })

    
    return <primitive object={gltf.scene} />
}