# JS App Wireframe

_Started [2017-08-14]_

JS App development environment wireframe.

Based on
[JS Stack From Scratch tutorial](https://github.com/verekia/js-stack-from-scratch)
by [verekia@github](https://github.com/verekia).

If any particular version recommended there are certain grounds
as of this project starting date.

## Contents

 * [Workflow](#workflow)
 * [Dev Environment Tools](#dev-environment-tools)
   - [Inevitable Tools](#inevitable-tools)
   - [Project initialization](#project-initialization)
   - [Transpiling and Linting](#transpiling-and-linting)

## Workflow

`Code` => `Lint` => `Import packages`
=> `Transpile` => `Test` => `Build` => `Publish`

Coding is that what you want to do. Other stages should and
can be automated as much as only possible. There are essential
inevitable tools like `git` and `node`, while publishing methods
may significantly vary depending on the product delivery platform.

The tools are explained and commented in sections below.

This particular project is documented while following
instructions from
[JS Stack From Scratch tutorial](https://github.com/verekia/js-stack-from-scratch).
Tools and practices that are specific to React+Redux toolchain
are marked as "optional". Should you use different framework,
please, consider studying relevant toolchain.

My recommendation to the beginners:

make a project following
[JS Stack From Scratch tutorial](https://github.com/verekia/js-stack-from-scratch)
and use this document as a quick reference.

[🔝 back to contents](#contents)

## Dev Environment Tools

| Tool | Purpose                | Comment                  |
|------|------------------------|--------------------------|
| git  | Version control system | a must   |
| node | JS runtime             | a must |
| npm  | Node package manager   | installed along with NodeJS |
| yarn | Node package manager   | a must; better than npm |
| Babel | ES6=>ES5 transpiler   | produce ES6-compatible code |
| ESLint | Code style checker   | code style consistency |
| Flow | `*`Strict typing       | strict typing helps avoiding silly mistakes |
| Jest | `*`Automated tests     | promotes [TDD](https://en.wikipedia.org/wiki/Test-driven_development) |
| Husky | `*`Tests in VCS workflow | prevents publishing bad code |

`*` denotes optional tools. Please, refer to relevant sections
for details.

`**` denotes framework-specific tools and libraries.

[🔝 back to contents](#contents)

### Inevitable Tools

VCS (`git`), JS runtime (`NodeJS`), and 
package management tool (`yarn`) are globally
installed essential tools to develop applications
in JS Stack.

#### git

Learn [git](https://git-scm.com/). It is simple yet powerful
tool.

> 💡 Under Windows make sure to choose setup options
`Use Git from from the Windows Command Prompt` and
`Checkout Windows-style, commit Uniex-style line endings`
for the sake of compatibility.

In this document `git` will also be referred to as the **VCS**
(version control system).

TODO: SSH vs HTTPS.

[🔝 back to contents](#contents)

#### node & npm

[Node](https://nodejs.org/) is a JS runtime most of the tools
employ. Install
[node & npm](https://nodejs.org/en/download/package-manager/).

Stick to any LTS version <7.0, as the latter may cause some
cross-tool and cross-platform compatibility issues.

[npm](https://www.npmjs.com/) is a package manager that
supports code sharing, reuse, and update. Gets installed along
with NodeJS, but you will want to use [yarn](#yarn) instead.

[🔝 back to contents](#contents)

#### yarn

[Yarn](https://yarnpkg.com/) is a package manager.

Install for: [Windows](https://yarnpkg.com/en/docs/install#windows-tab) |
[MacOS|Unix](https://yarnpkg.com/en/docs/install#alternatives-tab)
(recommended approach to
[avoid relying on other package managers](https://github.com/yarnpkg/yarn/issues/1505)).

> 💡 You may need restarting Windows in order to changes to system environment take effect.

[🔝 back to contents](#contents)

### Project Initialization

Let's consider you start the project from the scratch. Should you want
to work with some existing project consider changing tools-related files
instead of creating and initializing those.

Create a project folder and `cd` into it.

> 💡 In the end, when you fetch your repo to different
machine `yarn install` will do all project development
environment bootstrapping job automatically.

#### git

In console/terminal run `git init` OR use IDE functionality to put
the project under VCS.

Add `.gitignore` file to your project or edit existing.
Your project doesn't need any temporary or IDE-specific
auxiliary files and folders pushed to repo. Check well commented
`.gitignore` from this project.

Check also
[a collection of `.gitignore` templates](https://github.com/github/gitignore).

#### yarn

In console/terminal run `yarn init` and answer questions. `package.json` will be created.

> 💡 Entry point is a script, which initializes your app and glues
everything together.

Add `package.json` to VCS.

Add packages with:
 * those you need your app to function with - `yarn add [package]`
 * those required to build the app or during dev - `yarn add --dev [package]`

> 💡 Use `yarn remove [package]` to get rid of unrequired package.

[🔝 back to contents](#contents)

### Transpiling and Linting

Install some extra tools for your project
 * to benefit from improved ES6 syntax
 * to benefit from consistent code style
 * to benefit from _strict typing_ (optional)

#### ES6 code transpilation

Currently JS runtimes require code in ES5. Feel free coding in ES6
and/or use 3rd party source code, which might also be ES6 specific
by employing [Babel](https://babeljs.io/).

Run `yarn add --dev babel-cli` to install Babel CLI.

Run `yarn add --dev babel-preset-env` to install Babel preset package
with configurations for the most recent ECMAScript features support.

Add `.babelrc` for Babel configuration. Refer to the one in this project
for details.

[🔝 back to contents](#contents)

#### Linting tool

[ESLint](http://eslint.org/) produces recommendations about ES6 code
formatting, which enforces style consistency in your code.

Install recommended config package following
[instructions from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
using `yarn` instead of `npm`.

> 💡 You may need
[install-peerdeps](https://github.com/nathanhleung/install-peerdeps) under Windows.

As of _project-start-date_ under Windows you run:
`yarn global add install-peerdeps`
`install-peerdeps --dev eslint-config-airbnb`

Add `.eslintrc.json` for ESLint configuration. Refer to the one in
this project for details.

Run `yarn add --dev eslint`

Update `package.json` with a new task:
```javascript
"scripts": {
  "start": "babel-node src",
  "test": "eslint src"
},
```

Run `yarn test` to see if Linting passes OK. Fix any styling errors.

##### JS API compatibility checks

Run `yarn add --dev eslint-plugin-compat` to install browser compatibility
checking tool.

Add `"browserlist": ["> 1%"],` to `package.json` to check against browsers
that have more than 1% market share.

Add `"plugins": ["compat"],` to `.eslint.json`.

##### Linting with IDE

Do not use IDE native ES6 linting. To enjoy your custom linting config
try set up IDE so it uses the binary from your `node_modules` instead.

[🔝 back to contents](#contents)

#### Type checking [optional]

JS employs _loose typing_ and _dynamic typing_.
Use [Flow](https://flowtype.org/) to check types and code
following strict typing.

This will require type annotations in code, which makes code non-standard,
and you need to teach other tools not to raise errors when parsing the
code.

Run `yarn add --dev flow-bin babel-preset-flow babel-eslint eslint-plugin-flowtype`
to make Babel and linting Flow compatible.

Add `"flow"` to `"presets"` array in `.babelrc`.

Update `.eslintrc.json`:
```javascript
{
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype",
    "compat"
  ],
  "rules": {
    "semi": [2, "never"],
    "no-unexpected-multiline": 2,
    "compat/compat": 2
  }
}
```

Chain flow to your test task in `package.json`: `"test": "eslint src && flow"`.

Add `.flowconfig` file (refer to the one in this project).

Add Flow annotations to source files - mark the file to be type-checked and
add functions parameters typing.

##### Type checking with IDE

Consider configuring IDE so you have immediate feedback
when Flow detects issues in the code.

##### Errors you won't fix

It may happen that Flow detects errors that may not want to fix. E.g.
those coming from 3rd party code from `node_modules`.

Remove Flow-related settings from `.babelrc`, `.eslintrc.json` and `package.json`.
In this project Flow is disabled. Check `*-flow` files for Flow settings.

[🔝 back to contents](#contents)

### Testing

Automate code testing tasks and get prevented from
publishing bad code that doesn't pass tests.

#### Automated tests

Run `yarn add --dev jest babel-jest` to install
[Jest](https://facebook.github.io/jest/).

Add `"env": { "jest": true }` at the object root in `.eslintrc.json`.

Chain `jest --coverage` to `"test"` script in `package.json`.

Add `/coverage/` to `.gitignore`. This folder will contain data
on codebase covered with tests.

Create `*.test.js` for each `.js` you want to get tested.

Run `yarn test` to see the results.
Open `/coverage/lcov-report/index.html` with your browser
to see the report.

#### Publish healthy code only


[🔝 back to contents](#contents)