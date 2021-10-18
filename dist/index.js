"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconHash = exports.IconHardDrive = exports.IconGrid = exports.IconFolderX2 = exports.IconFolderX = exports.IconFolderPlus2 = exports.IconFolderPlus = exports.IconFolderMinus2 = exports.IconFolderMinus = exports.IconFolder = exports.IconFlag = exports.IconFilm = exports.IconFileX2 = exports.IconFileX = exports.IconFileText = exports.IconFilePlus2 = exports.IconFilePlus = exports.IconFileMinus2 = exports.IconFileMinus = exports.IconFile = exports.IconFastForward = exports.IconFacebook = exports.IconEye = exports.IconExternalLink = exports.IconExpand = exports.IconEdit3 = exports.IconEdit2 = exports.IconEdit = exports.IconDownloadCloud = exports.IconDownload = exports.IconDollarSign = exports.IconDisc = exports.IconDelete = exports.IconDatabase = exports.IconCreditCard = exports.IconCpu = exports.IconCornerUpRight = exports.IconCornerUpLeft = exports.IconCornerRightUp = exports.IconCornerRightDown = exports.IconCornerLeftUp = exports.IconCornerLeftDown = exports.IconCornerDownRight = exports.IconCornerDownLeft = exports.IconCopy = exports.IconCompass = exports.IconCommand = exports.IconCode = exports.IconClock = exports.IconClipboard = exports.IconCircle = exports.IconChevronsUp = exports.IconChevronsRight = exports.IconChevronsLeft = exports.IconChevronsDown = exports.IconChevronUp = exports.IconChevronRight = exports.IconChevronLeft = exports.IconChevronDown = exports.IconCheckSquare = exports.IconCheckCircle = exports.IconCheck = exports.IconCast = exports.IconCamera = exports.IconCalendar = exports.IconBookmark = exports.IconBold = exports.IconBluetooth = exports.IconBell = exports.IconBarChart4 = exports.IconBarChart3 = exports.IconBarChart2 = exports.IconBarChart = exports.IconAtSign = exports.IconArrowUpRight = exports.IconArrowUpLeft = exports.IconArrowUpCircle = exports.IconArrowUp = exports.IconArrowRightCircle = exports.IconArrowRight = exports.IconArrowOutSquare = exports.IconArrowOutCircle = exports.IconArrowOut = exports.IconArrowLeftCircle = exports.IconArrowLeft = exports.IconArrowInSquare = exports.IconArrowInCircle = exports.IconArrowIn = exports.IconArrowDownRight = exports.IconArrowDownLeft = exports.IconArrowDownCircle = exports.IconArrowDown = exports.IconAlignRight = exports.IconAlignLeft = exports.IconAlignJustify = exports.IconAlignCenter = exports.IconAlertTriangle = exports.IconAlertOctagon = exports.IconAlertCircle = exports.IconAirPlay = void 0;
exports.IconTv = exports.IconTriangle = exports.IconTrendingUp = exports.IconTrendingDown = exports.IconTrash = exports.IconThumbsUp = exports.IconThumbsDown = exports.IconTag = exports.IconTablet = exports.IconTable2 = exports.IconTable = exports.IconSun = exports.IconStrikethrough = exports.IconStopCircle = exports.IconStar = exports.IconSquare = exports.IconSpeaker = exports.IconSmartphone = exports.IconSliders = exports.IconSlash = exports.IconSkipForward = exports.IconSkipBack = exports.IconShuffle = exports.IconShoppingCart = exports.IconShoppingBack = exports.IconShare = exports.IconSetting = exports.IconServer = exports.IconSearch = exports.IconScissors = exports.IconSave = exports.IconRss = exports.IconRotateRight = exports.IconRotateLeft = exports.IconRewind = exports.IconRepeat = exports.IconRefreshCW = exports.IconRefreshCCW = exports.IconRadio = exports.IconPrinter = exports.IconPower = exports.IconPlusSquare = exports.IconPlusCircle = exports.IconPlus = exports.IconPlayCircle = exports.IconPlay = exports.IconPieChart5 = exports.IconPieChart4 = exports.IconPieChart3 = exports.IconPieChart2 = exports.IconPieChart = exports.IconPhone = exports.IconPercent = exports.IconPauseCircle = exports.IconPause = exports.IconPaperclip = exports.IconOctagon = exports.IconMusic = exports.IconMove = exports.IconMoreVertical = exports.IconMoreHorizontal = exports.IconMoon = exports.IconMonitor = exports.IconMinusSquare = exports.IconMinusCircle = exports.IconMinus = exports.IconMinimize2 = exports.IconMinimize = exports.IconMic = exports.IconMessageSquare = exports.IconMessageCircle = exports.IconMenu = exports.IconMaximize2 = exports.IconMaximize = exports.IconMapMarket3 = exports.IconMapMarket2 = exports.IconMapMarket = exports.IconMail = exports.IconLock = exports.IconLoader = exports.IconList = exports.IconLink = exports.IconLineChart2 = exports.IconLineChart = exports.IconLayout6 = exports.IconLayout5 = exports.IconLayout4 = exports.IconLayout3 = exports.IconLayout2 = exports.IconLayout = exports.IconItalic = exports.IconInfo = exports.IconInbox = exports.IconImage = exports.IconHome2 = exports.IconHome = exports.IconHexagon = exports.IconHelpCircle = exports.IconHeart = exports.IconHeadphones = exports.IconHash = exports.IconHardDrive = exports.IconGrid = exports.IconFolderX2 = exports.IconFolderX = exports.IconFolderPlus2 = exports.IconFolderPlus = exports.IconFolderMinus2 = exports.IconFolderMinus = exports.IconFolder = exports.IconFlag = exports.IconFilm = exports.IconFileX2 = exports.IconFileX = exports.IconFileText = exports.IconFilePlus2 = exports.IconFilePlus = exports.IconFileMinus2 = exports.IconFileMinus = exports.IconFile = exports.IconFastForward = exports.IconFacebook = exports.IconEye = exports.IconExternalLink = exports.IconExpand = exports.IconEdit3 = exports.IconEdit2 = exports.IconEdit = exports.IconDownloadCloud = exports.IconDownload = exports.IconDollarSign = exports.IconDisc = exports.IconDelete = exports.IconDatabase = exports.IconCreditCard = exports.IconCpu = exports.IconCornerUpRight = exports.IconCornerUpLeft = exports.IconCornerRightUp = exports.IconCornerRightDown = exports.IconCornerLeftUp = exports.IconCornerLeftDown = exports.IconCornerDownRight = exports.IconCornerDownLeft = exports.IconCopy = exports.IconCompass = exports.IconCommand = exports.IconCode = exports.IconClock = exports.IconClipboard = exports.IconCircle = exports.IconChevronsUp = exports.IconChevronsRight = exports.IconChevronsLeft = exports.IconChevronsDown = exports.IconChevronUp = exports.IconChevronRight = exports.IconChevronLeft = exports.IconChevronDown = exports.IconCheckSquare = exports.IconCheckCircle = exports.IconCheck = exports.IconCast = exports.IconCamera = exports.IconCalendar = exports.IconBookmark = exports.IconBold = exports.IconBluetooth = exports.IconBell = exports.IconBarChart4 = exports.IconBarChart3 = exports.IconBarChart2 = exports.IconBarChart = exports.IconAtSign = exports.IconArrowUpRight = exports.IconArrowUpLeft = exports.IconArrowUpCircle = exports.IconArrowUp = exports.IconArrowRightCircle = exports.IconArrowRight = exports.IconArrowOutSquare = exports.IconArrowOutCircle = exports.IconArrowOut = exports.IconArrowLeftCircle = exports.IconArrowLeft = exports.IconArrowInSquare = exports.IconArrowInCircle = exports.IconArrowIn = exports.IconArrowDownRight = exports.IconArrowDownLeft = exports.IconArrowDownCircle = exports.IconArrowDown = exports.IconAlignRight = exports.IconAlignLeft = exports.IconAlignJustify = exports.IconAlignCenter = exports.IconAlertTriangle = exports.IconAlertOctagon = exports.IconAlertCircle = exports.IconAirPlay = void 0;
exports.IconZoomOut = exports.IconZoomIn = exports.IconXSquare = exports.IconXCircle = exports.IconX = exports.IconWifi = exports.IconWatch = exports.IconVolumex = exports.IconVolume2 = exports.IconVolume1 = exports.IconVolume = exports.IconVideoOff = exports.IconVideo = exports.IconUserx = exports.IconUsers = exports.IconUserPlus = exports.IconUserMinus = exports.IconUserCircle = exports.IconUserCheck = exports.IconUser = exports.IconUploadCloud = exports.IconUpload = exports.IconUnlock = exports.IconUnderline = exports.IconType = exports.IconTwitter = exports.IconTv = exports.IconTriangle = exports.IconTrendingUp = exports.IconTrendingDown = exports.IconTrash = exports.IconThumbsUp = exports.IconThumbsDown = exports.IconTag = exports.IconTablet = exports.IconTable2 = exports.IconTable = exports.IconSun = exports.IconStrikethrough = exports.IconStopCircle = exports.IconStar = exports.IconSquare = exports.IconSpeaker = exports.IconSmartphone = exports.IconSliders = exports.IconSlash = exports.IconSkipForward = exports.IconSkipBack = exports.IconShuffle = exports.IconShoppingCart = exports.IconShoppingBack = exports.IconShare = exports.IconSetting = exports.IconServer = exports.IconSearch = exports.IconScissors = exports.IconSave = exports.IconRss = exports.IconRotateRight = exports.IconRotateLeft = exports.IconRewind = exports.IconRepeat = exports.IconRefreshCW = exports.IconRefreshCCW = exports.IconRadio = exports.IconPrinter = exports.IconPower = exports.IconPlusSquare = exports.IconPlusCircle = exports.IconPlus = exports.IconPlayCircle = exports.IconPlay = exports.IconPieChart5 = exports.IconPieChart4 = exports.IconPieChart3 = exports.IconPieChart2 = exports.IconPieChart = exports.IconPhone = exports.IconPercent = exports.IconPauseCircle = exports.IconPause = exports.IconPaperclip = exports.IconOctagon = exports.IconMusic = exports.IconMove = exports.IconMoreVertical = exports.IconMoreHorizontal = exports.IconMoon = exports.IconMonitor = exports.IconMinusSquare = exports.IconMinusCircle = exports.IconMinus = exports.IconMinimize2 = exports.IconMinimize = exports.IconMic = exports.IconMessageSquare = exports.IconMessageCircle = exports.IconMenu = exports.IconMaximize2 = exports.IconMaximize = exports.IconMapMarket3 = exports.IconMapMarket2 = exports.IconMapMarket = exports.IconMail = exports.IconLock = exports.IconLoader = exports.IconList = exports.IconLink = exports.IconLineChart2 = exports.IconLineChart = exports.IconLayout6 = exports.IconLayout5 = exports.IconLayout4 = exports.IconLayout3 = exports.IconLayout2 = exports.IconLayout = exports.IconItalic = exports.IconInfo = exports.IconInbox = exports.IconImage = exports.IconHome2 = exports.IconHome = exports.IconHexagon = exports.IconHelpCircle = exports.IconHeart = exports.IconHeadphones = exports.IconHash = exports.IconHardDrive = exports.IconGrid = exports.IconFolderX2 = exports.IconFolderX = exports.IconFolderPlus2 = exports.IconFolderPlus = exports.IconFolderMinus2 = exports.IconFolderMinus = exports.IconFolder = exports.IconFlag = exports.IconFilm = exports.IconFileX2 = exports.IconFileX = exports.IconFileText = exports.IconFilePlus2 = exports.IconFilePlus = exports.IconFileMinus2 = exports.IconFileMinus = exports.IconFile = exports.IconFastForward = exports.IconFacebook = exports.IconEye = exports.IconExternalLink = exports.IconExpand = exports.IconEdit3 = exports.IconEdit2 = exports.IconEdit = exports.IconDownloadCloud = exports.IconDownload = exports.IconDollarSign = exports.IconDisc = exports.IconDelete = exports.IconDatabase = exports.IconCreditCard = exports.IconCpu = exports.IconCornerUpRight = exports.IconCornerUpLeft = exports.IconCornerRightUp = exports.IconCornerRightDown = exports.IconCornerLeftUp = exports.IconCornerLeftDown = exports.IconCornerDownRight = exports.IconCornerDownLeft = exports.IconCopy = exports.IconCompass = exports.IconCommand = exports.IconCode = exports.IconClock = exports.IconClipboard = exports.IconCircle = exports.IconChevronsUp = exports.IconChevronsRight = exports.IconChevronsLeft = exports.IconChevronsDown = exports.IconChevronUp = exports.IconChevronRight = exports.IconChevronLeft = exports.IconChevronDown = exports.IconCheckSquare = exports.IconCheckCircle = exports.IconCheck = exports.IconCast = exports.IconCamera = exports.IconCalendar = exports.IconBookmark = exports.IconBold = exports.IconBluetooth = exports.IconBell = exports.IconBarChart4 = exports.IconBarChart3 = exports.IconBarChart2 = exports.IconBarChart = exports.IconAtSign = exports.IconArrowUpRight = exports.IconArrowUpLeft = exports.IconArrowUpCircle = exports.IconArrowUp = exports.IconArrowRightCircle = exports.IconArrowRight = exports.IconArrowOutSquare = exports.IconArrowOutCircle = exports.IconArrowOut = exports.IconArrowLeftCircle = exports.IconArrowLeft = exports.IconArrowInSquare = exports.IconArrowInCircle = exports.IconArrowIn = exports.IconArrowDownRight = exports.IconArrowDownLeft = exports.IconArrowDownCircle = exports.IconArrowDown = exports.IconAlignRight = exports.IconAlignLeft = exports.IconAlignJustify = exports.IconAlignCenter = exports.IconAlertTriangle = exports.IconAlertOctagon = exports.IconAlertCircle = exports.IconAirPlay = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Senirupa
 * Author firmnardians
 * Copyright(c) firmnardians
 * MIT Licensed
 */
