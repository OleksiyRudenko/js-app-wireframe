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
   - [Transpiling and Linting](#transpiling-and-linting)
 * [Project initialization](#project-initialization)

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

[🔝 back to contents](#contents)

### Inevitable Tools

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

### Transpiling and Linting

#### ES6 code transpilation

Currently JS runtimes require code in ES5. Feel free coding in ES6
and/or use 3rd party source code, which might also be ES6 specific
by employing [Babel](https://babeljs.io/).

Run `yarn add --dev babel-cli`

[🔝 back to contents](#contents)

## Project Initialization

Let's consider you start the project from the scratch. Should you want
to work with some existing project consider changing tools-related files
instead of creating and initiazlizing those.

Create a project folder and `cd` into it.

### git

In console/terminal run `git init` OR use IDE functionality to put
the project under VCS.

Add `.gitignore` file to your project or edit existing.
Your project doesn't need any temporary or IDE-specific
auxiliary files and folders pushed to repo. Check well commented
`.gitignore` from this project.

Check also
[a collection of `.gitignore` templates](https://github.com/github/gitignore).

### yarn

In console/terminal run `yarn init` and answer questions. `package.json` will be created.

> 💡 Entry point is a script, which initializes your app and glues
everything together.

Add `package.json` to VCS.

Add packages with:
 * those you need your app to function with - `yarn add [package]`
 * those required to build the app or during dev - `yarn add --dev [package]`

> 💡 Use `yarn remove [package]` to get rid of unrequired package.

[🔝 back to contents](#contents)



[🔝 back to contents](#contents)