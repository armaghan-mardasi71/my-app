import Overview from "./components/Overview/Overview";
import Repositories from "./components/Repositories/Repositories";
import Projects from "./components/Projects/Projects";
import Packages from "./components/Packages/Packages";
import Stars from "./components/Stars/Stars";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RepoPage from "./pages/RepoPage/RepoPage";
import Code from "./components/Code/Code";
import Issues from "./components/Issues/Issues";
import PullReq from "./components/PullReq/PullReq";
import Actions from "./components/Actions/Actions";
import NavProjects from "./components/NavProjects/NavProjects";
import Security from "./components/Security/Security";
import Insights from "./components/Insights/Insights";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchTopics from "./components/SearchTopics/SearchTopics";
import SearchIssues from "./components/SearchIssues/SearchIssues";
import SearchRepos from "./components/SearchRepos/SearchRepos";
import SearchUsers from "./components/SearchUsers/SearchUsers";

const routes = [
  {
    path: "/:username/",
    element: <ProfilePage />,
    children: [
      { path: "overview", element: <Overview /> },
      {
        path: "repositories",
        element: <Repositories />
      },
      { path: "projects", element: <Projects /> },
      { path: "packages", element: <Packages /> },
      { path: "stars", element: <Stars /> }
    ]
  },

  {
    path: "/:repoOwner/:repoName/",
    element: <RepoPage />,
    children: [
      { path: "code", element: <Code /> },
      { path: "issues", element: <Issues /> },
      { path: "pull-requests", element: <PullReq /> },
      { path: "actions", element: <Actions /> },
      { path: "nav-projects", element: <NavProjects /> },
      { path: "security", element: <Security /> },
      { path: "insights", element: <Insights /> }
    ]
  },
  {
    path: "/:username/search/",
    element: <SearchPage />,
    children: [
      { path: "search-topics", element: <SearchTopics /> },
      { path: "search-issues", element: <SearchIssues /> },
      { path: "search-repos", element: <SearchRepos /> },
      { path: "search-users", element: <SearchUsers /> }
    ]
  }
];

export default routes;