const SIZE = '18px';
const COLOR = '#000000';
const WEIGHT = '2';
const LINECAP = 'round';
const LINEJOIN = 'round';
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */

const IconArrowUp = _ref => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 19V6M5 12l7-7 7 7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowUp = IconArrowUp;

const IconArrowDown = _ref2 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 5v13M5 12l7 7 7-7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowDown = IconArrowDown;

const IconArrowLeft = _ref3 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 12H6M12 5l-7 7 7 7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowLeft = IconArrowLeft;

const IconArrowRight = _ref4 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 12h13M12 5l7 7-7 7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowRight = IconArrowRight;

const IconArrowUpLeft = _ref5 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 17L7.8 7.7M7 17V7h10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowUpLeft = IconArrowUpLeft;

const IconArrowUpRight = _ref6 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 17l9.2-9.2M17 17V7H7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowUpRight = IconArrowUpRight;

const IconArrowDownLeft = _ref7 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 7l-9.2 9.2M7 7v10h10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowDownLeft = IconArrowDownLeft;

const IconArrowDownRight = _ref8 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref8;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 7l9.2 9.2M17 7v10H7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowDownRight = IconArrowDownRight;

const IconCornerDownLeft = _ref9 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref9;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerDownLeft = IconCornerDownLeft;

