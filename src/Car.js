import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";


export function Car(props) {

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + props.model
    )

    console.log("gltf", gltf)

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

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();

/*         let group = gltf.scene.children[0].children[0]
               
        //front right wheel
        group.children[12].rotation.x = t * 2;

        //front left wheel
        group.children[10].rotation.x = t * 2;

        //back left wheel
        group.children[11].rotation.x = t * 2;

        //back right wheel
        group.children[13].rotation.x = t * 2 */


        //bimmer wheels
        let group = gltf.scene.children[0].children[0]
               
        //back left wheel
        group.children[22].rotation.x = t * 2;
        group.children[23].rotation.x = t * 2;
        group.children[24].rotation.x = t * 2;
        group.children[25].rotation.x = t * 2

    })

    
    return <primitive object={gltf.scene} />
}