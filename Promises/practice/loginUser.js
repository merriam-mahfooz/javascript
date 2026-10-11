function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      const details = { username: "admin", role: "admin" };
      resolve(details);
    } else {
      reject("Invalid Credentials.");
    }
  });
}
loginUser("admin", "1234")
  .then((result) => {
    console.log(result);
    return "Login Successful";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.log(err));
