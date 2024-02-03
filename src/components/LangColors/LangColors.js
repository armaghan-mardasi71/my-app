import "./LangColors.css";
import React from "react";

export default function LangColors({ lang, width, border }) {
  return (
    <>
      <div
        style={{ width: width, borderRadius: border }}
        className={
          (lang === "JavaScript" && "lang-color yellow") ||
          (lang === "HTML" && "lang-color red") ||
          (lang === "CSS" && "lang-color purple") ||
          (lang === "TypeScript" && "lang-color dark-blue") ||
          (lang === "Objective-C" && "lang-color light-blue") ||
          (lang === "Java" && "lang-color dark-yellow") ||
          (lang === "C" && "lang-color dark-grey") ||
          (lang === "PHP" && "lang-color dark-purple") ||
          (lang === "C++" && "lang-color pinkk") ||
          (lang === "Objective-C++" && "lang-color lightPurple") ||
          (lang === "Assembly" && "lang-color brownn")
        }
      ></div>
    </>
  );
}
