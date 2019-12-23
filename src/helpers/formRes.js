module.exports = {
    getAll:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json (form);
    },
    getByID:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json (form);
    },
    getUser:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json (form);
    },
    getUserByID:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json (form);
    },
    getUserHistory:(res, response, status) => {
        const form = {
            status,
            response,
        };
        res.json (form);
    },
    orderVoucher:(res, response, status) => {
        const form = {
            status,
            message: "data recorded",
        };
        res.json (form);
    },
}
