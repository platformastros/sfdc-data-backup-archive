/*
 * @ApiAuthCheckr.js
 */
"use strict";


module.exports = function(req, res, next) {
	// protected routes
	let buff = Buffer.from(req.headers.authorization.substring(5, req.headers.authorization.length), 'base64');
	let text = buff.toString('ascii');
	let creds = text.split(':');
	console.log('creds::::');
	console.log(creds[0]);
	console.log(creds[1]);
	if(creds[0] == process.env.sfc_uname && creds[1] == process.env.sfc_pword) {
		console.log('ACCESS GRANTED ');
		next();
	} else {
		console.log('INVALID CREDS :: ACCESS DENIED ');
		res.status(404).end();
	}
};
