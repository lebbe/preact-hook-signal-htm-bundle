# Readme for maintaining this repo

The Readme.md in this repo is meant for the people _using_ the npm-package
artefact which are maintained in this repo. This document is instead meant
for the developers _maintaining_ this repo.

## Checklist when updating

Most of the updating in this repo is only updating version numbers (two
years since I last updated). Whenever you do, you should:

1. Update deps: `npx ncu -u`
1. Install updated `npm install`
1. Add additional functionality (if any) into [./index.js](./index.js) (and update [the readme](./Readme.md))
1. Build bundle: `npm run build`
1. Copy `dist/preact-bundle.js` into `docs\clowns_player\preact-bundle.js`
1. Test docs locally (for instance live-server in vs-code)
1. Update version number in `cdn.jsdelivr.net`
1. Commit changes: `git commit -am"Update all dependencies."`
1. Bump version: `npm version [patch|minor|major]`
1. Dry run: `npm pack --dry-run`
1. Publish: `npm publish --access public`
1. Update repo: `git push and git push --tags`

Versioning should follow the most significant bumping in the preact, signals
or htm version. For instance, if one of those three is a major version bump,
this project should be a major version bump as well!