const IconCornerDownRight = _ref10 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref10;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerDownRight = IconCornerDownRight;

const IconCornerUpLeft = _ref11 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref11;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerUpLeft = IconCornerUpLeft;

const IconCornerUpRight = _ref12 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref12;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerUpRight = IconCornerUpRight;

const IconCornerLeftDown = _ref13 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref13;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerLeftDown = IconCornerLeftDown;

const IconCornerLeftUp = _ref14 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref14;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerLeftUp = IconCornerLeftUp;

const IconCornerRightDown = _ref15 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref15;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerRightDown = IconCornerRightDown;

const IconCornerRightUp = _ref16 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref16;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCornerRightUp = IconCornerRightUp;

const IconChevronDown = _ref17 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref17;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 9l6 6 6-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronDown = IconChevronDown;

const IconChevronUp = _ref18 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref18;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18 15l-6-6-6 6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronUp = IconChevronUp;

const IconChevronLeft = _ref19 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref19;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronLeft = IconChevronLeft;

const IconChevronRight = _ref20 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref20;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9 18l6-6-6-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronRight = IconChevronRight;

const IconChevronsDown = _ref21 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref21;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 13l5 5 5-5M7 6l5 5 5-5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronsDown = IconChevronsDown;

