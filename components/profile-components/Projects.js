import React from "react";
import ProjectsCard from "./sub-components/ProjectsCard.js";
import FoodFestaLogo from "./../../resources/logos/omnifood-logo.png";
import ForkifyLogo from "./../../resources/logos/forkify-logo.png";
import MappyLogo from "./../../resources/logos/mappy-logo.png";
import ResumeWebsiteLogo from "./../../resources/logos/FinalNewLogo.png";

let porjs = [
    {
        src: FoodFestaLogo,
        description: "An HTML/CSS based front end project",
        link: "https://food-festa-preetam.netlify.app",
        git: "https://github.com/DARTzz/food-festa-preetam",
    },
    {
        src: ForkifyLogo,
        description: "A JavaScript project with MVC architecture",
        link: "https://forkify-preetam.netlify.app",
        git: "https://github.com/DARTzz/forkify-preetam",
    },
    {
        src: MappyLogo,
        description: "An Experimental app utilizing Geolocation API",
        link: "https://mappy-preetam.netlify.app",
        git: "https://github.com/DARTzz/mappy-preetam",
    },
    {
        src: ResumeWebsiteLogo,
        description: "My Old depricated profile site with front end.",
        link: "https://preetam-singh-portfolio.netlify.app",
        git: "https://github.com/DARTzz/resume-website-preetam",
    },
];

export default function Projects(params) {
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
        sectionObserver.observe(document.querySelector(".projects-cards"));
    }, []);
    const projectsCardsArray = porjs.map((ele) => {
        return <ProjectsCard theme={params.theme} data={{ ...ele }} />;
    });
    return (
        <div className="projects" id="projects">
            <div className="about-div projects-div">
                <h1
                    className="projects-heading common-headings"
                    style={{
                        backgroundColor: params.theme.secondary,
                        color: "white",
                    }}
                >
                    My Projects
                </h1>
                <h2
                    className="projects-sub-heading common-sub-headings"
                    style={{
                        color: "grey",
                    }}
                >
                    HERE ARE SOME OF MY AWESOME PROJECTS
                </h2>
            </div>
            <div className="projects-cards section--hidden">
                {projectsCardsArray}
            </div>
        </div>
    );
}
