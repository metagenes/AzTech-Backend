const conn = require('../configs/db')

module.exports = {
    getAll: () => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `SELECT * FROM partner order by id_partner DESC`,
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
    updateStock: id => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `UPDATE partner SET stock = (stock - 1) WHERE id_partner = ?`,id,
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
    searchPartner: search => {
        console.log(`ini search`,search)
        return new Promise ((resolve,reject) => {
            conn.query(
                `SELECT * FROM partner WHERE name REGEXP CONCAT ('\', ?,'\') `,[search],
                (err,response) => {
                    if (!err){
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    
    },
    postPartner:(dataPartner) => {
		return new Promise ((resolve, reject) => {
			conn.query(
				`INSERT into partner SET ?`,
				[dataPartner],
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
    getVeggies:() => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `SELECT * FROM partner where category="sayur"`,
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
    getCategory:() => {
        return new Promise ((resolve, reject) => {
            conn.query(
               `SELECT * FROM partner ORDER BY RAND() LIMIT 5`,
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
    deleteByID: id => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `DELETE FROM partner where id_partner = ?`,id,
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
    updateVoucher:id => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `UPDATE voucher SET status ="used" WHERE id_voucher = ?`,id,
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
    editPartner:(dataPartner,id) => {
        return new Promise ((resolve, reject) => {
            conn.query(
                `UPDATE partner SET ? WHERE id_partner = ?`,[dataPartner,id],
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