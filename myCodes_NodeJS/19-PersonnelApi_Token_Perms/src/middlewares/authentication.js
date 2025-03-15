"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
//* Authentication Control Middleware

module.exports = async (req,res,next)=> {



    console.log('authentication middleware')
    next()
}