# Node-TypeScript-React-Starter
A starter template for Node, TypeScript and React working together, featuring webpack as module bundler and bootstrap as css framework.

Inspired by [Microsoft/TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter) and [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter).

# Quick start
- After cloning the repo, go to project directory and install dependencies:
```
cd <project_dir>
npm install
```

- Build project and start node
```
# Build the devlopment version
npm run build-nuke

# Or, build the prod version
npm run build-prod-nuke

npm run start
```

- Go to ```http://localhost:3000``` to see a simple page rendered.

# Folder walkthrough
#### ```dist/``` 
The actual code of built project.
  * ```dist/backend``` - The built server side code
    * ```dist/backend/server.js``` - The entry point to the web app
  * ```dist/frontend``` - The built front-end code
    * ```dist/frontend/public``` - The bundled ```js``` files and other static resources. Web requests will only resolve if they point to this folder. 
    * ```dist/frontend/styles``` - Folder for holding css files. The external minified bootstrap css is copied here by ```copyStaticAssets.js```. Similarly a ```dist/frontend/images``` could be created to hold image resources.
    
#### ```src/``` 
The src code in ```.ts``` and ```.tsx```
  * ```src/backend``` - Node related TypeScript code
  * ```src/frontend``` - Frontend code. Files in this folder will be compiled and bundled through webpack. If you run ```tsc``` directly here, the files will be compiled into unminified separate ```js``` under ```dist/frontend/```, which means they won't be exposed to public.
  
#### ```views/```
Templates in ```pug```.

#### ```copyStaticAssets.js``` 
File that copies the static resources into the ```dist/frontend/public``` for final product. Currently only copying over the bootstrap css file.

#### ```package.json``` 
The config files for commands and dependencies.
  * ```scripts``` section - Containing npm script commands for compiling, building, etc. Usage is: ```npm run {script}```. The mainly used ones are listed below:
    * ```start``` - Starts node and the app through ```dist/backend/server.js```
    * ```build-nuke``` - Removes any previously built files and starts a build in dev settings (unminified code and sourceMaps for debugging).
    * ```build-prod-nuke``` - Removes any previously built files and starts a build in prod settings (minified/uglified and bundled code).
  * ```dependencies``` section - npm dependencies needed by the app
    * ```popper.js``` and ```tootip.js``` are added because they are needed by ```js``` part of bootstrap. However, the simple app in this project is not utilizing that currently.
  * ```devDependencies``` section - npm dependencies needed at compile & build time
    * ```@types/*``` - TypeScript definition files needed by libraries
    * ```babel-minify-webpack-plugin``` - Used to uglify code. This is used instead of ```uglifyjs``` because of its ES6 support.
    * ```cross-env``` - Used to setup different environment configs
    * ```ts-loader``` - TypeScript loader for webpack
    * ```tslint``` - Linter for TypeScript files (rules configurable in ```tslint.json```)

#### ```tsconfig.json```
Config for compiling server-side code written in TypeScript (frontend code will be compiled through webpack).

#### ```tslint.json```
Config for ```tslint``` code best-practice checking. Custom rules can be added in ```rules``` section.

#### ```webpack.config.js```
Webpack configuration script and object.
  * Bundle jQuery and React code together as a ```CommonsChunkPlugin```
  * jQuery and popper.js bundle is only needed for bootstrap js, currently not used.
  * Based on environment settings, optionally throw in ```babel-minify-webpack-plugin``` to uglify code (ES6 supported)
    
