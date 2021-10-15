"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconRefreshCCW = exports.IconRadio = exports.IconPlusSquare = exports.IconPlusCircle = exports.IconPlus = exports.IconPlayCircle = exports.IconPlay = exports.IconPauseCircle = exports.IconPause = exports.IconOctagon = exports.IconMusic = exports.IconMove = exports.IconMoreVertical = exports.IconMoreHorizontal = exports.IconMoon = exports.IconMinusSquare = exports.IconMinusCircle = exports.IconMinus = exports.IconMinimize2 = exports.IconMinimize = exports.IconMic = exports.IconMessageSquare = exports.IconMessageCircle = exports.IconMenu = exports.IconMaximize2 = exports.IconMaximize = exports.IconMapMarket3 = exports.IconMapMarket2 = exports.IconMapMarket = exports.IconMail = exports.IconLock = exports.IconLoader = exports.IconInfo = exports.IconInbox = exports.IconImage = exports.IconHome2 = exports.IconHome = exports.IconHexagon = exports.IconHelpCircle = exports.IconHeart = exports.IconGrid = exports.IconFlag = exports.IconFilm = exports.IconFastForward = exports.IconEye = exports.IconExternalLink = exports.IconExpand = exports.IconEdit3 = exports.IconEdit2 = exports.IconEdit = exports.IconDownloadCloud = exports.IconDownload = exports.IconCreditCard = exports.IconCornerUpRight = exports.IconCornerUpLeft = exports.IconCornerRightUp = exports.IconCornerRightDown = exports.IconCornerLeftUp = exports.IconCornerLeftDown = exports.IconCornerDownRight = exports.IconCornerDownLeft = exports.IconCompass = exports.IconClock = exports.IconCircle = exports.IconChevronsUp = exports.IconChevronsRight = exports.IconChevronsLeft = exports.IconChevronsDown = exports.IconChevronUp = exports.IconChevronRight = exports.IconChevronLeft = exports.IconChevronDown = exports.IconCheckSquare = exports.IconCheckCircle = exports.IconCheck = exports.IconCamera = exports.IconCalendar = exports.IconBookmark = exports.IconBell = exports.IconArrowUpRight = exports.IconArrowUpLeft = exports.IconArrowUpCircle = exports.IconArrowUp = exports.IconArrowRightCircle = exports.IconArrowRight = exports.IconArrowOutSquare = exports.IconArrowOutCircle = exports.IconArrowOut = exports.IconArrowLeftCircle = exports.IconArrowLeft = exports.IconArrowInSquare = exports.IconArrowInCircle = exports.IconArrowIn = exports.IconArrowDownRight = exports.IconArrowDownLeft = exports.IconArrowDownCircle = exports.IconArrowDown = exports.IconAlertTriangle = exports.IconAlertOctagon = exports.IconAlertCircle = void 0;
exports.IconZoomOut = exports.IconZoomIn = exports.IconXSquare = exports.IconXCircle = exports.IconX = exports.IconVolumex = exports.IconVolume2 = exports.IconVolume1 = exports.IconVolume = exports.IconVideoOff = exports.IconVideo = exports.IconUploadCloud = exports.IconUpload = exports.IconUnlock = exports.IconTriangle = exports.IconTrendingUp = exports.IconTrendingDown = exports.IconTrash = exports.IconThumbsUp = exports.IconThumbsDown = exports.IconTag = exports.IconSun = exports.IconStopCircle = exports.IconStar = exports.IconSquare = exports.IconSliders = exports.IconSlash = exports.IconSkipForward = exports.IconSkipBack = exports.IconShuffle = exports.IconShoppingCart = exports.IconShoppingBack = exports.IconShare = exports.IconSetting = exports.IconSearch = exports.IconRotateRight = exports.IconRotateLeft = exports.IconRewind = exports.IconRepeat = exports.IconRefreshCW = exports.IconRefreshCCW = exports.IconRadio = exports.IconPlusSquare = exports.IconPlusCircle = exports.IconPlus = exports.IconPlayCircle = exports.IconPlay = exports.IconPauseCircle = exports.IconPause = exports.IconOctagon = exports.IconMusic = exports.IconMove = exports.IconMoreVertical = exports.IconMoreHorizontal = exports.IconMoon = exports.IconMinusSquare = exports.IconMinusCircle = exports.IconMinus = exports.IconMinimize2 = exports.IconMinimize = exports.IconMic = exports.IconMessageSquare = exports.IconMessageCircle = exports.IconMenu = exports.IconMaximize2 = exports.IconMaximize = exports.IconMapMarket3 = exports.IconMapMarket2 = exports.IconMapMarket = exports.IconMail = exports.IconLock = exports.IconLoader = exports.IconInfo = exports.IconInbox = exports.IconImage = exports.IconHome2 = exports.IconHome = exports.IconHexagon = exports.IconHelpCircle = exports.IconHeart = exports.IconGrid = exports.IconFlag = exports.IconFilm = exports.IconFastForward = exports.IconEye = exports.IconExternalLink = exports.IconExpand = exports.IconEdit3 = exports.IconEdit2 = exports.IconEdit = exports.IconDownloadCloud = exports.IconDownload = exports.IconCreditCard = exports.IconCornerUpRight = exports.IconCornerUpLeft = exports.IconCornerRightUp = exports.IconCornerRightDown = exports.IconCornerLeftUp = exports.IconCornerLeftDown = exports.IconCornerDownRight = exports.IconCornerDownLeft = exports.IconCompass = exports.IconClock = exports.IconCircle = exports.IconChevronsUp = exports.IconChevronsRight = exports.IconChevronsLeft = exports.IconChevronsDown = exports.IconChevronUp = exports.IconChevronRight = exports.IconChevronLeft = exports.IconChevronDown = exports.IconCheckSquare = exports.IconCheckCircle = exports.IconCheck = exports.IconCamera = exports.IconCalendar = exports.IconBookmark = exports.IconBell = exports.IconArrowUpRight = exports.IconArrowUpLeft = exports.IconArrowUpCircle = exports.IconArrowUp = exports.IconArrowRightCircle = exports.IconArrowRight = exports.IconArrowOutSquare = exports.IconArrowOutCircle = exports.IconArrowOut = exports.IconArrowLeftCircle = exports.IconArrowLeft = exports.IconArrowInSquare = exports.IconArrowInCircle = exports.IconArrowIn = exports.IconArrowDownRight = exports.IconArrowDownLeft = exports.IconArrowDownCircle = exports.IconArrowDown = exports.IconAlertTriangle = exports.IconAlertOctagon = exports.IconAlertCircle = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ReactJs SVG ICON
 * Author firmnardians
 * License MIT
 */
