import "./App.css";

import routes from "./routes";
import { useRoutes, useLocation } from "react-router-dom";
import { React, useState, useEffect, createContext, useContext } from "react";
import { reposContext } from "./contexts/Contexts";
import { userInfoContext } from "./contexts/Contexts";
import myToken from "./myToken";
import { Octokit } from "octokit";
// import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const router = useRoutes(routes);
  const [allRepos, setAllRepos] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const loc = useLocation();

  useEffect(() => {
    const getRepos = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request("GET /users/{username}/repos", {
        username: loc.pathname.slice(1, loc.pathname.length + 1),
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });

      return repoResult.data;
    };
    getRepos()
      .then((res) => setAllRepos(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const octokit = new Octokit({
      auth: myToken
    });

    async function sendReq() {
      const infoResult = await octokit.request("GET /users/{username}", {
        username: loc.pathname.slice(1, loc.pathname.length + 1),
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });
      return infoResult.data;
    }
    sendReq()
      .then((res) => setUserInfo(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <reposContext.Provider value={{ allRepos, setAllRepos }}>
        <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
          {router}
        </userInfoContext.Provider>
      </reposContext.Provider>
    </>
  );
}

export default App;
