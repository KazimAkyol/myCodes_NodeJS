"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
//* Permissions Control Middleware:

module.exports = {


    isLogin: (req,res,next) => {

        if(req.user) {

            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    }
}