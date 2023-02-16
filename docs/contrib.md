---
layout: default
title: Contributing Guidelines
---

[Home](/) > [Docs](/documentation) > {{ page.title }}

# Contributing to [hdg] on GitHub

Thank you for taking time to contribute to [hdg](https://github.com/hasidicdevs).

We want you to have a great experience making your first contribution.

This contribution could be anything from a small fix to a typo in our
documentation or a full feature.
[Tell us](https://github.com/orgs/hasidicdevs/discussions) what you
enjoy working on and we would love to help!

If you would like to contribute, but don't know where to start, checkout the
issues that are labeled **good first issue** or **help wanted**.
You can contribute to our documentation and code in Rust, Elixir, Github
Actions, Docker, Gradle etc.

If you have any other questions about contributing, please ask them on this
[discussion thread](https://github.com/orgs/hasidicdevs/discussions)

## Code of Conduct

We strive to keep the Ockam community an open and welcoming environment.
Please read and follow our [Community Code of Conduct](/docs/conduct).

## Get help

If you have any questions or need help integrating hdg-{apps} into your application
please ask on [Github Discussions](https://github.com/orgs/hasidicdevs/discussions)
or send us an email at [github@hasidic.dev](mailto:github@hasidic.dev).

## Report a bug

If you find a bug in the source code, you can help us by
[submitting an issue](https://github.com/hasidicdevs/hdg-web/issues/new/choose)
or, even better, a [pull request](#send_a_pull_request) with a fix.

Before you submit a new issue please
[search the archive](https://github.com/hasidicdevs/hdg-web/issues?q=is%3Aissue+)
to see if your issue has already been reported. Avoiding duplicate issues helps
us focus our time on fixing issues and adding new features.

## Request a new feature

If you think of a new feature that would make hdg better for everyone, please
[start a discussion](https://github.com/hasidicdevs/Discussions) to
propose the idea.

## Pull Requests

### Commits

* All commits in a Pull Request must be [signed](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) and Verified by Github.
* All commits in a Pull Request must follow the hdg commit message convention below.
* All authors of all commits in a Pull Request must abide by the hdg Community [Code of Conduct](/docs/conduct).
<!--* All authors of all commits in a Pull Request must accept the Ockam [Contributor License Agreement](https://github.com/build-trust/ockam-contributors/blob/main/CLA.md) by adding my Git/Github details in a row at the end of the [CONTRIBUTORS.csv](https://github.com/build-trust/ockam-contributors/blob/main/CONTRIBUTORS.csv) file in a separate pull request to the [build-trust/ockam-contributors](https://github.com/build-trust/ockam-contributors) repository.-->
* We follow a linear commit history in our git repositories, a pull request cannot contain merge commits. To apply upstream changes to a branch, please rebase it to the base branch.

### Branch names

We follow the `username/change` format for branch names, for example `metaclips/upgrade_elixir_version` or `hairyhum/abac-errors`.
There is no strict requirement to the `change` section as long as it doesn't contain `/` and uses ASCII.

### Commit Messages

Each commit message consists of a header, a body and a footer. The header includes a type, a scope and a subject:

```
   <type>(<scope>): <subject>
   <BLANK LINE>
   <body>
   <BLANK LINE>
   <footer>
```

> `<type>(<scope>): <subject>` must not be longer that 100 characters.
 type is required, must be in lower case and have one of the below values.
  - build: changes that affect our build system or external dependencies
  - ci: changes to our continuous integration configuration files
  - feat: a new feature
    - Please add a implementation scope to a feature commit `feat(rust):`
    - If a commit affects multiple implementations, please break it into two commits.
  - fix: a fix to a bug in an existing feature
    - Please add an implementation scope to a bug fix commit `fix(rust):`
    - If a commit affects multiple implementations, please break it into two commits.
  - refactor: code change that neither fixes a bug nor adds a feature
    - Please add an implementation scope to a refactor commit `refactor(rust):`
    - If a commit affects multiple implementations, please break it into two commits.
  - style: changes that do not affect the meaning of the code (white-space, formatting etc.)
  - test: add missing tests or correct existing tests
  - docs: a documentation only change
  - chore: some minor change that doesn't fall in any of the other types

## Helpful References

* [How to contribute to open source](https://opensource.guide/how-to-contribute/)