const SIZE = '18px';
const COLOR = '#000000';
const WEIGHT = '2';
const STYLE = 'round';
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
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
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowUp = IconArrowUp;

const IconArrowDown = _ref2 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref2;
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
    d: "M12 5v13M5 12l7 7 7-7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowDown = IconArrowDown;

const IconArrowLeft = _ref3 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref3;
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
    d: "M19 12H6M12 5l-7 7 7 7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowLeft = IconArrowLeft;

const IconArrowRight = _ref4 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref4;
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
    d: "M5 12h13M12 5l7 7-7 7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowRight = IconArrowRight;

const IconArrowUpLeft = _ref5 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref5;
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
    d: "M17 17L7.8 7.7M7 17V7h10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowUpLeft = IconArrowUpLeft;

const IconArrowUpRight = _ref6 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref6;
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
    d: "M7 17l9.2-9.2M17 17V7H7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowUpRight = IconArrowUpRight;

const IconArrowDownLeft = _ref7 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref7;
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
    d: "M17 7l-9.2 9.2M7 7v10h10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowDownLeft = IconArrowDownLeft;

const IconArrowDownRight = _ref8 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref8;
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
    d: "M7 7l9.2 9.2M17 7v10H7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowDownRight = IconArrowDownRight;

const IconCornerDownLeft = _ref9 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref9;
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
    d: "M10 9l-6 6 6 6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 4v7a4 4 0 0 1-4 4H5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerDownLeft = IconCornerDownLeft;

const IconCornerDownRight = _ref10 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref10;
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
    d: "M14 9l6 6-6 6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 4v7a4 4 0 0 0 4 4h11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerDownRight = IconCornerDownRight;

const IconCornerUpLeft = _ref11 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref11;
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
    d: "M10 16l-6-6 6-6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 21v-7a4 4 0 0 0-4-4H5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerUpLeft = IconCornerUpLeft;

