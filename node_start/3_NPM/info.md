NPM - node package manager
https://www.npmjs.com/

main commands:
    npm init
    inpm install
            --save
            --save-dev
            -g (npm install -g jshint)
    npm adduser
    npm publish

package.json
    name: name of package
    version: version of package
    description: description of package
    main: entry point(index.js as default)
    bin: object with global registration names (PATH) and node module
    scripts: dictionary containing script commands that are run at various times in the lifecycle of your package
    files: array of files to include in your project
    keywords: array of strings, using for search
    author: package author
    license: License of package
    repository: Specify the place where your code lives
    bugs: The url to your project's issue tracker.
    homepage: The url to the project homepage.