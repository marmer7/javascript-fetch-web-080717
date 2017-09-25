const app = "I don't do much.";

const token = '3d1fcd989a7447bde8a65faa2db3653cd212bebe'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