const IconChevronsLeft = _ref22 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref22;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11 17l-5-5 5-5M18 17l-5-5 5-5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronsLeft = IconChevronsLeft;

const IconChevronsRight = _ref23 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref23;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13 17l5-5-5-5M6 17l5-5-5-5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronsRight = IconChevronsRight;

const IconChevronsUp = _ref24 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref24;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 11l-5-5-5 5M17 18l-5-5-5 5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconChevronsUp = IconChevronsUp;

const IconArrowUpCircle = _ref25 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref25;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowUpCircle = IconArrowUpCircle;

const IconArrowDownCircle = _ref26 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref26;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowDownCircle = IconArrowDownCircle;

const IconArrowRightCircle = _ref27 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref27;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowRightCircle = IconArrowRightCircle;

const IconArrowLeftCircle = _ref28 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref28;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowLeftCircle = IconArrowLeftCircle;

const IconRefreshCCW = _ref29 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref29;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRefreshCCW = IconRefreshCCW;

const IconRefreshCW = _ref30 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref30;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRefreshCW = IconRefreshCW;

const IconRotateLeft = _ref31 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref31;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRotateLeft = IconRotateLeft;

const IconRotateRight = _ref32 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref32;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRotateRight = IconRotateRight;

const IconRepeat = _ref33 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref33;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRepeat = IconRepeat;

const IconArrowIn = _ref34 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref34;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowIn = IconArrowIn;

const IconArrowInSquare = _ref35 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref35;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowInSquare = IconArrowInSquare;

const IconArrowInCircle = _ref36 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref36;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowInCircle = IconArrowInCircle;

const IconArrowOut = _ref37 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref37;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowOut = IconArrowOut;

const IconArrowOutSquare = _ref38 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref38;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowOutSquare = IconArrowOutSquare;

const IconArrowOutCircle = _ref39 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref39;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 17l5-5-5-5M19.8 12H9M13 22a10 10 0 1 1 0-20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconArrowOutCircle = IconArrowOutCircle;

const IconUpload = _ref40 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref40;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUpload = IconUpload;

const IconDownload = _ref41 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref41;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconDownload = IconDownload;

const IconUploadCloud = _ref42 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref42;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUploadCloud = IconUploadCloud;

const IconDownloadCloud = _ref43 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref43;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8M12 19.8V12M16 17l-4 4-4-4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconDownloadCloud = IconDownloadCloud;

const IconMinimize = _ref44 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref44;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 14h6v6M3 21l6.1-6.1M20 10h-6V4M21 3l-6.1 6.1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMinimize = IconMinimize;

const IconMaximize = _ref45 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref45;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMaximize = IconMaximize;

const IconTrendingDown = _ref46 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref46;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTrendingDown = IconTrendingDown;

const IconTrendingUp = _ref47 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref47;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTrendingUp = IconTrendingUp;

const IconShuffle = _ref48 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref48;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 3h5v5M4 20L20.2 3.8M21 16v5h-5M15 15l5.1 5.1M4 4l5 5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconShuffle = IconShuffle;

const IconMove = _ref49 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref49;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMove = IconMove;

const IconExpand = _ref50 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref50;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.8 3.8l16.4 16.4M20.2 3.8L3.8 20.2M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconExpand = IconExpand;

