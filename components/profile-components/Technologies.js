import React from "react";
import Vandal from "./../../resources/arsenal/vandal.png";
import Phantom from "./../../resources/arsenal/phantom.png";
import Operator from "./../../resources/arsenal/operator.png";
import Sheriff from "./../../resources/arsenal/sheriff.png";
import Ghost from "./../../resources/arsenal/ghost.png";
import Technology from "./sub-components/Technology.js";

let skillsArray = [
    {
        name: "MEAN stack",
        Description: "Mongo, Express, Angular and Node.js",
        image: Operator,
        git: "https://github.com/DARTzz/web-development-preetam",
    },
    {
        name: "HTML/CSS",
        Description:
            "Mongo, Express, Angular and Node.js. My Github for the same is provided.",
        image: Vandal,
        git: "https://github.com/DARTzz/web-development-preetam",
    },
    {
        name: "Algorithms",
        Description:
            "Data Structures and Algorithms. I have all the implimentations linked",
        image: Phantom,
        git: "https://github.com/DARTzz/DSA-preetam",
    },
    {
        name: "Networking",
        Description: "Mongo, Express, Angular and Node.js",
        image: Ghost,
        git: "https://github.com/DARTzz",
    },
    {
        name: "Java - SE",
        Description:
            "Java Standalone Edition. I have Learned Collection Interface for various DS and Algox implementations",
        image: Sheriff,
        git: "https://github.com/DARTzz/java-preetam",
    },
];

export default function Technologies(params) {
    React.useEffect(() => {
        const revealSection = function (entries, observer) {
            const [entry] = entries;
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add("section--visible");
            observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.001,
        });
        sectionObserver.observe(document.querySelector(".tech-div"));
    }, []);
    let tech = skillsArray.map((ele) => {
        return <Technology data={ele} theme={params.theme} />;
    });
    return (
        <div className="technologies" id="technologies">
            <div className="about-div projects-div">
                <h1
                    className="projects-heading common-headings"
                    style={{
                        backgroundColor: params.theme.secondary,
                        color: "white",
                    }}
                >
                    My Arsenal
                </h1>
                <h2
                    className="projects-sub-heading common-sub-headings"
                    style={{
                        color: "white",
                    }}
                >
                    HERE IS EVERY SKILL I GOT IN MY POCKET
                </h2>
            </div>
            <div className="tech-div section--hidden">{tech}</div>
        </div>
    );
}
