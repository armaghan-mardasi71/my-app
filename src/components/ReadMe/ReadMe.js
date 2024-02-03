import React from "react";
import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/system/Box";
import Divider from "@mui/material/Divider";
import { IoBookOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { IoIosList } from "react-icons/io";
import ReactHtmlParser from "react-html-parser";
import myToken from "../../myToken";

export default function ReadMe() {
  const params = useParams();
  const [readMe, setReadMe] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request(
        "GET /repos/{owner}/{repo}/readme",
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
    getRepos()
      .then((data) => {
        const decoded = atob(data.content);

        setReadMe(decoded);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {readMe.length !== 0 && (
        <Box
          component="section"
          sx={{
            p: 2,
            border: "1px solid rgba(224, 224, 224, 1)",
            borderRadius: 1,
            color: "#5f7161"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Link to="#">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  columnGap: 8,
                  color: "#5f7161",
                  borderBottom: "2px solid rgb(255, 111, 8)",
                  paddingBottom: 10
                }}
              >
                <IoBookOutline />{" "}
                <span style={{ fontSize: 14, fontWeight: "bold" }}>README</span>
              </div>
            </Link>
            <div
              style={{ display: "flex", alignItems: "center", columnGap: 20 }}
            >
              <Link to="#" style={{ color: "#5f7161", fontSize: 18 }}>
                {" "}
                <LuPencil />
              </Link>{" "}
              <a href="#" style={{ color: "#5f7161", fontSize: 18 }}>
                <IoIosList />
              </a>
            </div>
          </div>
          <Divider />

          <div
            style={{
              margin: "40px 0",
              fontFamily: "sans-serif",
              lineHeight: 1.5
            }}
          >
            {ReactHtmlParser(readMe)}
          </div>
        </Box>
      )}
    </>
  );
}
