#[NPM - node package manager](https://www.npmjs.com/)

## main commands:
    npm init
    npm install
            --save
            --save-dev
            -g 
    npm adduser
    npm publish
    npm version

## package.json structure

```JSON
{
    "name": "name of package",
    "version": "version of package (major.minor.patch)",
    "description": "package description", 
    "main": "entry point (index.js as default)",
    "bin": "object with global registration names (PATH) and node module",
    "scripts": "dictionary containing script commands that are run at various times in the lifecycle of your package",
    "files": "array of files to include in your project",
    "keywords": "array of strings, using for search",
    "author": "package author",
    "license": "package license",
    "repository": "specify the place where your code lives",
    "bugs": "the url to your project's issue tracker.",
    "homepage": "the url to the project homepage.",
}
```