const IconExternalLink = _ref51 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref51;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconExternalLink = IconExternalLink;

const IconMenu = _ref52 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref52;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMenu = IconMenu;

const IconGrid = _ref53 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref53;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconGrid = IconGrid;

const IconLoader = _ref54 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref54;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLoader = IconLoader;

const IconAlertCircle = _ref55 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref55;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAlertCircle = IconAlertCircle;

const IconAlertOctagon = _ref56 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref56;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAlertOctagon = IconAlertOctagon;

const IconAlertTriangle = _ref57 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref57;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAlertTriangle = IconAlertTriangle;

const IconHelpCircle = _ref58 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref58;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHelpCircle = IconHelpCircle;

const IconInfo = _ref59 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref59;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconInfo = IconInfo;

const IconHexagon = _ref60 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref60;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 2l9 4.9V17L12 22l-9-4.9V7z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHexagon = IconHexagon;

const IconOctagon = _ref61 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref61;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconOctagon = IconOctagon;

const IconTriangle = _ref62 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref62;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 20h18L12 4z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTriangle = IconTriangle;

const IconCircle = _ref63 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref63;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCircle = IconCircle;

const IconSquare = _ref64 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref64;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSquare = IconSquare;

const IconPlus = _ref65 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref65;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPlus = IconPlus;

const IconMinus = _ref66 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref66;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMinus = IconMinus;

const IconX = _ref67 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref67;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconX = IconX;

const IconPlusCircle = _ref68 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref68;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPlusCircle = IconPlusCircle;

const IconMinusCircle = _ref69 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref69;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMinusCircle = IconMinusCircle;

const IconXCircle = _ref70 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref70;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconXCircle = IconXCircle;

const IconPlusSquare = _ref71 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref71;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 3h18v18H3zM12 8v8m-4-4h8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPlusSquare = IconPlusSquare;

const IconMinusSquare = _ref72 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref72;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 3h18v18H3zM8 12h8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMinusSquare = IconMinusSquare;

const IconXSquare = _ref73 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref73;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 3h18v18H3zM15 9l-6 6m0-6l6 6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconXSquare = IconXSquare;

const IconCheckCircle = _ref74 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref74;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCheckCircle = IconCheckCircle;

const IconCheckSquare = _ref75 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref75;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCheckSquare = IconCheckSquare;

const IconCheck = _ref76 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref76;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCheck = IconCheck;

const IconSlash = _ref77 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref77;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSlash = IconSlash;

const IconMoreHorizontal = _ref78 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref78;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMoreHorizontal = IconMoreHorizontal;

const IconMoreVertical = _ref79 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref79;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMoreVertical = IconMoreVertical;

const IconEdit = _ref80 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref80;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconEdit = IconEdit;

const IconEdit2 = _ref81 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref81;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "16 3 21 8 8 21 3 21 3 16 16 3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconEdit2 = IconEdit2;

const IconEdit3 = _ref82 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref82;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconEdit3 = IconEdit3;

const IconSetting = _ref83 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref83;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSetting = IconSetting;

const IconSliders = _ref84 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref84;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSliders = IconSliders;

const IconSearch = _ref85 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref85;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSearch = IconSearch;

const IconZoomIn = _ref86 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref86;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconZoomIn = IconZoomIn;

const IconZoomOut = _ref87 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref87;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconZoomOut = IconZoomOut;

const IconShare = _ref88 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref88;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconShare = IconShare;

const IconClock = _ref89 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref89;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconClock = IconClock;

const IconEye = _ref90 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref90;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconEye = IconEye;

const IconStar = _ref91 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref91;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconStar = IconStar;

const IconHeart = _ref92 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref92;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHeart = IconHeart;

const IconFlag = _ref93 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref93;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFlag = IconFlag;

const IconBookmark = _ref94 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref94;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBookmark = IconBookmark;

const IconMessageCircle = _ref95 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref95;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMessageCircle = IconMessageCircle;

const IconMessageSquare = _ref96 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref96;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMessageSquare = IconMessageSquare;

const IconTrash = _ref97 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref97;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTrash = IconTrash;

const IconMoon = _ref98 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref98;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMoon = IconMoon;

const IconSun = _ref99 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref99;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSun = IconSun;

const IconThumbsDown = _ref100 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref100;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconThumbsDown = IconThumbsDown;

const IconThumbsUp = _ref101 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref101;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconThumbsUp = IconThumbsUp;

const IconMaximize2 = _ref102 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref102;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMaximize2 = IconMaximize2;

const IconMinimize2 = _ref103 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref103;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMinimize2 = IconMinimize2;

const IconBell = _ref104 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref104;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBell = IconBell;

const IconMail = _ref105 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref105;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMail = IconMail;

const IconCalendar = _ref106 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref106;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCalendar = IconCalendar;

const IconLock = _ref107 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref107;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLock = IconLock;

const IconUnlock = _ref108 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref108;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUnlock = IconUnlock;