const IconCornerUpRight = _ref12 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref12;
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
    d: "M14 16l6-6-6-6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 21v-7a4 4 0 0 1 4-4h11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerUpRight = IconCornerUpRight;

const IconCornerLeftDown = _ref13 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref13;
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
    d: "M15 14l-6 6-6-6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 4h-7a4 4 0 0 0-4 4v11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerLeftDown = IconCornerLeftDown;

const IconCornerLeftUp = _ref14 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref14;
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
    d: "M15 10L9 4l-6 6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 20h-7a4 4 0 0 1-4-4V5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerLeftUp = IconCornerLeftUp;

const IconCornerRightDown = _ref15 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref15;
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
    d: "M9 14l6 6 6-6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 4h7a4 4 0 0 1 4 4v11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerRightDown = IconCornerRightDown;

const IconCornerRightUp = _ref16 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref16;
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
    d: "M9 10l6-6 6 6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 20h7a4 4 0 0 0 4-4V5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCornerRightUp = IconCornerRightUp;

const IconChevronDown = _ref17 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref17;
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
    d: "M6 9l6 6 6-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronDown = IconChevronDown;

const IconChevronUp = _ref18 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref18;
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
    d: "M18 15l-6-6-6 6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronUp = IconChevronUp;

const IconChevronLeft = _ref19 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref19;
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
    d: "M15 18l-6-6 6-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronLeft = IconChevronLeft;

const IconChevronRight = _ref20 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref20;
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
    d: "M9 18l6-6-6-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronRight = IconChevronRight;

const IconChevronsDown = _ref21 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref21;
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
    d: "M7 13l5 5 5-5M7 6l5 5 5-5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronsDown = IconChevronsDown;

const IconChevronsLeft = _ref22 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref22;
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
    d: "M11 17l-5-5 5-5M18 17l-5-5 5-5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronsLeft = IconChevronsLeft;

const IconChevronsRight = _ref23 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref23;
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
    d: "M13 17l5-5-5-5M6 17l5-5-5-5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronsRight = IconChevronsRight;

const IconChevronsUp = _ref24 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref24;
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
    d: "M17 11l-5-5-5 5M17 18l-5-5-5 5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconChevronsUp = IconChevronsUp;

const IconArrowUpCircle = _ref25 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref25;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 12l-4-4-4 4M12 16V9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowUpCircle = IconArrowUpCircle;

const IconArrowDownCircle = _ref26 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref26;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 12l-4 4-4-4M12 8v7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowDownCircle = IconArrowDownCircle;

const IconArrowRightCircle = _ref27 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref27;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 8l4 4-4 4M8 12h7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowRightCircle = IconArrowRightCircle;

const IconArrowLeftCircle = _ref28 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref28;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 8l-4 4 4 4M16 12H9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowLeftCircle = IconArrowLeftCircle;

const IconRefreshCCW = _ref29 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref29;
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
  }, ' ', /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.5 2v6h6M21.5 22v-6h-6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconRefreshCCW = IconRefreshCCW;

const IconRefreshCW = _ref30 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref30;
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
    d: "M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconRefreshCW = IconRefreshCW;

const IconRotateLeft = _ref31 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref31;
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
    d: "M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconRotateLeft = IconRotateLeft;

const IconRotateRight = _ref32 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref32;
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
    d: "M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconRotateRight = IconRotateRight;

const IconRepeat = _ref33 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref33;
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
    d: "M17 2.1l4 4-4 4"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 11.8v2a4 4 0 0 1-4 4H4.2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconRepeat = IconRepeat;

const IconArrowIn = _ref34 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref34;
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
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowIn = IconArrowIn;

const IconArrowInSquare = _ref35 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref35;
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
    d: "M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowInSquare = IconArrowInSquare;

const IconArrowInCircle = _ref36 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref36;
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
    d: "M10 17l5-5-5-5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.8 12H3m9 10a10 10 0 1 0 0-20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowInCircle = IconArrowInCircle;

const IconArrowOut = _ref37 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref37;
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
    d: "M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowOut = IconArrowOut;

const IconArrowOutSquare = _ref38 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref38;
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
    d: "M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowOutSquare = IconArrowOutSquare;

