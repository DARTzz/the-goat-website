import React from "react";

export default function MoodCard(params) {
    let changeBack = function () {
        params.handler({
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url(${params.back}) center/cover  no-repeat`,
        });
    };
    let changeMusic = function () {
        params.musicHandler({
            p: params.p,
        });
    };

    return (
        <a href="#banner" className="card-link">
            <div
                className="mood-card"
                onMouseEnter={changeBack}
                onClick={changeMusic}
            >
                <h1 className="mood-name">{params.txt}</h1>
                <img src={params.link} className="mood-image"></img>
            </div>
        </a>
    );
}
