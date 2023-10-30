# Open-Set-Go_client

<p align="center">
<a href="https://www.open-set-go.com/" target="_blank"><img src="https://github.com/AgainIoT/Open-Set-Go/raw/main/.github/images/Open-Set-Go.png" width="200" alt="Open-Set-Go Logo" /></a>
</p>

<p align="center">
  This is <a href="https://www.open-set-go.com" target="_blank">Open-Set-Go</a>'s React Client Server Repository! More details at <a href="https://github.com/AgainIoT/Open-Set-Go">Open-Set-Go Repository</a>!
</p>

<p align="center">
  <a href="https://github/AgainIoT/Open-Set-Go"><img src="https://img.shields.io/node/v-lts/styled-reset?logo=node.js&label=node" alt="node Version" /></a>
  <a href="https://sonarcloud.io/summary/new_code?id=AgainIoT_Open-Set-Go_client" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=AgainIoT_Open-Set-Go_client&metric=alert_status" alt="Sonar Cloud Scan" /></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client/actions/workflows/github-code-scanning/codeql"><img src="https://github.com/AgainIoT/Open-Set-Go_client/actions/workflows/github-code-scanning/codeql/badge.svg"></a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FAgainIoT%2FOpen-Set-Go_client?ref=badge_shield" target="_blank"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FAgainIoT%2FOpen-Set-Go_client.svg?type=shield&issueType=license" alt="Fossa License Scan" /></a>
  <a href="https://www.open-set-go.com"><img src="https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fwww.open-set-go.com&logo=w3c&label=validation" alt="w3c validation check" /></a>
  <a href="https://www.open-set-go.com"><img src="https://img.shields.io/netlify/8a6fd2e8-3678-439f-9ba4-8aec0cb2f9ad?logo=netlify" alt="Netlify status" /></a>
  <a href="https://join.slack.com/t/open-set-go/shared_invite/zt-21jwlzs9g-qrajfUblcCtmCqAy0Xxj8w" target="_blank"><img src="https://img.shields.io/badge/slack-online-brightgreen.svg?logo=slack" alt="Slack"/></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client"><img src="https://img.shields.io/github/v/release/AgainIoT/Open-Set-Go_client?logo=github" alt="github release" /></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client"><img src="https://img.shields.io/github/release-date/AgainIoT/Open-Set-Go_client?color=blue&logo=github" alt="github last release date" /></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client"><img src="https://img.shields.io/github/last-commit/AgainIoT/Open-Set-Go_client?logo=github&color=blue" alt="github commits" /></a>
  <a href="/LICENSE"><img src="https://img.shields.io/github/license/AgainIoT/Open-Set-Go_client?logo=github&color=blue" alt="github License" /></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client/graphs/contributors" target="_blank"><img src="https://img.shields.io/github/contributors-anon/AgainIoT/Open-Set-Go_client?logo=github&color=blue" alt="github contributors" /></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client"><img src="https://img.shields.io/github/stars/AgainIoT/Open-Set-Go_client?logo=github" alt="github stars" /></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client/pulls?q=is%3Apr+is%3Aclosed"><img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/AgainIoT/Open-Set-Go_client?logo=github&color=blue"></a>
  <a href="https://github.com/AgainIoT/Open-Set-Go_client/issues?q=is%3Aissue+is%3Aclosed"><img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/AgainIoT/Open-Set-Go_client?logo=github&color=blue"></a>
</p>

## Description

**Open-Set-Go_client** repository is source code of Open-Set-Go's **React** Server!<br>
You can see more information of our topic on [**Open-Set-Go**](https://github.com/AgainIoT/Open-Set-Go) Repository.

This repository is not about the direction and theme of Open-Set-Go, but about where we're going to go and what improvements we're going to make to our react servers!

> If you want to discuss the topic, please use [Discussions from **Open-Set-Go**](https://github.com/AgainIoT/Open-Set-Go/discussions)!

## Installation & Development Environment

| Supported Environment | Version      | Description                                   |
| --------------------- | ------------ | --------------------------------------------- |
| Ubuntu OS             | Ubuntu 22.04 | Open-Set-Go_client was developed by Ubuntu OS |
| Node.js               | >= 18.x      | @ocotokit/rest >= node v18.x                  |
| yarn                  | 1.22.19      | Open-Set-Go client manage package with yarn   |

### Install with script

You can also easily install it through [install.sh](https://github.com/AgainIoT/Open-Set-Go#installation--development-environment)!

### Install Manually

1. Clone our Repository!

   ```bash
   git clone https://github.com/AgainIoT/Open-Set-Go_client.git
   ```

2. Install the Development Environment

3. Install Node Dependencies
   ```bash
   yarn install
   ```
4. Create `.env` file at root to use secret environment

   > See more details at [EnvironmentVariable.md](https://github.com/AgainIoT/Open-Set-Go/blob/main/EnvironmentVariable.md)

5. Start Open-Set-Go Server

   ```bash
     # for development
     yarn start
     yarn start:linux # start HTTPS for linux
     yarn start:wins # start HTTPS for windows

     # for production
     yarn build
     yarn global add serve
     serve -s build
   ```

## Documentation

We are conducting documentation at Open-Set-Go.io. Please refer to the following. _You can see our technical blog & showcase on Open-Set-Go.io_

- <a href="https://docs.open-set-go.com">Open-Set-Go.io</a>

## Contributing

We always welcome your contributions. Please see the <a href="./CONTRIBUTING.md">CONTRIBUTING.md</a> for how to contribute. <br>
Also, we are recruiting collaborators, so if you are interested, please join our [Slack](https://join.slack.com/t/open-set-go/shared_invite/zt-21jwlzs9g-qrajfUblcCtmCqAy0Xxj8w)!

## Contributors

Thank you to everyone who contributed to our project.

<a href="https://github.com/AgainIoT/Open-Set-Go_client/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AgainIoT/Open-Set-Go_client"/>
</a>

_<div align=right>Made with <a href="https://contrib.rocks">contrib.rocks</a></div>_

## License

**Open-Set-Go** is released under <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache-2.0 License</a>.<br>
See the <a href="./LICENSE">LICENSE file</a> for details. <br>

<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FAgainIoT%2FOpen-Set-Go_client?utm_source=share_link"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FAgainIoT%2FOpen-Set-Go_client.svg?type=large"></a>

<a href="https://sonarcloud.io/summary/new_code?id=AgainIoT_Open-Set-Go_client"><img src="https://sonarcloud.io/images/project_badges/sonarcloud-white.svg"></a>
