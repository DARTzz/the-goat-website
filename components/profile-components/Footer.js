import React from "react";
import logo from "./../../resources/preetamSingh.png";
import { LogoGithub } from "react-ionicons";
import { LogoLinkedin } from "react-ionicons";
import { LogoWhatsapp } from "react-ionicons";
import { Mail } from "react-ionicons";
import { Call } from "react-ionicons";

export default function Footer(params) {
    const preventingDefault1 = function (event) {
        event.preventDefault();
        window.open("https://github.com/DARTzz", "_blank");
    };
    const preventingDefault2 = function (event) {
        event.preventDefault();
        window.open(
            "mailto:singhpreetam032@gmail.com?Subject=Hello :)",
            "_blank"
        );
    };
    const preventingDefault3 = function (event) {
        event.preventDefault();
        window.open(
            "https://www.linkedin.com/in/preetam-singh-a83b6a203",
            "_blank"
        );
    };
    const preventingDefault4 = function (event) {
        event.preventDefault();
        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return (
                    navigator.userAgent.match(/IEMobile/i) ||
                    navigator.userAgent.match(/WPDesktop/i)
                );
            },
            any: function () {
                return (
                    isMobile.Android() ||
                    isMobile.BlackBerry() ||
                    isMobile.iOS() ||
                    isMobile.Opera() ||
                    isMobile.Windows()
                );
            },
        };

        if (isMobile.any()) {
            window.open(
                "https://wa.me/919027847782/?text=Hi Preetam, Whatsup",
                "_blank"
            );
        } else {
            window.open(
                "https://web.whatsapp.com/send?phone=+919027847782&text&app_absent=0",
                "_blank"
            );
        }
    };
    const preventingDefault5 = function (event) {
        event.preventDefault();
        window.open("tel:+919027847782", "_blank");
    };

    return (
        <div className="footer" id="footer">
            <div className="footer-upper" style={{ backgroundColor: "black" }}>
                <div className="footer-upper-quote">
                    "Accept Existence or Expect Resistance"
                </div>
            </div>
            <div className="footer-lower">
                <div className="footer-lower-contacts">
                    <a
                        className="footer-icon"
                        style={{
                            backgroundColor: params.theme.butan,
                            outlineColor: "white",
                        }}
                        href="https://github.com/DARTzz"
                        onClick={preventingDefault1}
                    >
                        <LogoGithub color="white" width="4rem" height="4rem" />
                    </a>
                    <a
                        className="footer-icon"
                        style={{
                            backgroundColor: params.theme.butan,
                            outlineColor: "white",
                        }}
                        href="mailto:singhpreetam032@gmail.com?Subject=Hello :)"
                        onClick={preventingDefault2}
                    >
                        <Mail color="white" width="4rem" height="4rem" />
                    </a>
                    <a
                        className="footer-icon"
                        style={{
                            backgroundColor: params.theme.butan,
                            outlineColor: "white",
                        }}
                        href="https://www.linkedin.com/in/preetam-singh-a83b6a203"
                        onClick={preventingDefault3}
                    >
                        <LogoLinkedin
                            color="white"
                            width="4rem"
                            height="4rem"
                        />
                    </a>
                    <a
                        className="footer-icon"
                        style={{
                            backgroundColor: params.theme.butan,
                            outlineColor: "white",
                        }}
                        href="https://web.whatsapp.com/send?phone=+919027847782&text&app_absent=0"
                        onClick={preventingDefault4}
                    >
                        <LogoWhatsapp
                            color="white"
                            width="4rem"
                            height="4rem"
                        />
                    </a>
                    <a
                        className="footer-icon"
                        style={{
                            backgroundColor: params.theme.butan,
                            outlineColor: "white",
                        }}
                        href="tel:+919027847782"
                        onClick={preventingDefault5}
                    >
                        <Call color="white" width="4rem" height="4rem" />
                    </a>
                </div>
                <div className="footer-lower-div">
                    <img className="footer-logo" src={logo}></img>
                    <div className="footer-lower-text">
                        Made by{" "}
                        <span className="preetam-singh-name">
                            Preetam Singh
                        </span>
                        , Inspired from{" "}
                        <span className="valorant-name">
                            Valorant - Riot Games
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
