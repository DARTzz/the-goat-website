import React from "react";
import { LogoGithub } from "react-ionicons";
import { Globe } from "react-ionicons";

export default function ProjectsCard(params) {
    const preventingDefault1 = function (event) {
        event.preventDefault();
        window.open(params.data.git, "_blank");
    };
    const preventingDefault2 = function (event) {
        event.preventDefault();
        window.open(params.data.link, "_blank");
    };
    return (
        <div className="projects-card">
            <div className="project-image-div">
                <img className="project-image" src={params.data.src}></img>
            </div>
            <p
                className="project-paragraph"
                style={{
                    backgroundColor: "white",
                    color: "black",
                }}
            >
                {params.data.description}
            </p>
            <a
                className="github-button"
                href={params.data.git}
                target="_blank"
                style={{
                    backgroundColor: params.theme.butan,
                    outlineColor: params.theme.butan,
                }}
                onClick={preventingDefault1}
            >
                <span className="github-button-span">GitHub</span>
                <LogoGithub
                    className="mobile-header-icons"
                    color="white"
                    width="2.5rem"
                    height="2.5rem"
                />
            </a>
            <a
                className="link-button"
                href={params.data.link}
                target="_blank"
                style={{
                    backgroundColor: params.theme.secondary,
                    outlineColor: params.theme.butan,
                }}
                onClick={preventingDefault2}
            >
                <span className="link-button-span">Link</span>
                <Globe
                    className="mobile-header-icons"
                    color="white"
                    width="2.5rem"
                    height="2.5rem"
                />
            </a>
        </div>
    );
}
