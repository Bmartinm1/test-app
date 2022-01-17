"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-event";
exports.ids = ["pages/api/new-event"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "./pages/api/new-event.js":
/*!********************************!*\
  !*** ./pages/api/new-event.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority');\n        const db = client.db();\n        const eventsCollection = db.collection('events');\n        const result = await eventsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: 'Event successfully added!'\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3LWV2ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztlQUV0QkMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUVyQixLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsV0FBVyxFQUFDLENBQUMsR0FBR0wsSUFBSTtRQUVsRCxLQUFLLENBQUNNLE1BQU0sR0FBRyxLQUFLLENBQUNYLHdEQUFtQixDQUFDLENBQStHO1FBQ3hKLEtBQUssQ0FBQ2EsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUU7UUFFcEIsS0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsQ0FBUTtRQUUvQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLGdCQUFnQixDQUFDRyxTQUFTLENBQUNaLElBQUk7UUFDcERhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNO1FBRWxCTCxNQUFNLENBQUNTLEtBQUs7UUFFWmpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUEyQjtRQUFDLENBQUM7SUFDL0QsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZXRCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtYXBwLy4vcGFnZXMvYXBpL25ldy1ldmVudC5qcz9hZGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9iZW5fbV9zcXVhcmVkOlRoZXRyaW5pdHkxQGNsdXN0ZXIwLmZ3djR2Lm1vbmdvZGIubmV0L2V2ZW50c0RhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBldmVudHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignZXZlbnRzJyk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBldmVudHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdFdmVudCBzdWNjZXNzZnVsbHkgYWRkZWQhJyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsImV2ZW50c0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/new-event.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/new-event.js"));
module.exports = __webpack_exports__;

})();