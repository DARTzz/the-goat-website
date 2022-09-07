import React from "react";
import edge from "./../../resources/banner/edge.png";

export default function Banner(params) {
    console.log("called");
    return (
        <div className="banner" id="banner">
            <video
                autoPlay={true}
                muted={true}
                loop={true}
                controls={true}
                id="myVideo"
                key={params.videoUrl}
                playsInline
                type="video/mp4"
            >
                <source
                    src={params.videoUrl}
                    type="video/mp4"
                    className="video-source"
                />
            </video>
            <div className="banner-div">
                <h2
                    className="banner-sub-text"
                    style={{ color: params.theme.fourth }}
                >
                    A kinda cool full stack web developer
                </h2>
                <h1 className="banner-main-text">Preetam - Dartz</h1>
                <a className="banner-button-link" href="#about">
                    <div
                        className="banner-button"
                        style={{ backgroundColor: params.theme.secondary }}
                    >
                        Resume?
                    </div>
                </a>
            </div>
            <img className="edge" src={edge}></img>
        </div>
    );
}