const IconArrowOutCircle = _ref39 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref39;
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
    d: "M16 17l5-5-5-5M19.8 12H9M13 22a10 10 0 1 1 0-20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconArrowOutCircle = IconArrowOutCircle;

const IconUpload = _ref40 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref40;
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
    d: "M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconUpload = IconUpload;

const IconDownload = _ref41 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref41;
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
    d: "M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconDownload = IconDownload;

const IconUploadCloud = _ref42 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref42;
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
    d: "M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 16l-4-4-4 4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconUploadCloud = IconUploadCloud;

const IconDownloadCloud = _ref43 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref43;
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
    d: "M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8M12 19.8V12M16 17l-4 4-4-4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconDownloadCloud = IconDownloadCloud;

const IconMinimize = _ref44 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref44;
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
    d: "M4 14h6v6M3 21l6.1-6.1M20 10h-6V4M21 3l-6.1 6.1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMinimize = IconMinimize;

const IconMaximize = _ref45 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref45;
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
    d: "M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMaximize = IconMaximize;

const IconTrendingDown = _ref46 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref46;
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
    d: "M20.2 17.2l-7.7-7.7-4 4-5.7-5.7"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 18h6v-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconTrendingDown = IconTrendingDown;

const IconTrendingUp = _ref47 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref47;
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
    d: "M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 7h6v6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconTrendingUp = IconTrendingUp;

const IconShuffle = _ref48 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref48;
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
    d: "M16 3h5v5M4 20L20.2 3.8M21 16v5h-5M15 15l5.1 5.1M4 4l5 5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconShuffle = IconShuffle;

const IconMove = _ref49 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref49;
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
    d: "M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMove = IconMove;

const IconExpand = _ref50 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref50;
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
    d: "M3.8 3.8l16.4 16.4M20.2 3.8L3.8 20.2M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconExpand = IconExpand;

const IconExternalLink = _ref51 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref51;
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
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
  })));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconExternalLink = IconExternalLink;

const IconMenu = _ref52 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref52;
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
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMenu = IconMenu;

const IconGrid = _ref53 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref53;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconGrid = IconGrid;

const IconLoader = _ref54 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref54;
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
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "7.76",
    y2: "7.76"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16.24",
    y1: "16.24",
    x2: "19.07",
    y2: "19.07"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "7.76",
    y2: "16.24"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16.24",
    y1: "7.76",
    x2: "19.07",
    y2: "4.93"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconLoader = IconLoader;

const IconAlertCircle = _ref55 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref55;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconAlertCircle = IconAlertCircle;

const IconAlertOctagon = _ref56 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref56;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconAlertOctagon = IconAlertOctagon;

const IconAlertTriangle = _ref57 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref57;
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
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconAlertTriangle = IconAlertTriangle;

const IconHelpCircle = _ref58 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref58;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconHelpCircle = IconHelpCircle;

const IconInfo = _ref59 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref59;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconInfo = IconInfo;

const IconHexagon = _ref60 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref60;
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
    d: "M12 2l9 4.9V17L12 22l-9-4.9V7z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconHexagon = IconHexagon;

const IconOctagon = _ref61 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref61;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconOctagon = IconOctagon;

const IconTriangle = _ref62 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref62;
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
    d: "M3 20h18L12 4z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconTriangle = IconTriangle;

const IconCircle = _ref63 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref63;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCircle = IconCircle;

const IconSquare = _ref64 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref64;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSquare = IconSquare;

const IconPlus = _ref65 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref65;
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
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconPlus = IconPlus;

const IconMinus = _ref66 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref66;
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
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMinus = IconMinus;

const IconX = _ref67 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref67;
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
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconX = IconX;

const IconPlusCircle = _ref68 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref68;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconPlusCircle = IconPlusCircle;

const IconMinusCircle = _ref69 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref69;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMinusCircle = IconMinusCircle;

const IconXCircle = _ref70 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref70;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconXCircle = IconXCircle;

const IconPlusSquare = _ref71 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref71;
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
    d: "M3 3h18v18H3zM12 8v8m-4-4h8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconPlusSquare = IconPlusSquare;

const IconMinusSquare = _ref72 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref72;
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
    d: "M3 3h18v18H3zM8 12h8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMinusSquare = IconMinusSquare;

