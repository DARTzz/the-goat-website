import React from "react";
import Profile from "./components/profile-components/Profile.js";
import Eternity from "url:./resources/music/Eternity.mp3";
import Cats from "url:./resources/music/Cats.mp3";
import OntoTheNext from "url:./resources/music/OntoTheNext.mp3";
import Paradise from "url:./resources/music/Paradise.mp3";
import Forever from "url:./resources/music/Forever.mp3";
import Flora from "url:./resources/videos/Flora.mp4";
import NeonVid from "url:./resources/videos/Neon2.mp4";
import ViperVid from "url:./resources/videos/Viper.mp4";
import PhoenixVid from "url:./resources/videos/Phoenix.mp4";

const audio1 = new Audio(Cats);
audio1.loop = true;
const audio2 = new Audio(Eternity);
audio2.loop = true;
const audio3 = new Audio(OntoTheNext);
audio3.loop = true;
const audio4 = new Audio(Paradise);
audio4.loop = true;
let audio = [audio1, audio2, audio3, audio4];
const audio5 = new Audio(Forever);
audio5.loop = true;
let videos = [Flora, PhoenixVid, ViperVid, NeonVid];

let themes = [
    {
        primary: "white",
        secondary: "rgb(252, 70, 70)",
        tertiary: "rgba(128, 128, 128, 0.8)",
        fourth: "#bbd0ff",
        page: "white",
        text: "black",
        butan: "#005f73",
    },
    {
        primary: "rgba(0,0,0,0.9 )",
        secondary: "#e36414",
        tertiary: "white",
        fourth: "#eae2b7",
        page: "black",
        text: "white",
        butan: "#dc2f02",
    },
    {
        primary: "white",
        secondary: "#588157",
        tertiary: "#344e41",
        fourth: "#cce3de",
        page: "white",
        text: "black",
        butan: "#344e41",
    },
    {
        primary: "#3a86ff",
        secondary: "#fb8b24",
        tertiary: "white",
        fourth: "white",
        page: "white",
        text: "black",
        butan: "#3a86ff",
    },
];

export default function App(params) {
    let [appMusic, changeAppMusic] = React.useState({
        music: null,
        onn: false,
        p: -1,
    });
    React.useEffect(() => {
        if (!appMusic.onn) {
            audio.forEach((ele) => {
                ele.pause();
            });
            return;
        }
        if (appMusic.p == -1) return; // not running first time

        audio5.pause();
        audio.forEach((element, index) => {
            if (index == appMusic.p) {
                changeAppMusic((m) => {
                    return {
                        ...m,
                        music: audio[appMusic.p],
                    };
                });
                element.play();
            } else element.pause();
        });
    }, [appMusic.p, appMusic.onn]);
    React.useEffect(() => {
        if (appMusic.onn && appMusic.p == -1) audio5.play();
        else audio5.pause();
    }, [appMusic.onn]);

    React.useEffect(() => {
        // smooth scrolling
        const allLinks = document.querySelectorAll("a");

        allLinks.forEach(function (link) {
            link.addEventListener("click", function (e) {
                if (this.classList.contains("no-default")) return;
                e.preventDefault();
                const href = link.getAttribute("href");

                // Scroll back to top
                if (href === "#")
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });

                // Scroll to other links
                if (href != "" && href !== "#" && href.startsWith("#")) {
                    const sectionEl = document.querySelector(href);
                    if (sectionEl.classList.contains("section--hidden")) {
                        const top = sectionEl.getBoundingClientRect().top;
                        window.scrollTo({
                            left: 0,
                            top: top + window.scrollY - "80",
                            behavior: "smooth",
                        });
                    } else {
                        sectionEl.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        });
    }, []);
    return (
        <Profile
            appMusic={appMusic}
            changeAppMusic={changeAppMusic}
            videoUrl={videos[appMusic.p == -1 ? 1 : appMusic.p]}
            theme={themes[appMusic.p == -1 ? 1 : appMusic.p]}
        />
    );
}
