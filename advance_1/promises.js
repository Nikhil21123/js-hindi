const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB call, network call
  setTimeout(function () {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task Two");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async two Resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ user: "Nikhil", email: "nik@gmail.com" });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "nikhil", pass: "123" });
    } else {
      reject("ERROR: ");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });
