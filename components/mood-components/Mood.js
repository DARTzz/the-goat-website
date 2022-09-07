import React from "react";
import MoodCard from "./MoodCard.js";
import Calm from "./../../resources/mood/Calm.png";
import Chaos from "./../../resources/mood/Chaos.png";
import Neon from "./../../resources/mood/Neon.png";
import Mist from "./../../resources/mood/Mist.png";
import Bk from "./../../resources/mood/ValoBack.jpg";
import Reyna from "./../../resources/mood/Reyna.jpg";
import Sage from "./../../resources/mood/Sage.jpg";
import Jett from "./../../resources/mood/Jett.jpg";
import frame1 from "./../../resources/mood/frame2.png";
import Viper from "./../../resources/mood/Viper.jpg";

export default function Mood(params) {
    let [backGround, changeBackground] = React.useState({
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${Bk}) center/cover  no-repeat`,
    });
    let [music, changeMusic] = React.useState({
        p: -1,
    });
    React.useEffect(() => {
        params.changeAppMusic((original) => {
            return {
                ...original,
                p: music.p,
            };
        });
    }, [music]);

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
        sectionObserver.observe(document.querySelector(".mood-div"));
        sectionObserver.observe(document.querySelector(".mood-foot"));
    }, []);

    return (
        <div className="mood" style={backGround} id="mood">
            <img className="preLoad" src={Viper}></img>
            <img className="preLoad" src={Reyna}></img>
            <img className="preLoad" src={Sage}></img>
            <img className="preLoad" src={Jett}></img>
            <h1 className="mood-title ">What agent are you feeling today?</h1>
            <div className="mood-div section--hidden">
                <MoodCard
                    txt="Jett"
                    link={Calm}
                    back={Sage}
                    handler={changeBackground}
                    musicHandler={changeMusic}
                    p="0"
                />
                <MoodCard
                    txt="Phoenix"
                    link={Mist}
                    back={Jett}
                    handler={changeBackground}
                    musicHandler={changeMusic}
                    p="1"
                />
                <MoodCard
                    txt="Viper"
                    link={Neon}
                    back={Viper}
                    handler={changeBackground}
                    musicHandler={changeMusic}
                    p="2"
                />
                <MoodCard
                    txt="Neon"
                    link={Chaos}
                    back={Reyna}
                    handler={changeBackground}
                    musicHandler={changeMusic}
                    p="3"
                />
            </div>
            <div className="mood-foot section-hidden">
                <div className="mood-foot-cred">
                    Life if full of difficult choices, but choosing a theme is
                    easy
                </div>
            </div>
            <img className="frame" src={frame1}></img>
        </div>
    );
}
