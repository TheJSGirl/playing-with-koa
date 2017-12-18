module.exports = function deleteObj(obj) {
  const newObj = JSON.parse(JSON.stringify(obj));
  delete newObj.password;
  delete newObj._v;
  return newObj;
};
