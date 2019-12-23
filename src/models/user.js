const conn = require('../configs/db')

module.exports = {
    getUser: () => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `SELECT * FROM user`,
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
    getUserByID: id => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `SELECT * FROM user where id_user = ?`,id,
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
    getUserHistory: id => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `SELECT P.name, V.status FROM user U JOIN transaction T ON U.id_user = T.id_user JOIN voucher V on V.id_user=T.id_user JOIN partner P ON P.id_partner = V.id_partner where U.id_user = ?`,id,
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
    orderVoucher: (dataOrder) => {
		return new Promise ((resolve, reject) => {
			conn.query(
				`INSERT into transaction SET ?`,
				[dataOrder],
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