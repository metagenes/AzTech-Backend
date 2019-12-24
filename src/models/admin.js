const conn = require('../configs/db')

module.exports = {
// getHistory:() => {
//     return new Promise ((resolve, reject) => {
//         conn.query(
//             `SELECT U.fullname, P.name, V.status FROM user U JOIN transaction T ON U.id_user = T.id_user JOIN voucher V on V.id_user=T.id_user JOIN partner P ON P.id_partner = V.id_partner`,
//             (err, response) => {
//                 if (!err) {
//                     resolve (response);
//                 } else {
//                     reject (err);
//                 }
//             }
//         );
//     });
// },
getHistory: () => {
    return new Promise ((resolve, reject) => {
        conn.query(
            `SELECT U.fullname, P.name, V.status FROM user U JOIN transaction T ON U.id_user = T.id_user JOIN voucher V on V.id_user=T.id_user JOIN partner P ON P.id_partner = V.id_partner`,
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

// SELECT U.fullname, P.name, V.status FROM user U JOIN transaction T ON U.id_user = T.id_user JOIN voucher V on V.id_user=T.id_user JOIN partner P ON P.id_partner = V.id_partner