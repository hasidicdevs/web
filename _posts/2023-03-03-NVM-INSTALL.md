---
layout: post
title:  "How To Name Your Branches - The Method I Use"
author: smokeyoy
date: '2023-03-03'
category: ['nodejs', 'npm', 'javascript']
tags: npm, nodejs
thumbnail: /assets/img/posts/nvm.png
usemathjax: false
permalink: /blog/how-to-install-nvm/
---

Node.js is a popular open-source JavaScript runtime environment that allows developers to build fast and scalable web applications. Installing Node.js as a non-root user can be challenging, especially if you don't have administrative privileges on your server. However, using Node Version Manager (nvm), you can easily install and manage multiple versions of Node.js as a non-root user.

In this article, we will guide you through the process of installing Node.js using nvm as a non-root user.

## What is Node Version Manager (nvm)?

Node Version Manager (nvm) is a command-line tool that allows you to easily manage multiple versions of Node.js on your system. With nvm, you can install and switch between different versions of Node.js without affecting the system-wide installation.

## Why install Node.js as a non-root user?

By default, Node.js is installed as a system-wide package, which means that it requires administrative privileges to install or update. This can be problematic if you don't have root access to your server or if you're working on a shared server.

Installing Node.js as a non-root user allows you to install and manage multiple versions of Node.js without needing administrative privileges. It also ensures that your Node.js installation does not interfere with other users or applications on the system.

## Installing nvm

The first step in installing Node.js as a non-root user is to install nvm on your system. To install nvm, follow these steps:

Open a terminal window on your system.

### Download the nvm installation script using curl or wget:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

or

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

This will download the nvm installation script from the official nvm GitHub repository and execute it.

Close and reopen your terminal window or run the following command to apply the changes:

```bash
source ~/.bashrc
```

This command will load the nvm script into your current shell session.

Verify that nvm has been installed correctly by running the following command:

```bash
nvm --version
```

This command should return the current version of nvm installed on your system, which should be v0.39.3

## Installing Node.js

Now that nvm is installed on your system, you can use it to install any version of Node.js as a non-root user. To install a specific version of Node.js, follow these steps:

List the available Node.js versions by running the following command:

```
nvm ls-remote
```
This command will display a list of all available Node.js versions that you can install using nvm.

Choose the version of Node.js that you want to install and run the following command:

```bash
nvm install <version>
```

Replace <version> with the version of Node.js that you want to install (e.g., nvm install 14.17.0).

This command will download and install the specified version of Node.js on your system.

Verify that Node.js has been installed correctly by running the following command:

```bash
node --v
```

This command should return the version of Node.js that you just installed.

Switching between Node.js versions

With nvm, you can easily switch between different versions of Node.js on your system. To switch to a different version of Node.js, follow these steps:

List all installed versions of Node.js by running the following command:

```bash
nvm ls
```

This command will display a list of all installed versions of Node.js on your system.

Choose the version of Node.js that you want to use and run the following command:

```perl
nvm use <version>
```

Replace <version> with the version of Node.js that you want to use (e.g., nvm use 14.17.0).

This command will switch your current shell session to use the specified version of Node.js.

Verify that you are now using the correct version of Node.js by running the following command:

```bash
node --version
```

This command should return the version of Node.js that you just switched to.

## Conclusion

In conclusion, installing Node.js as a non-root user using nvm is a straightforward process that allows you to install and manage multiple versions of Node.js on your system without needing administrative privileges. With nvm, you can easily switch between different versions of Node.js, ensuring that your Node.js installation is always up-to-date and compatible with your application's requirements.

When working with Node.js applications, it's essential to keep your Node.js installation up-to-date and secure. With nvm, you can easily upgrade to the latest version of Node.js or switch back to an earlier version if necessary.

Remember to always verify the integrity of the Node.js installation and only install versions from trusted sources. With these precautions in place, you can enjoy the full benefits of Node.js and build fast, scalable, and secure web applications.
