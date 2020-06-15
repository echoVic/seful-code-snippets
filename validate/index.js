const pinValidator = function (str) {
  if (!/^\d{6}$/.test(s)) return false; // not 6 digits
  // cannot be 6 identical digits
  if (/^(\d)\1{5}$/.test(str)) return false;
  let formatStr = str.replace(/\d/g, ($0, pos) => parseInt($0, 10) - pos);
  if (/^(\d)\1+$/.test(formatStr)) return false; // 6 continuously increment digits
  formatStr = str.replace(/\d/g, ($0, pos) => parseInt($0) + pos);
  if (/^(\d)\1+$/.test(formatStr)) return false; // 6  continuously decreasing digits
  return true;
};

export { pinValidator };