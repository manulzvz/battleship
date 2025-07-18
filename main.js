/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* === BASE RESET === */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* === BODY & CONTAINER === */\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #1e293b;\n  padding: 0;\n}\n\n.main-container {\n  width: 100%;\n  max-width: 700px;\n  background: #fff;\n  border-radius: 1.25rem;\n  box-shadow: 0 4px 32px rgba(30,41,59,0.08);\n  padding: 1.5rem 2.2rem 2rem 2.2rem;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n\n/* === HEADER === */\nheader h1 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #1e293b;\n  text-align: center;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.ship-icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.6rem;\n}\n\n/* === BOARDS SECTION === */\n.boards-section {\n  display: flex;\n  gap: 1.2rem;\n  justify-content: center;\n}\n\n.board-card {\n  background: #f8fafc;\n  border-radius: 1rem;\n  /* box-shadow: 0 2px 12px rgba(30,41,59,0.07); */ /* Sombra eliminada */\n  padding: 1.2rem 0.7rem 1.4rem 0.7rem;\n  min-width: 0;\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board-card h2 {\n  color: #1e293b;\n  margin-bottom: 0.6rem;\n  font-size: 1em;\n  font-weight: 600;\n}\n\n/* === BOARD GRID - Minimalista con solo líneas horizontales y verticales === */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 23px);\n  grid-template-rows: repeat(10, 23px);\n  background: transparent;\n  border-radius: 0.5rem;\n  border: none;\n  /* box-shadow: none; */ /* Sombra eliminada */\n  position: relative;\n  padding: 6px;\n}\n\n.cell {\n  width: 23px;\n  height: 23px;\n  background: #f8fafc;\n  border-right: 1px solid #d1d5db;\n  border-bottom: 1px solid #d1d5db;\n  border-radius: 0;\n  cursor: pointer;\n  transition: background 0.16s, border-color 0.16s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: #1e293b;\n  box-shadow: none;\n}\n\n/* Quitar el borde derecho en la última columna y el borde inferior en la última fila */\n.cell:last-child,\n.board .cell:nth-child(10n) {\n  border-right: none;\n}\n.board .cell:nth-last-child(-n+10) {\n  border-bottom: none;\n}\n\n/* Estados especiales */\n.cell.ship {\n  background: #334155;\n  color: #fff;\n  border-color: #334155;\n}\n\n.cell.hit {\n  background: #ff7e7e;\n  color: #fff;\n  border-color: #ff7e7e;\n}\n\n.cell.miss {\n  background: #94a3b8;\n  opacity: 0.7;\n  border-color: #94a3b8;\n}\n\n.cell:hover {\n  background: #cbd5e1;\n  outline: none;\n  border-color: #64748b;\n}\n\n/* === INFO PANEL === */\n.info-panel {\n  margin: 10px 0 6px 0;\n  padding: 6px;\n  background: #f8fafc;\n  border-radius: 0.75rem;\n  color: #1e293b;\n  font-weight: 500;\n  text-align: center;\n  min-height: 18px;\n  /* box-shadow: 0 1px 4px rgba(30,41,59,0.07); */ /* Sombra eliminada */\n  font-size: 0.95em;\n}\n\n/* === RESTART BUTTON === */\n#restart-btn {\n  background: #1e293b;\n  color: #fff;\n  border: none;\n  border-radius: 0.75rem;\n  padding: 8px 22px;\n  font-size: 1em;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(30,41,59,0.12);\n  transition: background 0.2s;\n  font-family: inherit;\n  margin: 0 auto;\n  display: block;\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n}\n#restart-btn:hover {\n  background: #334155;\n}\n.restart-icon {\n  vertical-align: middle;\n  margin-right: 0.5em;\n  display: inline-block;\n}\n\n/* === RESPONSIVE === */\n@media (max-width: 600px) {\n  .main-container {\n    max-width: 98vw;\n    padding: 0.7rem 0.5rem 1.2rem 0.5rem;\n  }\n  .boards-section {\n    flex-direction: column;\n    gap: 0.7rem;\n    align-items: center;\n  }\n  .board {\n    grid-template-columns: repeat(10, 28px);\n    grid-template-rows: repeat(10, 28px);\n    padding: 2px;\n  }\n  .cell {\n    width: 28px;\n    height: 28px;\n    font-size: 13px;\n  }\n  .board-card {\n    min-width: 0;\n    width: 100%;\n    padding: 0.9rem 0.4rem 1rem 0.4rem;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/game/computer.js":
/*!******************************!*\
  !*** ./src/game/computer.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/game/player.js\");\n\n\nclass Computer extends _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super(\"Computer\");\n  }\n\n  computerAttack(enemyBoard) {\n    let x, y, alreadyAttacked;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n      alreadyAttacked = enemyBoard.attacks.some(a => a.x === x && a.y === y);\n    } while (alreadyAttacked);\n    enemyBoard.attack(x, y);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Computer);\n\n\n//# sourceURL=webpack://battleship/./src/game/computer.js?\n}");

/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n  constructor() {\n    this.array = Array.from({ length: 10 }, () => Array(10).fill(0));\n    this.ships = [];\n    this.attacks = [];\n  }\n\n  placeShip(x, y, ship, orientation) {\n    if (x < 0 || x > 9 || y < 0 || y > 9) {\n      return false;\n    }\n\n    if (orientation == \"horizontal\") {\n      if (x + ship.length > 9) {\n        return false;\n      }\n      //validacion\n      for (let k = 0; k < ship.length; k++) {\n        if (this.array[y][x + k] !== 0) return false;\n      }\n      //colocacion\n      for (let k = 0; k < ship.length; k++) {\n        this.array[y][x + k] = ship;\n      }\n      this.ships.push(ship);\n      return true;\n    } else if (orientation == \"vertical\") {\n      if (y + ship.length > 9) {\n        return false;\n      }\n      //validacion\n      for (let k = 0; k < ship.length; k++) {\n        if (this.array[y + k][x] !== 0) return false;\n      }\n      //colocacion\n      for (let k = 0; k < ship.length; k++) {\n        this.array[y + k][x] = ship;\n      }\n      this.ships.push(ship);\n      return true;\n    }\n  }\n\n  hasShipAt(x, y) {\n    if (this.array[y][x] !== 0) return true;\n    return false;\n  }\n\n  attack(x, y) {\n    //verificacion de ataque previo en casilla\n    for (let i = 0; i < this.attacks.length; i++) {\n      if (this.attacks[i].x === x && this.attacks[i].y === y) return;\n    }\n\n    if (this.hasShipAt(x, y)) {\n      const ship = this.array[y][x];\n      ship.hit();\n      this.attacks.push({ x, y, result: \"hit\" });\n    } else {\n      this.attacks.push({ x, y, result: \"miss\" });\n    }\n  }\n\n  allSunk() {\n    return this.ships.every((ship) => ship.isSunk());\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/game/gameboard.js?\n}");

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/game/gameboard.js\");\n\n\nclass Player {\n    constructor(name) {\n        this.name = name;\n        this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    playerAttack(x,y, enemyBoard) {\n        enemyBoard.attack(x,y);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/game/player.js?\n}");

/***/ }),

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.damage = 0;\n  }\n\n  hit() {\n    this.damage += 1;\n  }\n\n  isSunk() {\n    if (this.damage < this.length) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/game/ship.js?\n}");

