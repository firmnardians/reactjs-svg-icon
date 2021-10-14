"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SIZE = '18px';
const COLOR = '#000000';
const WEIGHT = '2';
const STYLE = 'round';
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set color size
 * @params {weight} set color weight
 * @params {style} set color style
 */

const IconArrowUp = _ref => {
  let {
    color,
    size,
    weight,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: style ? style : STYLE,
    strokeLinejoin: style ? style : STYLE
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 19V6M5 12l7-7 7 7"
  }));
};

module.exports = {
  IconArrowUp
};