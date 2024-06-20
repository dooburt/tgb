export const mergeClasses = (inlineArray, propArray) => {
  if (!propArray || propArray.length === 0) return inlineArray;
  if (!Array.isArray(propArray)) {
    console.warn("Passing a non-array to mergeClasses");
    return inlineArray;
  }
  return inlineArray.concat(propArray.filter((item) => inlineArray.indexOf(item) < 0));
};
