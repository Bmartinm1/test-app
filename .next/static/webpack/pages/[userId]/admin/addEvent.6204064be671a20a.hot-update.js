"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[userId]/admin/addEvent",{

/***/ "./pages/[userId]/admin/addEvent.js":
/*!******************************************!*\
  !*** ./pages/[userId]/admin/addEvent.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_benmartinmooney_Freelancing_Test_test_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_benmartinmooney_Freelancing_Test_test_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_benmartinmooney_Freelancing_Test_test_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_events_NewEventForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/events/NewEventForm */ \"./components/events/NewEventForm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar addEventPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function addEventHandler(enteredEventData) {\n        return _addEventHandler.apply(this, arguments);\n    }\n    function _addEventHandler() {\n        _addEventHandler = _asyncToGenerator(_Users_benmartinmooney_Freelancing_Test_test_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(enteredEventData) {\n            var response, data;\n            return _Users_benmartinmooney_Freelancing_Test_test_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch('/api/new-event', {\n                            method: 'POST',\n                            body: JSON.stringify(enteredEventData),\n                            headers: {\n                                'Content-Type': 'application/json'\n                            }\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        console.log(data);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _addEventHandler.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_events_NewEventForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onAddEvent: addEventHandler\n    }, void 0, false, {\n        fileName: \"/Users/benmartinmooney/Freelancing/Test/test-app/pages/[userId]/admin/addEvent.js\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, _this));\n};\n_s(addEventPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (addEventPage);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS9hZG1pbi9hZGRFdmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsR0FBSyxDQUFDRSxZQUFZLEdBQUcsUUFDckIsR0FEMkIsQ0FBQzs7SUFDMUIsR0FBSyxDQUFDQyxNQUFNLEdBQUdILHNEQUFTO2FBRVRJLGVBQWUsQ0FBQ0MsZ0JBQWdCO2VBQWhDRCxnQkFBZTs7YUFBZkEsZ0JBQWU7UUFBZkEsZ0JBQWUsaUxBQTlCLFFBQVEsU0FBdUJDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzFDQyxRQUFRLEVBUVJDLElBQUk7Ozs7OytCQVJhQyxLQUFLLENBQUMsQ0FBZ0IsaUJBQUUsQ0FBQzs0QkFDOUNDLE1BQU0sRUFBRSxDQUFNOzRCQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxnQkFBZ0I7NEJBQ3JDUSxPQUFPLEVBQUUsQ0FBQztnQ0FDUixDQUFjLGVBQUUsQ0FBa0I7NEJBQ3BDLENBQUM7d0JBQ0gsQ0FBQzs7d0JBTktQLFFBQVE7OytCQVFLQSxRQUFRLENBQUNRLElBQUk7O3dCQUExQlAsSUFBSTt3QkFDVlEsT0FBTyxDQUFDQyxHQUFHLENBQUNULElBQUk7Ozs7OztRQUNsQixDQUFDO2VBWGNILGdCQUFlOztJQWE5QixNQUFNLDZFQUFFSCx1RUFBWTtRQUFDZ0IsVUFBVSxFQUFFYixlQUFlOzs7Ozs7QUFDbEQsQ0FBQztHQWpCS0YsWUFBWTs7UUFDREYsa0RBQVM7OztBQWtCMUIsK0RBQWVFLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcklkXS9hZG1pbi9hZGRFdmVudC5qcz84ZDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IE5ld0V2ZW50Rm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2V2ZW50cy9OZXdFdmVudEZvcm0nXG5cbmNvbnN0IGFkZEV2ZW50UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkRXZlbnRIYW5kbGVyKGVudGVyZWRFdmVudERhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1ldmVudCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZEV2ZW50RGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIHJldHVybiA8TmV3RXZlbnRGb3JtIG9uQWRkRXZlbnQ9e2FkZEV2ZW50SGFuZGxlcn0gLz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEV2ZW50UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJOZXdFdmVudEZvcm0iLCJhZGRFdmVudFBhZ2UiLCJyb3V0ZXIiLCJhZGRFdmVudEhhbmRsZXIiLCJlbnRlcmVkRXZlbnREYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9uQWRkRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[userId]/admin/addEvent.js\n");

/***/ })

});