const IconShoppingBack = _ref109 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref109;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconShoppingBack = IconShoppingBack;

const IconShoppingCart = _ref110 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref110;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconShoppingCart = IconShoppingCart;

const IconTag = _ref111 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref111;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTag = IconTag;

const IconMapMarket = _ref112 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref112;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMapMarket = IconMapMarket;

const IconMapMarket2 = _ref113 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref113;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMapMarket2 = IconMapMarket2;

const IconMapMarket3 = _ref114 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref114;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMapMarket3 = IconMapMarket3;

const IconCompass = _ref115 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref115;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCompass = IconCompass;

const IconHome = _ref116 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref116;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHome = IconHome;

const IconHome2 = _ref117 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref117;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHome2 = IconHome2;

const IconInbox = _ref118 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref118;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconInbox = IconInbox;

const IconCreditCard = _ref119 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref119;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCreditCard = IconCreditCard;

const IconPlay = _ref120 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref120;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPlay = IconPlay;

const IconPause = _ref121 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref121;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPause = IconPause;

const IconPlayCircle = _ref122 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref122;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPlayCircle = IconPlayCircle;

const IconPauseCircle = _ref123 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref123;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPauseCircle = IconPauseCircle;

const IconStopCircle = _ref124 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref124;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconStopCircle = IconStopCircle;

const IconRewind = _ref125 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref125;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRewind = IconRewind;

const IconFastForward = _ref126 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref126;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFastForward = IconFastForward;

const IconSkipBack = _ref127 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref127;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSkipBack = IconSkipBack;

const IconSkipForward = _ref128 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref128;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSkipForward = IconSkipForward;

const IconVolume2 = _ref129 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref129;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconVolume2 = IconVolume2;

const IconVolume1 = _ref130 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref130;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconVolume1 = IconVolume1;

const IconVolumex = _ref131 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref131;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconVolumex = IconVolumex;

const IconVolume = _ref132 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref132;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconVolume = IconVolume;

const IconMusic = _ref133 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref133;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMusic = IconMusic;

const IconVideoOff = _ref134 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref134;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M2 2l19.8 19.8M15 15.7V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h.3m5.4 0H13a2 2 0 0 1 2 2v3.3l1 1L22 7v10"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconVideoOff = IconVideoOff;

const IconVideo = _ref135 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref135;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconVideo = IconVideo;

const IconCamera = _ref136 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref136;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCamera = IconCamera;

const IconMic = _ref137 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref137;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMic = IconMic;

const IconFilm = _ref138 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref138;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFilm = IconFilm;

const IconImage = _ref139 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref139;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconImage = IconImage;

const IconRadio = _ref140 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref140;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRadio = IconRadio;

const IconFile = _ref141 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref141;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M13 3v6h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFile = IconFile;

const IconFileText = _ref142 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref142;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 3v5h5M16 13H8M16 17H8M10 9H8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFileText = IconFileText;

const IconFilePlus = _ref143 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref143;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 3v5h5M12 18v-6M9 15h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFilePlus = IconFilePlus;

const IconFileMinus = _ref144 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref144;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 3v5h5M9 15h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFileMinus = IconFileMinus;

const IconFileX = _ref145 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref145;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 3v5h5M9.9 17.1L14 13M9.9 12.9L14 17"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFileX = IconFileX;

const IconFilePlus2 = _ref146 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref146;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 3v5h5M18 21v-6M15 18h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFilePlus2 = IconFilePlus2;

const IconFileMinus2 = _ref147 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref147;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 3v5h5M15 18h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFileMinus2 = IconFileMinus2;

const IconFileX2 = _ref148 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref148;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 3v5h5M15.88 20.12l4.24-4.24M15.88 15.88l4.24 4.24"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFileX2 = IconFileX2;

const IconFolder = _ref149 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref149;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFolder = IconFolder;

const IconFolderPlus = _ref150 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref150;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "17"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "14",
    x2: "15",
    y2: "14"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFolderPlus = IconFolderPlus;

const IconFolderMinus = _ref151 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref151;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "14",
    x2: "15",
    y2: "14"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFolderMinus = IconFolderMinus;

const IconFolderX = _ref152 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref152;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v11zM9.9 16.1L14 12M9.9 11.9L14 16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFolderX = IconFolderX;

const IconFolderPlus2 = _ref153 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref153;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11 21H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v2M19 15v6M16 18h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFolderPlus2 = IconFolderPlus2;

const IconFolderMinus2 = _ref154 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref154;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11 21H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v2M16 18h6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFolderMinus2 = IconFolderMinus2;

const IconFolderX2 = _ref155 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref155;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11 21H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v2M21.12 15.88l-4.24 4.24M16.88 15.88l4.24 4.24"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFolderX2 = IconFolderX2;

const IconLayout = _ref156 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref156;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 9h18M9 21V9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLayout = IconLayout;

const IconLayout2 = _ref157 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref157;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 9h18M15 21V9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLayout2 = IconLayout2;

