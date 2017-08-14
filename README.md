# JS App Wireframe

_Started [2017-08-14]_

JS App development environment wireframe.

Based on
[JS Stack From Scratch tutorial](https://github.com/verekia/js-stack-from-scratch)
by [verekia@github](https://github.com/verekia).

If any particular version recommended there are certain grounds
as of this project starting date.

## Contents


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

[🔝 back to contents](#contents)


## Project initialization

### git

Add `.gitignore` file to your project.
Your project doesn't need any temporary or IDE-specific
auxiliary files and folders pushed to repo. Check well commented
`.gitignore` from this project.

Check also
[a collection of `.gitignore` templates](https://github.com/github/gitignore).

### yarn



[🔝 back to contents](#contents)



[🔝 back to contents](#contents)