import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { useParams } from "react-router-dom";
import { FaFolder } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";
import "./RepoTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import myToken from "../../myToken";

export default function RepoTable() {
  const [allContents, setAllContents] = useState([]);
  const [allCommits, setAllCommits] = useState([]);

  const params = useParams();


  useEffect(() => {
    const getContents = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request(
        "GET /repos/{owner}/{repo}/contents",
        {
          owner: `${params.repoOwner}`,
          repo: `${params.repoName}`,
          path: "",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        }
      );

      return repoResult.data;
    };
    getContents().then((res) => setAllContents(res));
  }, []);

  useEffect(() => {
    const getCommits = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request(
        "GET /repos/{owner}/{repo}/commits",
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
    getCommits().then((res) => setAllCommits(res));
  }, []);

  console.log(allCommits);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          border: "1px solid rgba(224, 224, 224, 1)",
          marginBottom: 2.5
        }}
      >
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "rgba(167, 165, 165, 0.1)"
              }}
            >
              <TableCell sx={{ paddingY: 1.8, fontWeight: "bold" }}>
                {params.repoOwner}
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allContents.map((content) => (
              <TableRow hover>
                <TableCell component="th" scope="row" sx={{ paddingY: 1.5 }}>
                  {content.type === "dir" ? (
                    <FaFolder style={{ color: "#54aeff" }} />
                  ) : (
                    <FaRegFile style={{ color: "#5f7161" }} />
                  )}{" "}
                  {content.name}
                </TableCell>
                <TableCell align="right" sx={{ color: "#5f7161" }}>
                  start our new project
                </TableCell>
                <TableCell align="right" sx={{ color: "#5f7161" }}>
                  last month
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
