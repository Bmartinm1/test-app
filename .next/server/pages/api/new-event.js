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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const data = req.body;\n        const { title , image , address , description , id  } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority');\n        const db = client.db();\n        const eventsCollection = db.collection('events');\n        const result = await eventsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: 'Event successfully added!'\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3LWV2ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztlQUV0QkMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUVyQixLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsV0FBVyxHQUFFQyxFQUFFLEVBQUMsQ0FBQyxHQUFHTixJQUFJO1FBRXRELEtBQUssQ0FBQ08sTUFBTSxHQUFHLEtBQUssQ0FBQ1osd0RBQW1CLENBQUMsQ0FBK0c7UUFDeEosS0FBSyxDQUFDYyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRTtRQUVwQixLQUFLLENBQUNDLGdCQUFnQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFRO1FBRS9DLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0YsZ0JBQWdCLENBQUNHLFNBQVMsQ0FBQ2IsSUFBSTtRQUNwRGMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU07UUFFbEJMLE1BQU0sQ0FBQ1MsS0FBSztRQUVabEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQTJCO1FBQUMsQ0FBQztJQUMvRCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFldkIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9wYWdlcy9hcGkvbmV3LWV2ZW50LmpzP2FkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3Qge3RpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24sIGlkIH0gPSBkYXRhO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9iZW5fbV9zcXVhcmVkOlRoZXRyaW5pdHkxQGNsdXN0ZXIwLmZ3djR2Lm1vbmdvZGIubmV0L2V2ZW50c0RhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBldmVudHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignZXZlbnRzJyk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBldmVudHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdFdmVudCBzdWNjZXNzZnVsbHkgYWRkZWQhJyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImlkIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwiZXZlbnRzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-event.js\n");

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