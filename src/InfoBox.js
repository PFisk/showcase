import React from "react";
import ProgressBar from "./ProgressBar";

const InfoBox = (props) => {

    const max = 20;
    const stepDivider = 5;

    return (
        <div className="flex items-center flex-col border-4 border-slate-300 bg-blue-50 rounded-md p-10">
            <div className="flex items-start flex-col">
                <div className="flex justify-between w-full">
                    <span className="font-bold"> Speed:</span> <div className="text-teal-500 font-bold text-xl">{props.speed}</div>
                </div>
                <ProgressBar max={max} state={props.speed/stepDivider}/>
                <div className="flex justify-between w-full pt-2">
                    <span className="font-bold"> Handling:</span> <div className="text-teal-500 font-bold text-xl">{props.handling}</div>
                </div>
                <ProgressBar max={max} state={props.handling/stepDivider}/>
                <div className="flex justify-between w-full pt-2">
                    <span className="font-bold"> Acceleration:</span> <div className="text-teal-500 font-bold text-xl">{props.acceleration}</div>
                </div>
                <ProgressBar max={max} state={props.acceleration/stepDivider}/>
                <div className="flex justify-between w-full pt-2">
                    <span className="font-bold"> Style:</span> <div className="text-teal-500 font-bold text-xl">{props.style}</div>
                </div>
                <ProgressBar max={max} state={props.style/stepDivider}/>
            </div>
        </div>
    )
}

export default InfoBox;