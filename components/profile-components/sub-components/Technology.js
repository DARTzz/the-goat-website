import React from "react";

export default function Technology(params) {
    const preventingDefault = function (event) {
        event.preventDefault();
        window.open(params.data.git, "_blank");
    };
    return (
        <a
            href={params.data.git}
            className="technology"
            onClick={preventingDefault}
        >
            <img className="techImage-image" src={params.data.image}></img>
            <span
                className="techText-text"
                style={{
                    backgroundColor: params.theme.butan,
                    color: "white",
                    outlineColor: "white",
                }}
            >
                {params.data.name}
            </span>
        </a>
    );
}
