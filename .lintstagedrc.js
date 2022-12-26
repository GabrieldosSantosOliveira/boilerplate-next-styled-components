const path = require('path');

const buildEslintCommand = filenames => {
  return [
    `next lint --fix --max-warnings=0 `,
    `yarn test --findRelatedTests ${filenames.map(f =>
      path.relative(process.cwd(), f)
    )}  --passWithNoTests --bail`
  ];
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
};
