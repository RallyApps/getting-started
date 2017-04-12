# Environment Setup

This short guide covers all the steps necessary to have a fully functioning app development environment.

## Install NVM

[Node Version Manager](https://github.com/creationix/nvm) is a nice little utility for installing and managing multiple versions of Node.js.
It also avoids some of the common issues encountered when installing packages globally (as we will do with Rally App Builder shortly).

To install, copy/paste this into your terminal:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash`

Then quit and restart your terminal for changes to take effect.

## Install Node.js

[Node.js](https://nodejs.org/en/) is a Javascript runtime outside of the normal web browser environment.
It is a pre-req for Rally App Builder.  We'll use the NVM we just installed to install the most recent supported version:

`nvm install 6`

## Install Rally App Builder

[Rally App Builder](https://github.com/RallyApps/rally-app-builder) is a utility for building and testing apps.
To install:

`npm install rally-app-builder -g`

## Hello World

If you haven't yet cloned the Getting Started repository let's do that now:

`git clone https://github.com/RallyApps/getting-started ~/projects/getting-started`

Then let's change directory to this exercise:

`cd ~/projects/getting-started/env-setup`

And let's build and run the Hello World app:

`rab build && rab run`

Note: you will need an active session in Agile Central in order for the app to correctly load.