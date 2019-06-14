## Welcome to the `ABSCLI`

`Auther` - `Arpit Yadav`

```bash
> npm i -g abscli

```

The abscli is intended to provide a simple module creator for flex-server-mongodb.

- **N**ode.js : JavaScript runtime environment – lets you implement your application back-end in JavaScript

### Pre-requisites

- git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .
- node.js - [Download page](https://nodejs.org/en/download/) .
- npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .
- mongodb - [Download page](https://www.mongodb.com/download-center/community) .

### Cloniong and run

```bash

git clone https://github.com/arpit-absyadav/abscli.git
cd abscli
npm install
sudo npm link (for registering)

```

### Use commands

```bash
> cd  ` to folder where you want to create the module`

> abscli  # Will get all possible command combinations.
```

#

# `Commands`

### `1 - Create Server`

```
> abscli --server servername
# cd to module folder
> abscli --module modulename
```

### `2 - Create Server with multiple database`

```
> abscli --server servername --multi-db-conn
# cd to module folder
> abscli --module modulename --multi-db-conn
```
