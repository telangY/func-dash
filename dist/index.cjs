'use strict';

const capitalize = (str) => {
  if (!str || str.length === 0)
    return "";
  const lower = str.toUpperCase();
  return lower.substring(0, 1).toUpperCase() + lower.substring(1).toLowerCase();
};

const log = (...args) => {
  console.log(...args);
};

exports.capitalize = capitalize;
exports.log = log;
