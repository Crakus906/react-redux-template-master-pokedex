export default (base, ...names) => {
  const variables = {};
  names.forEach((item) => {
    variables[item.toUpperCase()] = `${base}_${item.toUpperCase()}`;
  });
  return variables;
};
