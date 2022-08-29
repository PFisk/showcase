import React from "react";

const InfoBox = (props) => {

    return (
        <div class="flex items-center flex-col border-2 p-6">
            <h2 class="text-2xl font-bold pb-4">{props.carName}</h2>
            <div class="flex items-start flex-col w-1/4">
                <div class="flex justify-between w-full">
                    <span> Speed:</span> <div class="text-blue-600 font-bold">{props.speed}</div>
                </div>
                <div class="flex justify-between w-full">
                    <span> Handling:</span> <div class="text-blue-600 font-bold">{props.handling}</div>
                </div>
                <div class="flex justify-between w-full">
                    <span> Acceleration:</span> <div class="text-blue-600 font-bold">{props.acceleration}</div>
                </div>
                <div class="flex justify-between w-full">
                    <span> Style:</span> <div class="text-blue-600 font-bold">{props.style}</div>
                </div>
            </div>
        </div>
    )
}

export default InfoBox;