const IconXSquare = _ref73 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref73;
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
    d: "M3 3h18v18H3zM15 9l-6 6m0-6l6 6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconXSquare = IconXSquare;

const IconCheckCircle = _ref74 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref74;
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
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCheckCircle = IconCheckCircle;

const IconCheckSquare = _ref75 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref75;
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
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCheckSquare = IconCheckSquare;

const IconCheck = _ref76 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref76;
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
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCheck = IconCheck;

const IconSlash = _ref77 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref77;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "19.07",
    y2: "19.07"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSlash = IconSlash;

const IconMoreHorizontal = _ref78 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref78;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMoreHorizontal = IconMoreHorizontal;

const IconMoreVertical = _ref79 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref79;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMoreVertical = IconMoreVertical;

const IconEdit = _ref80 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref80;
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
    d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "18 2 22 6 12 16 8 16 8 12 18 2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconEdit = IconEdit;

const IconEdit2 = _ref81 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref81;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "16 3 21 8 8 21 3 21 3 16 16 3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconEdit2 = IconEdit2;

const IconEdit3 = _ref82 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref82;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "14 2 18 6 7 17 3 17 3 13 14 2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "22",
    x2: "21",
    y2: "22"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconEdit3 = IconEdit3;

const IconSetting = _ref83 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref83;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSetting = IconSetting;

const IconSliders = _ref84 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref84;
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
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "21",
    x2: "4",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "10",
    x2: "4",
    y2: "3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "20",
    y1: "21",
    x2: "20",
    y2: "16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "7",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "17",
    y1: "16",
    x2: "23",
    y2: "16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSliders = IconSliders;

const IconSearch = _ref85 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref85;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSearch = IconSearch;

const IconZoomIn = _ref86 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref86;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "11",
    y1: "8",
    x2: "11",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "11",
    x2: "14",
    y2: "11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconZoomIn = IconZoomIn;

const IconZoomOut = _ref87 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref87;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "11",
    x2: "14",
    y2: "11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconZoomOut = IconZoomOut;

const IconShare = _ref88 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref88;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8.59",
    y1: "13.51",
    x2: "15.42",
    y2: "17.49"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "15.41",
    y1: "6.51",
    x2: "8.59",
    y2: "10.49"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconShare = IconShare;

const IconClock = _ref89 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref89;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconClock = IconClock;

const IconEye = _ref90 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref90;
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
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconEye = IconEye;

const IconStar = _ref91 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref91;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconStar = IconStar;

const IconHeart = _ref92 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref92;
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
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconHeart = IconHeart;

const IconFlag = _ref93 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref93;
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
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "22",
    x2: "4",
    y2: "15"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconFlag = IconFlag;

const IconBookmark = _ref94 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref94;
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
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconBookmark = IconBookmark;

const IconMessageCircle = _ref95 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref95;
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
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMessageCircle = IconMessageCircle;

const IconMessageSquare = _ref96 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref96;
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
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMessageSquare = IconMessageSquare;

const IconTrash = _ref97 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref97;
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
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconTrash = IconTrash;

const IconMoon = _ref98 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref98;
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
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMoon = IconMoon;

const IconSun = _ref99 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref99;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSun = IconSun;

const IconThumbsDown = _ref100 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref100;
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
    d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconThumbsDown = IconThumbsDown;

const IconThumbsUp = _ref101 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref101;
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
    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconThumbsUp = IconThumbsUp;

const IconMaximize2 = _ref102 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref102;
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
    d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMaximize2 = IconMaximize2;

const IconMinimize2 = _ref103 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref103;
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
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMinimize2 = IconMinimize2;

const IconBell = _ref104 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref104;
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
    d: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconBell = IconBell;

const IconMail = _ref105 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref105;
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
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMail = IconMail;

const IconCalendar = _ref106 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref106;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCalendar = IconCalendar;

const IconLock = _ref107 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref107;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconLock = IconLock;

const IconUnlock = _ref108 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref108;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconUnlock = IconUnlock;

const IconShoppingBack = _ref109 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref109;
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
    d: "M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconShoppingBack = IconShoppingBack;

const IconShoppingCart = _ref110 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref110;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "10",
    cy: "20.5",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "18",
    cy: "20.5",
    r: "1"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconShoppingCart = IconShoppingCart;