/***/ }),

/***/ "./src/game/shipPlacement.js":
/*!***********************************!*\
  !*** ./src/game/shipPlacement.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeAllShipsRandomly: () => (/* binding */ placeAllShipsRandomly)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/game/ship.js\");\n\n\n// Array de tamaños de barcos: 1x5, 2x4, 3x3, 4x2\nconst SHIP_SIZES = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];\n\nfunction getRandomOrientation() {\n  return Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n}\n\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\n\n// Verifica si un barco cabe en la posición y orientación dadas\nfunction canPlaceShip(board, x, y, length, orientation) {\n  if (orientation === \"horizontal\") {\n    if (x + length > 10) return false;\n    for (let k = 0; k < length; k++) {\n      if (board.array[y][x + k] !== 0) return false;\n    }\n  } else {\n    if (y + length > 10) return false;\n    for (let k = 0; k < length; k++) {\n      if (board.array[y + k][x] !== 0) return false;\n    }\n  }\n  return true;\n}\n\n// Coloca todos los barcos aleatoriamente en el tablero\nfunction placeAllShipsRandomly(board) {\n  for (let size of SHIP_SIZES) {\n    let placed = false;\n    while (!placed) {\n      const orientation = getRandomOrientation();\n      const x = getRandomInt(10);\n      const y = getRandomInt(10);\n      if (canPlaceShip(board, x, y, size, orientation)) {\n        board.placeShip(x, y, new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size), orientation);\n        placed = true;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/game/shipPlacement.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/player.js */ \"./src/game/player.js\");\n/* harmony import */ var _game_computer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/computer.js */ \"./src/game/computer.js\");\n/* harmony import */ var _game_ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/ship.js */ \"./src/game/ship.js\");\n/* harmony import */ var _ui_drawBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/drawBoard.js */ \"./src/ui/drawBoard.js\");\n/* harmony import */ var _game_shipPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/shipPlacement.js */ \"./src/game/shipPlacement.js\");\n/* harmony import */ var _ui_gameUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/gameUI.js */ \"./src/ui/gameUI.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n// Variables globales para los jugadores\nlet player, computer;\n\n// Inicialización y reinicio del juego\nfunction setupGame() {\n  player = new _game_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Manuel\");\n  computer = new _game_computer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n  // Coloca los 10 barcos en los tableros \n  (0,_game_shipPlacement_js__WEBPACK_IMPORTED_MODULE_4__.placeAllShipsRandomly)(player.gameboard);\n  (0,_game_shipPlacement_js__WEBPACK_IMPORTED_MODULE_4__.placeAllShipsRandomly)(computer.gameboard);\n\n  // Renderiza los tableros\n  (0,_ui_drawBoard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player.gameboard, \"player-board\", true);\n  (0,_ui_drawBoard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(computer.gameboard, \"computer-board\", false);\n\n  // Mensaje inicial\n  (0,_ui_gameUI_js__WEBPACK_IMPORTED_MODULE_5__.updateMessages)(\"Tu turno. Haz click en el tablero enemigo.\");\n\n  // Habilita la interacción\n  (0,_ui_gameUI_js__WEBPACK_IMPORTED_MODULE_5__.addEnemyBoardListeners)(\n    player,\n    computer,\n    _ui_drawBoard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    _ui_gameUI_js__WEBPACK_IMPORTED_MODULE_5__.updateMessages,\n    setupGame\n  );\n}\n\n// Listener del botón de reinicio\ndocument.getElementById(\"restart-btn\").addEventListener(\"click\", () => {\n  setupGame();\n});\n\n// Llama a setupGame al cargar la página\nsetupGame();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?\n}");

