/*
 * @Server.js
 */
"use strict";


let express = require('express'),
	bodyParser = require('body-parser'),
  	path = require('path'),
  	ApiAuthCheckr = require('./ApiAuthCheckr.js'),
	apiRouter = require('./ApiRouter.js');



//  create server app
let app = express();
let port = process.env.PORT || 3000;

app.use("/api/*", ApiAuthCheckr);


app.use(bodyParser.json());

app.use(apiRouter);


const publicPath = path.join(__dirname, '/../client-build/');
app.use(express.static(publicPath));
app.use('*', express.static(publicPath));


//  run
app.listen(port, () => console.log( "Express server listening on port " + port) );