const IconTag = _ref111 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref111;
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
    d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "7",
    y1: "7",
    x2: "7.01",
    y2: "7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconTag = IconTag;

const IconMapMarket = _ref112 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref112;
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
    d: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMapMarket = IconMapMarket;

const IconMapMarket2 = _ref113 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref113;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMapMarket2 = IconMapMarket2;

const IconMapMarket3 = _ref114 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref114;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "11.5",
    cy: "8.5",
    r: "5.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.5 14v7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMapMarket3 = IconMapMarket3;

const IconCompass = _ref115 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref115;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCompass = IconCompass;

const IconHome = _ref116 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref116;
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
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconHome = IconHome;

const IconHome2 = _ref117 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref117;
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
    d: "M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9 22V12h6v10M2 10.6L12 2l10 8.6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconHome2 = IconHome2;

const IconInbox = _ref118 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref118;
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
    d: "M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconInbox = IconInbox;

const IconCreditCard = _ref119 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref119;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 15h0M2 9.5h20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCreditCard = IconCreditCard;

const IconPlay = _ref120 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref120;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconPlay = IconPlay;

const IconPause = _ref121 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref121;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconPause = IconPause;

const IconPlayCircle = _ref122 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref122;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "10 8 16 12 10 16 10 8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconPlayCircle = IconPlayCircle;

const IconPauseCircle = _ref123 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref123;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "10",
    y1: "15",
    x2: "10",
    y2: "9"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "14",
    y1: "15",
    x2: "14",
    y2: "9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconPauseCircle = IconPauseCircle;

const IconStopCircle = _ref124 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref124;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconStopCircle = IconStopCircle;

const IconRewind = _ref125 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref125;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 19 2 12 11 5 11 19"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "22 19 13 12 22 5 22 19"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconRewind = IconRewind;

const IconFastForward = _ref126 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref126;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "13 19 22 12 13 5 13 19"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "2 19 11 12 2 5 2 19"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconFastForward = IconFastForward;

const IconSkipBack = _ref127 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref127;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "19 20 9 12 19 4 19 20"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "5",
    y1: "19",
    x2: "5",
    y2: "5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSkipBack = IconSkipBack;

const IconSkipForward = _ref128 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref128;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "5 4 15 12 5 20 5 4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconSkipForward = IconSkipForward;

const IconVolume2 = _ref129 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref129;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconVolume2 = IconVolume2;

const IconVolume1 = _ref130 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref130;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconVolume1 = IconVolume1;

const IconVolumex = _ref131 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref131;
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
    d: "M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconVolumex = IconVolumex;

const IconVolume = _ref132 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref132;
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
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconVolume = IconVolume;

const IconMusic = _ref133 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref133;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "5.5",
    cy: "17.5",
    r: "2.5"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "17.5",
    cy: "15.5",
    r: "2.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 17V5l12-2v12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMusic = IconMusic;

const IconVideoOff = _ref134 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref134;
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
    d: "M2 2l19.8 19.8M15 15.7V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h.3m5.4 0H13a2 2 0 0 1 2 2v3.3l1 1L22 7v10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconVideoOff = IconVideoOff;

const IconVideo = _ref135 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref135;
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
    d: "M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconVideo = IconVideo;

const IconCamera = _ref136 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref136;
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
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(2 3)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "4"
  })));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconCamera = IconCamera;

const IconMic = _ref137 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref137;
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
    d: "M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconMic = IconMic;

const IconFilm = _ref138 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref138;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "2.18",
    ry: "2.18"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "7",
    y1: "2",
    x2: "7",
    y2: "22"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "17",
    y1: "2",
    x2: "17",
    y2: "22"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "2",
    y1: "7",
    x2: "7",
    y2: "7"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "2",
    y1: "17",
    x2: "7",
    y2: "17"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "17",
    y1: "17",
    x2: "22",
    y2: "17"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "17",
    y1: "7",
    x2: "22",
    y2: "7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconFilm = IconFilm;

const IconImage = _ref139 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref139;
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
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.4 14.5L16 10 4 20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {style} set style icon
 */


exports.IconImage = IconImage;

const IconRadio = _ref140 => {
  let {
    color,
    size,
    weight,
    style
  } = _ref140;
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
  }));
};

exports.IconRadio = IconRadio;