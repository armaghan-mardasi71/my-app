// import React from "react";
// import myToken from "../myToken";
// import { useState, useEffect } from "react";
// import reposContext from "../contexts/reposContext";
// import { Octokit } from "octokit";
// import { useParams } from "react-router-dom";

// export default function Api() {
//   export const [allRepos, setAllRepos] = useState([]);
//   const params = useParams();
//   // console.log(allRepos)
//   useEffect(() => {
//     const getRepos = async () => {
//       const octokit = new Octokit({
//         auth: myToken
//       });

//       const repoResult = await octokit.request("GET /users/{username}/repos", {
//         username: `${params.username}`,
//         headers: {
//           "X-GitHub-Api-Version": "2022-11-28"
//         }
//       });

//       return repoResult.data;
//     };
//     getRepos().then((res) => setAllRepos(res));
//   }, []);

//   // return [ allRepos, setAllRepos]
// }

// // export [allRepos,setAllRepos]