/***/ }),

/***/ "./src/ui/drawBoard.js":
/*!*****************************!*\
  !*** ./src/ui/drawBoard.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderBoard(board, containerId, isPlayer = false) {\n    const container = document.getElementById(containerId);\n    container.innerHTML = \"\"; // Limpia el tablero anterior\n\n    for (let y = 0; y < 10; y++) {\n        for (let x = 0; x < 10; x++) {\n            const cell = document.createElement(\"div\");\n            cell.classList.add(\"cell\");\n            cell.dataset.x = x;\n            cell.dataset.y = y;  // Si es el tablero del jugador y hay un barco, muéstralo\n            if (isPlayer && board.array[y][x] !== 0) {\n                cell.classList.add(\"ship\");\n            }\n\n            // Si la celda fue atacada, muestra el resultado\n            const attack = board.attacks.find(a => a.x === x && a.y === y);\n            if (attack) {\n                if (attack.result === \"hit\") {\n                    cell.classList.add(\"hit\");\n                } else if (attack.result === \"miss\") {\n                    cell.classList.add(\"miss\");\n                }\n            }\n            container.appendChild(cell);\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);\n\n//# sourceURL=webpack://battleship/./src/ui/drawBoard.js?\n}");

/***/ }),

/***/ "./src/ui/gameUI.js":
/*!**************************!*\
  !*** ./src/ui/gameUI.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEnemyBoardListeners: () => (/* binding */ addEnemyBoardListeners),\n/* harmony export */   updateMessages: () => (/* binding */ updateMessages)\n/* harmony export */ });\nfunction addEnemyBoardListeners(player, computer, renderBoard, updateMessages) {\n  const enemyBoard = document.getElementById(\"computer-board\");\n  const cells = enemyBoard.querySelectorAll(\".cell\");\n\n  // Limpia todos los listeners previos reemplazando las celdas por clones\n  cells.forEach(cell => {\n    const newCell = cell.cloneNode(true);\n    cell.parentNode.replaceChild(newCell, cell);\n  });\n\n  // Selecciona las celdas frescas después de limpiar\n  const freshCells = enemyBoard.querySelectorAll(\".cell\");\n\n  freshCells.forEach(cell => {\n    cell.addEventListener(\"click\", function handleClick() {\n      const x = Number(cell.dataset.x);\n      const y = Number(cell.dataset.y);\n\n      // Evita atacar la misma celda dos veces\n      if (computer.gameboard.attacks.some(a => a.x === x && a.y === y)) return;\n\n      // Turno del jugador\n      player.playerAttack(x, y, computer.gameboard);\n      renderBoard(computer.gameboard, \"computer-board\", false);\n      renderBoard(player.gameboard, \"player-board\", true);\n\n      // Mensaje de acierto/fallo\n      const lastAttack = computer.gameboard.attacks.at(-1);\n      if (lastAttack && lastAttack.x === x && lastAttack.y === y) {\n        updateMessages(lastAttack.result === \"hit\" ? \"¡Acierto!\" : \"¡Fallaste!\");\n      }\n\n      // ¿Ganó el jugador?\n      if (computer.gameboard.allSunk()) {\n        updateMessages(\"¡Ganaste!\");\n        // No vuelvas a agregar listeners\n        return;\n      }\n\n      // Turno de la computadora\n      updateMessages(\"Turno de la computadora...\");\n\n      // Desactiva clicks temporalmente (no con pointer-events, sino porque no hay listeners)\n      // Espera el turno de la computadora\n      setTimeout(() => {\n        computer.computerAttack(player.gameboard);\n        renderBoard(player.gameboard, \"player-board\", true);\n\n        if (player.gameboard.allSunk()) {\n          updateMessages(\"La computadora ganó.\");\n          // No vuelvas a agregar listeners\n        } else {\n          updateMessages(\"Tu turno. Haz click en el tablero enemigo.\");\n          // Vuelve a agregar los listeners para el siguiente turno\n          addEnemyBoardListeners(player, computer, renderBoard, updateMessages);\n        }\n      }, 600);\n\n      // Elimina el listener de esta celda para evitar doble click en el mismo turno\n      cell.removeEventListener(\"click\", handleClick);\n    });\n  });\n}\n\nfunction updateMessages(msg) {\n  document.getElementById(\"game-messages\").textContent = msg;\n}\n\n\n//# sourceURL=webpack://battleship/./src/ui/gameUI.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;