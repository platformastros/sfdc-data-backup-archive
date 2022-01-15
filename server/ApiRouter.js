/*
 * @ApiRouter.js
 */
"use strict";


let express = require('express'),
    ApiMethods = require('./ApiMethods.js'),
    ApiRouter = express.Router(),
    ApiMethodsRouter = new ApiMethods();
/*
 *  api routes
 */
ApiRouter.post("/api/archive/case/", ApiMethodsRouter.ArchiveCase);

ApiRouter.post("/api/backup/case/", ApiMethodsRouter.BackupCase);

ApiRouter.post("/api/restore/case/", ApiMethodsRouter.RestoreCase);
/*
 * export
 */
module.exports = ApiRouter;
