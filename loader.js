const getOptions = require('loader-utils').getOptions;

module.exports = function loader(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return `export default ${ JSON.stringify(source) }`;
}