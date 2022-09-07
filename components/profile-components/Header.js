import React from "react";
import preetamSingh from "url:./../../resources/preetamSingh.png";
import falcon from "url:./../../resources/logos/falcon.png";
import musicPng from "url:./../../resources/music/Music2.gif";
import { PauseCircleOutline } from "react-ionicons";
import { PlayCircleOutline } from "react-ionicons";
import { Contrast } from "react-ionicons";
import { Code } from "react-ionicons";

export default function Header(params) {
    function toggleMusic() {
        params.changeAppMusic((ele) => {
            return {
                ...ele,
                onn: !params.appMusic.onn,
            };
        });
        if (params.appMusic.onn) {
            document.querySelector(".header-pause-icon").style.display = "none";
            document.querySelector(".header-play-icon").style.display = "block";
        } else {
            document.querySelector(".header-pause-icon").style.display =
                "block";
            document.querySelector(".header-play-icon").style.display = "none";
        }
    }
    return (
        <div
            className="header"
            style={{
                backgroundColor: params.theme.primary,
                outlineColor: params.theme.butan,
            }}
        >
            <div className="header-logo full-logo">
                <img src={preetamSingh} className="header-image"></img>
            </div>
            <div className="header-logo falcon-logo-one">
                <img src={falcon} className="header-image"></img>
            </div>

            <div className="header-nav header-nav-one">
                <a
                    className="header-nav-link"
                    style={{ color: params.theme.tertiary }}
                    href="#mood"
                >
                    MOOD MECHANIC
                </a>
                <a
                    className="header-nav-link"
                    style={{ color: params.theme.tertiary }}
                    href="#projects"
                >
                    PROJECTS
                </a>
                <a
                    className="header-nav-link"
                    style={{ color: params.theme.tertiary }}
                    href="#technologies"
                >
                    MY ARSENAL
                </a>
                <a
                    className="header-nav-link header-nav-special "
                    style={{ backgroundColor: params.theme.secondary }}
                    href="#footer"
                >
                    Contact
                </a>
            </div>
            <div className="header-nav header-nav-two">
                <a
                    className="header-nav-link"
                    style={{ color: params.theme.tertiary }}
                    href="#mood"
                >
                    <Contrast
                        className="mobile-header-icons"
                        color={params.theme.tertiary}
                        width="2rem"
                        height="2rem"
                    />
                </a>
                <a
                    className="header-nav-link"
                    style={{ color: params.theme.tertiary }}
                    href="#projects"
                >
                    <Code
                        className="mobile-header-icons"
                        color={params.theme.tertiary}
                        width="2rem"
                        height="2rem"
                    />
                </a>
                <a
                    className="header-nav-link"
                    style={{ color: params.theme.tertiary }}
                    href="#technologies"
                >
                    MY ARSENAL
                </a>
                <a
                    className="header-nav-link header-nav-special "
                    style={{ backgroundColor: params.theme.secondary }}
                    href="#footer"
                >
                    Contact
                </a>
            </div>
            <div className="header-music" onClick={toggleMusic}>
                <div className="header-music-div">
                    <img src={musicPng} className="header-gif"></img>
                    <PauseCircleOutline
                        className="header-pause-icon"
                        color={params.theme.secondary}
                        width="5rem"
                        height="5rem"
                    />
                    <PlayCircleOutline
                        className="header-play-icon"
                        color={params.theme.secondary}
                        width="5rem"
                        height="5rem"
                    />
                </div>
            </div>
        </div>
    );
}
