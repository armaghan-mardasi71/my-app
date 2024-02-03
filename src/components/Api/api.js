import { Octokit } from "octokit";

const token = `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`;

const octokit = new Octokit({
  auth: token
});

async function sendReq() {
  const result = await octokit.request("GET /users/{username}", {
    username: "mojtabast",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });
  return result;
}

export default sendReq;
