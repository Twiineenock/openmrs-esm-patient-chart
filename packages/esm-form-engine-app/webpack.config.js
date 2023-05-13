const path = require('path');
const config = (module.exports = require('openmrs/default-webpack-config'));
config.scriptRuleConfig.exclude = /(node_modules(?![\/\\]@(?:openmrs|ohri)))/;
// Temporary fix to resolve webpack issues with imports from the libraries below
config.overrides.resolve = {
  extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss'],
  alias: {
    '@ohri/openmrs-esm-ohri-commons-lib': path.resolve(__dirname, '../esm-commons-lib/src/index'),
    '@openmrs/openmrs-form-engine-lib': '@openmrs/openmrs-form-engine-lib/src/index',
  },
};
module.exports = config;
