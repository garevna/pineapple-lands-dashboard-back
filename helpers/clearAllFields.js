module.exports = async (object) => {
  const properties = Object.keys(object)
    .map((key) => {
      Array.isArray(object[key]) ? []
        : typeof object[key] === 'string' ? { [key]: '' }
          : typeof object[key] === 'number' ? { [key]: NaN }
            : typeof object[key] === 'boolean' ? { [key]: false }
              : { [key]: null }
    })
  return Object.assign({}, ...properties)
}
