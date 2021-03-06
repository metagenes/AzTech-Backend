const conn = require("../configs/db");

module.exports = {
  registerUser: data => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT user SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  registerCheck: data => {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM user WHERE username=? OR email=?`,
        [data.username, data.email],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(result);
          }
        }
      );
    });
  },
  loginUser: data => {
    console.log("sudah sampai disini: ", data);
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM user WHERE username=?`,
        [data.username],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(result);
          }
        }
      );
    });
  }
};
