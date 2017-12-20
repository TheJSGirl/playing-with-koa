module.exports = function secureUserData(obj) {
  // const newObj = JSON.parse(JSON.stringify(obj));
  const newObj = obj.toJSON();
  delete newObj.password;
  delete newObj._v;
  return newObj;
};
