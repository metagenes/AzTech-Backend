const conn = require('../configs/db')

module.exports = {
    getAll: () => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `SELECT * FROM partner`,
                (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    },
    getByID: id => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `SELECT * FROM partner where id_partner = ?`,id,
                (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    },
}