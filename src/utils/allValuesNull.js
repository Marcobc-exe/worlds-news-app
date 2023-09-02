function areAllValuesNull (obj) {
  for (const key in obj) {
    if (obj[key] === null) {
      continue;
    } else if (typeof obj[key] === 'object') {
      if (!areAllValuesNull(obj[key])) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

export { areAllValuesNull };