const IconLayout3 = _ref158 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref158;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 9h18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLayout3 = IconLayout3;

const IconLayout4 = _ref159 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref159;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 15h18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLayout4 = IconLayout4;

const IconLayout5 = _ref160 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref160;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9 3v18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLayout5 = IconLayout5;

const IconLayout6 = _ref161 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref161;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 3v18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLayout6 = IconLayout6;

const IconFacebook = _ref162 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref162;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconFacebook = IconFacebook;

const IconTwitter = _ref163 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref163;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTwitter = IconTwitter;

const IconMonitor = _ref164 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref164;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "21",
    x2: "16",
    y2: "21"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "21"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconMonitor = IconMonitor;

const IconSmartphone = _ref165 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref165;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSmartphone = IconSmartphone;

const IconTablet = _ref166 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref166;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTablet = IconTablet;

const IconSpeaker = _ref167 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref167;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "6",
    x2: "12.01",
    y2: "6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSpeaker = IconSpeaker;

const IconHeadphones = _ref168 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref168;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 18v-6a9 9 0 0 1 18 0v6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHeadphones = IconHeadphones;

const IconTv = _ref169 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref169;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "15",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "17 2 12 7 7 2"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTv = IconTv;

const IconWatch = _ref170 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref170;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "12 9 12 12 13.5 13.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconWatch = IconWatch;

const IconHardDrive = _ref171 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref171;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "22",
    y1: "12",
    x2: "2",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "6",
    y1: "16",
    x2: "6",
    y2: "16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "10",
    y1: "16",
    x2: "10",
    y2: "16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHardDrive = IconHardDrive;

const IconDatabase = _ref172 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref172;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconDatabase = IconDatabase;

const IconPhone = _ref173 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref173;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPhone = IconPhone;

const IconPrinter = _ref174 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref174;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "6 9 6 2 18 2 18 9"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPrinter = IconPrinter;

const IconServer = _ref175 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref175;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "2",
    y: "14",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "6.01",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "6",
    y1: "18",
    x2: "6.01",
    y2: "18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconServer = IconServer;

const IconCpu = _ref176 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref176;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "1",
    x2: "9",
    y2: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "15",
    y1: "1",
    x2: "15",
    y2: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "9",
    y2: "23"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "15",
    y1: "20",
    x2: "15",
    y2: "23"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "20",
    y1: "9",
    x2: "23",
    y2: "9"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "20",
    y1: "14",
    x2: "23",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "1",
    y1: "9",
    x2: "4",
    y2: "9"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "4",
    y2: "14"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCpu = IconCpu;

const IconDisc = _ref177 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref177;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconDisc = IconDisc;

const IconBarChart = _ref178 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref178;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBarChart = IconBarChart;

const IconBarChart2 = _ref179 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref179;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBarChart2 = IconBarChart2;

const IconBarChart3 = _ref180 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref180;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 20V10M6 20V4M18 20v-4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBarChart3 = IconBarChart3;

const IconBarChart4 = _ref181 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref181;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 20v-6M6 20V10M18 20V4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBarChart4 = IconBarChart4;

const IconPieChart = _ref182 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref182;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 12A10 10 0 0 0 12 2v10z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPieChart = IconPieChart;

const IconPieChart2 = _ref183 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref183;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 2a10 10 0 1 0 10 10H12V2zM21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPieChart2 = IconPieChart2;

const IconPieChart3 = _ref184 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref184;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 6l-7 6V2.5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPieChart3 = IconPieChart3;

