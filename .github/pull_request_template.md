<!-- When fixing a bug: -->

This PR fixes bug #.

- [ ] I've added a unit test to test for potential regressions of this bug.
- [ ] The changelog has been updated, if applicable.
- [ ] Commits in this PR are minimal and [have descriptive commit messages](https://chris.beams.io/posts/git-commit/).

<!-- When adding a new feature: -->

# New feature description

# Checklist

- [ ] All acceptance criteria are met.
- [ ] Relevant documentation, if any, has been written/updated.
- [ ] The changelog has been updated, if applicable.
- [ ] New functions/types have been exported in `index.ts`, if applicable.
- [ ] Commits in this PR are minimal and [have descriptive commit messages](https://chris.beams.io/posts/git-commit/).

<!-- When cutting a release: -->

This PR bumps the version to <version number>.

# Checklist

- [ ] I used `npm version <major|minor|patch>` to update `package.json`, inspecting the changelog to determine if the release was major, minor or patch.
- [ ] The CHANGELOG has been updated to show version and release date - https://keepachangelog.com/en/1.0.0/.
- [ ] The **only** commits in this PR are:
  - the CHANGELOG update.
  - the version update.
- [ ] I will make sure **not** to squash these commits, but **rebase** instead.
- [ ] Once this PR is merged, I will push the tag created by `npm version ...` (e.g. `git push origin vX.X.X`).