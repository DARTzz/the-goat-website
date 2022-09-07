import React from "react";
import { Document } from "react-ionicons";
import background1 from "./../../resources/backgrounds/Background1.png";
import resumeLol from "url:./../../resources/PreetamSingh-Resume.pdf";

export default function About(params) {
    let downBut = function (event) {
        event.preventDefault();
        const tempLink = document.createElement("a");
        tempLink.href = resumeLol;
        tempLink.download = "Preetam-Singh-Resume.gif";
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    };
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
        sectionObserver.observe(document.querySelector(".about-paragraph"));
        sectionObserver.observe(document.querySelector(".about-button"));
    }, []);
    return (
        <div
            className="about "
            id="about"
            style={{
                background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), " +
                    "url(" +
                    background1 +
                    ") center/cover no-repeat",
            }}
        >
            <div className="about-div">
                <h1
                    className="about-heading common-headings"
                    style={{
                        backgroundColor: params.theme.secondary,
                        color: "white",
                    }}
                >
                    Who am I ?
                </h1>
                <h2
                    className="about-sub-heading common-sub-headings"
                    style={{
                        color: "white",
                    }}
                >
                    SOME MINUTE STUFF YOU SHOULD KNOW ABOUT ME
                </h2>
            </div>
            <p
                className="about-paragraph section--hidden"
                style={{
                    color: "lightgrey",
                }}
            >
                Ever since I was young, I was very fascinated by Computer
                Science and how all the concepts worked in conjunction with one
                another for Computers to fully function. During my graduation
                years, I grew a keen interest in web applications and
                Networking. I aspire to become a Full-Stack web developer along
                with continuing my reaserch on Web Technologies. I am familiar
                with JavaScript MEAN stack along with knowledge of data
                structures and algorithms. I believe that the most important
                aspect of programming and computer science is problem solving
                and hence I put that ideology in every project and decision I
                make.
                <br />I hope u enjoy your stay :)
            </p>

            <a
                className="about-button section--hidden"
                style={{
                    backgroundColor: params.theme.secondary,
                    outlineColor: params.theme.butan,
                }}
                href={resumeLol}
                target="_blank"
                download="open.gif"
                onClick={downBut}
            >
                <span>Resume &nbsp;</span>
                <Document
                    className="mobile-header-icons"
                    color="white"
                    width="3rem"
                    height="3rem"
                />
            </a>
        </div>
    );
}
