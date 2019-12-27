module.exports = {
    getAll:(res, response, status) => {
        const form = {
            status,
            response,
            message:"get all partner"
        };
        res.json (form);
    },
    getByID:(res, response, status) => {
        const form = {
            status,
            response,
            message:"get by id partner"
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
    getHistory:(res, response, status) => {
        const form = {
            status,
            message: "data history",
            response,
        };
        res.json (form);
    },
    getVoucher:(res, response, status) => {
        const form = {
            status,
            message: "detail voucher",
            response,
        };
        res.json (form);
    },
    updateStock:(res, response, status) => {
        const form = {
            status,
            message: "update stock voucher",
            response,
        };
        res.json (form);
    },
    updateProfile:(res, response, status) => {
        const form = {
            status,
            message: "update profile user",
            response,
        };
        res.json (form);
    },
    searchPartner:(res, response, status) => {
        const form = {
            status,
            message: "search partner store",
            response,
        };
        res.json (form);
    },
    postPartner:(res, response, status) => {
        const form = {
            status,
            message: "post partner store",
            response,
            // data:
            //  {
            //     name: req.body.name,
            //     description: req.body.description,
            //     image: req.body.image,
            //     stock: req.body.stock,
            //     category:req.body.category,
            //     location:req.body.location,
            //     latitude:req.body.latitude,
            //     longitude:req.body.longitude
            //   }
        }
        res.json (form);
    },
    getVeggies:(res, response, status) => {
        const form = {
            status,
            response,
            message:"get veggies partner"
        };
        res.json (form);
    },
    getCategory:(res, response, status) => {
        const form = {
            status,
            response,
            message:"get category partner"
        };
        res.json (form);
    },
    deleteByID:(res, response, status) => {
        const form = {
            status,
            response,
            message:"Partner deleted!"
        };
        res.json (form);
    },
}