const IconPieChart4 = _ref185 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref185;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.5 12H12V2.5"
  }), /*#__PURE__*/_react.default.createElement("circle", {
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPieChart4 = IconPieChart4;

const IconPieChart5 = _ref186 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref186;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.6 18.6L12 12V2.5"
  }), /*#__PURE__*/_react.default.createElement("circle", {
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPieChart5 = IconPieChart5;

const IconLineChart = _ref187 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref187;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLineChart = IconLineChart;

const IconLineChart2 = _ref188 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref188;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.7 14.3L15 10.5l-2.7 2.7L7 8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLineChart2 = IconLineChart2;

const IconUserCircle = _ref189 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref189;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("circle", {
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
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUserCircle = IconUserCircle;

const IconUsers = _ref190 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref190;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUsers = IconUsers;

const IconUserx = _ref191 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref191;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "8",
    x2: "23",
    y2: "13"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "23",
    y1: "8",
    x2: "18",
    y2: "13"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUserx = IconUserx;

const IconUserPlus = _ref192 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref192;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "20",
    y1: "8",
    x2: "20",
    y2: "14"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUserPlus = IconUserPlus;

const IconUserMinus = _ref193 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref193;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUserMinus = IconUserMinus;

const IconUserCheck = _ref194 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref194;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "17 11 19 13 23 9"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUserCheck = IconUserCheck;

const IconUser = _ref195 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref195;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUser = IconUser;

const IconAtSign = _ref196 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref196;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAtSign = IconAtSign;

const IconPercent = _ref197 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref197;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "2.5"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPercent = IconPercent;

const IconDollarSign = _ref198 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref198;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconDollarSign = IconDollarSign;

const IconBluetooth = _ref199 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref199;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBluetooth = IconBluetooth;

const IconHash = _ref200 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref200;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "9",
    x2: "20",
    y2: "9"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "15",
    x2: "20",
    y2: "15"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "10",
    y1: "3",
    x2: "8",
    y2: "21"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "3",
    x2: "14",
    y2: "21"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconHash = IconHash;

const IconPower = _ref201 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref201;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.36 6.64a9 9 0 1 1-12.73 0"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPower = IconPower;

const IconCommand = _ref202 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref202;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCommand = IconCommand;

const IconRss = _ref203 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref203;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 11a9 9 0 0 1 9 9"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 4a16 16 0 0 1 16 16"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "5",
    cy: "19",
    r: "1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconRss = IconRss;

const IconAirPlay = _ref204 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref204;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "12 15 17 21 7 21 12 15"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAirPlay = IconAirPlay;

const IconCast = _ref205 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref205;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "2",
    y1: "20",
    x2: "2.01",
    y2: "20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCast = IconCast;

const IconWifi = _ref206 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref206;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 12.55a11 11 0 0 1 14.08 0"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.42 9a16 16 0 0 1 21.16 0"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.53 16.11a6 6 0 0 1 6.95 0"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12.01",
    y2: "20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconWifi = IconWifi;

const IconBold = _ref207 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref207;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconBold = IconBold;

const IconUnderline = _ref208 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref208;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "21",
    x2: "20",
    y2: "21"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconUnderline = IconUnderline;

const IconItalic = _ref209 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref209;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 4h-9M14 20H5M14.7 4.7L9.2 19.4"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconItalic = IconItalic;

const IconStrikethrough = _ref210 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref210;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7 0-5.3.7-5.3 3.6 0 1.5 1.8 3.3 3.6 3.9h.2m8.2 3.7c.3.4.4.8.4 1.3 0 2.9-2.7 3.6-6.2 3.6-2.3 0-4.4-.3-6.2-.9M4 11.5h16"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconStrikethrough = IconStrikethrough;

const IconType = _ref211 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref211;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "4 7 4 4 20 4 20 7"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "15",
    y2: "20"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconType = IconType;

const IconAlignLeft = _ref212 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref212;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 9.5H3M21 4.5H3M21 14.5H3M17 19.5H3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAlignLeft = IconAlignLeft;

const IconAlignCenter = _ref213 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref213;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 9.5H5M21 4.5H3M21 14.5H3M19 19.5H5"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAlignCenter = IconAlignCenter;

const IconAlignRight = _ref214 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref214;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAlignRight = IconAlignRight;

const IconAlignJustify = _ref215 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref215;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconAlignJustify = IconAlignJustify;

const IconTable = _ref216 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref216;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 12H3M12 3v18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTable = IconTable;

const IconTable2 = _ref217 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref217;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconTable2 = IconTable2;

const IconList = _ref218 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref218;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3.01",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3.01",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3.01",
    y2: "18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconList = IconList;

const IconSave = _ref219 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref219;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "17 21 17 13 7 13 7 21"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "7 3 7 8 15 8"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconSave = IconSave;

const IconScissors = _ref220 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref220;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "20",
    y1: "4",
    x2: "8.12",
    y2: "15.88"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "14.47",
    y1: "14.48",
    x2: "20",
    y2: "20"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "8.12",
    y1: "8.12",
    x2: "12",
    y2: "12"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconScissors = IconScissors;

const IconCopy = _ref221 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref221;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCopy = IconCopy;

const IconClipboard = _ref222 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref222;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "8",
    y: "2",
    width: "8",
    height: "4",
    rx: "1",
    ry: "1"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconClipboard = IconClipboard;

const IconCode = _ref223 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref223;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "16 18 22 12 16 6"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "8 6 2 12 8 18"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconCode = IconCode;

const IconLink = _ref224 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref224;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconLink = IconLink;

const IconPaperclip = _ref225 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref225;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
  }));
};
/**
 * Destructuring JavaScript Function
 * @params {color} set color icon
 * @params {size} set size icon
 * @params {weight} set weight icon
 * @params {lineCap} set strokeLineCap icon
 * @params {lineJoin} set strokeLineJoin icon
 */


exports.IconPaperclip = IconPaperclip;

const IconDelete = _ref226 => {
  let {
    color,
    size,
    weight,
    lineCap,
    lineJoin
  } = _ref226;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size : SIZE,
    height: size ? size : SIZE,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color ? color : COLOR,
    strokeWidth: weight ? weight : WEIGHT,
    strokeLinecap: lineCap ? lineCap : LINECAP,
    strokeLinejoin: lineJoin ? lineJoin : LINEJOIN
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18",
    y1: "9",
    x2: "12",
    y2: "15"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "18",
    y2: "15"
  }));
};

exports.IconDelete = IconDelete;