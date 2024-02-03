import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LanguagesBar.css";
import LangColors from "../LangColors/LangColors";
import { Octokit } from "octokit";
import myToken from "../../myToken";

export default function LanguagesBar() {
  const params = useParams();

  const [allLangs, setAllLangs] = useState([]);
  let [newObj, setNewObj] = useState([]);

  useEffect(() => {
    const getLangs = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request(
        "GET /repos/{owner}/{repo}/languages",
        {
          owner: `${params.repoOwner}`,
          repo: `${params.repoName}`,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        }
      );

      return repoResult.data;
    };
    getLangs()
      .then((data) => {
        setAllLangs(data);
        calculateLangTotal();
      })
      .catch((err) => console.log(err));
  }, [allLangs]);

  console.log(allLangs);

  function calculateLangTotal() {
    let total = 0;

    Object.entries(allLangs).map((obj) => {
      const value = obj[1];
      total += value;
      return total;
    });
    langCalc(total);
  }

  function langCalc(total) {
    let finalObj = [];
    Object.entries(allLangs).map((obj) => {
      const key = obj[0];
      const value = obj[1];
      let langPercentage = ((value * 100) / total).toFixed(1);

      finalObj = { ...finalObj, [key]: langPercentage };
    });
    setNewObj(finalObj);
  }

  return (
    <>
      <div className="lang-chart-container">
        <div className="lang-chart">
          {Object.entries(newObj).length >= 5
            ? Object.entries(newObj)
                .sort((a, b) => b - a)
                .slice(0, 5)
                .filter((item) => item[1] >= 5)
                .map((lang) => {
                  return (
                    <LangColors
                      lang={lang[0]}
                      width={(lang[1] / 100) * 350}
                      border="unset"
                    />
                  );
                })
            : Object.entries(newObj)
                .filter((item) => item[1] >= 5)
                .map((lang) => {
                  return (
                    <LangColors
                      lang={lang[0]}
                      width={(lang[1] / 100) * 350}
                      border="unset"
                    />
                  );
                })}
        </div>
        {/* lang-percents */}
        <div className="lang-percents">
          {Object.entries(newObj).length >= 5
            ? Object.entries(newObj)
                .sort((a, b) => b - a)
                .slice(0, 5)
                .filter((item) => item[1] >= 5)
                .map((lang) => {
                  return (
                    <div className="each-lang">
                      <LangColors lang={lang[0]} />

                      <span style={{ height: "15px" }}>{lang[0]}</span>
                      <span style={{ height: "15px" }}>{lang[1]} %</span>
                    </div>
                  );
                })
            : Object.entries(newObj)
                .filter((item) => item[1] >= 5)
                .map((lang) => {
                  return (
                    <div className="each-lang">
                      <LangColors lang={lang[0]} />

                      <span style={{ height: "15px" }}>{lang[0]}</span>
                      <span style={{ height: "15px" }}>{lang[1]} %</span>
                    </div>
                  );
                })}
        </div>
      </div>
    </>
  );
}
