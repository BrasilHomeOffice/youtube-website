const AppEnvs = {
  Dev: 'development',
  // Production: 'production'
};

// STRICT ENVIRONMENTS
// Ensure the current environment is listed
// on AppEnvs variable
const foundCurrentEnv = Object
  .keys(AppEnvs)
  .map(key => process.env.NODE_ENV === AppEnvs[key])
  .reduce((prevValue, value) => value || prevValue);
if (!foundCurrentEnv) {
  throw new Error(`env.utils.js - Current env not recognized "${process.env.NODE_ENV}"`);
}

export function getCurrentEnv() {
  return process.env.NODE_ENV;
}

export function isDev() {
  return getCurrentEnv() === AppEnvs.Dev;
}

export function isProd() {
  // return getCurrentEnv() === AppEnvs.Production;
}
