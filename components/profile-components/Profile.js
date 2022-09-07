import React from "react";
import Mood from "./../mood-components/Mood.js";
import Header from "./Header.js";
import Banner from "./Banner.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Technologies from "./Technologies.js";
import Footer from "./Footer.js";

export default function Profile(params) {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Header
                appMusic={params.appMusic}
                changeAppMusic={params.changeAppMusic}
                theme={params.theme}
            />
            <Banner videoUrl={params.videoUrl} theme={params.theme} />

            <Mood changeAppMusic={params.changeAppMusic} />
            <About theme={params.theme} />
            <Projects theme={params.theme} />
            <Technologies theme={params.theme} />
            <Footer theme={params.theme} />
            <div
                className="line1"
                style={{ backgroundColor: params.theme.secondary }}
            ></div>
            <div
                className="line2"
                style={{ backgroundColor: params.theme.secondary }}
            ></div>
            <div
                className="line3"
                style={{ backgroundColor: params.theme.secondary }}
            ></div>
        </div>
    );
}
