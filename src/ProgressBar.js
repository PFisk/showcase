import React from "react";

const ProgressBar = (props) => {

    const { max, state } = props;

    return (
        <div className="flex w-full justify-between">
            {
                [...Array(max).keys()].map((_, idx) => { 
                    return (
                        <div className={`w-1 md:w-2 h-6 mr-1 bg-black 
                            ${idx > state ? "opacity-20" : "opacity-90"}`}>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProgressBar;