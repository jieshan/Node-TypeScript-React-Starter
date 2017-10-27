var shell = require('shelljs');

shell.mkdir("-p", "dist/frontend/public/styles");

shell.cp("node_modules/bootstrap/dist/css/bootstrap.min.css", "dist/frontend/public/styles/bootstrap.min.css");