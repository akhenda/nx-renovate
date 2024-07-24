module.exports = {
  repositories: ['git@github.com:akhenda/nx-renovate'],
  branchPrefix: 'renovate-github/',
  dryRun: null,
  gitAuthor: 'Renovate Bot GitHub <bot@renovateapp.com>',
  platform: 'github',
  forkProcessing: 'disabled',
  dependencyDashboard: true,
  onboarding: true,
  autodiscover: false,
  allowCustomCrateRegistries: true,
  allowScripts: true,
  exposeAllEnv: true,
  allowedPostUpgradeCommands: [
    '^npm ci --ignore-scripts$',
    '^npm install --ignore-scripts$',
    '^npm run prepare --if-present$',
    '^npm run format --if-present$',
    '^npx --no-install ng update (@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]* --from=\\d+\\.\\d+\\.\\d+ --to=\\d+\\.\\d+\\.\\d+ --migrate-only --allow-dirty --force$',
    '^npx --no-install ng lint --fix$',
    '^npx --no-install nx migrate',
    '^rm -f migrations.json$',
    '^npx --no-install nx run-many --target=lint --all --parallel --fix --skip-nx-cache$',
  ],
};
