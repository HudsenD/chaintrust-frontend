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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloClient({\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.InMemoryCache(),\n    uri: \"https://api.studio.thegraph.com/query/48135/chaintrust-fantom/v0.0.1\"\n});\n// for goerli: \"https://api.studio.thegraph.com/query/48135/chaintrust/version/latest\"\nconst alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;\nconst projectId = \"95d46654413fc72b5378e5636edee298\";\n//Chains we are going to support\n// \"Connectors\" for these clients\n// WagmiClient\nconst { chains , publicClient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.fantom\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"ChainTrust\",\n    projectId: projectId,\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createConfig)({\n    autoConnect: true,\n    connectors,\n    publicClient\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        config: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloProvider, {\n                client: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDWjtBQVFDO0FBRWtDO0FBQ0M7QUFDWDtBQUNxQjtBQUU3RSxNQUFNVSxTQUFTLElBQUlGLHdEQUFZQSxDQUFDO0lBQzlCRyxPQUFPLElBQUlGLHlEQUFhQTtJQUN4QkcsS0FBSztBQUNQO0FBQ0Esc0ZBQXNGO0FBRXRGLE1BQU1DLGdCQUF3QkMsUUFBUUMsR0FBRyxDQUFDQywyQkFBMkI7QUFDckUsTUFBTUMsWUFBb0JILGtDQUF5QztBQUVuRSxnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLGNBQWM7QUFFZCxNQUFNLEVBQUVLLE9BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUdqQixzREFBZUEsQ0FBQztJQUFDRCxnREFBTUE7Q0FBQyxFQUFFO0lBQUNJLHNFQUFjQTtDQUFHO0FBRTdFLE1BQU0sRUFBRWUsV0FBVSxFQUFFLEdBQUdyQix5RUFBaUJBLENBQUM7SUFDdkNzQixTQUFTO0lBQ1RMLFdBQVdBO0lBQ1hFO0FBQ0Y7QUFFQSxNQUFNSSxjQUFjbkIsbURBQVlBLENBQUM7SUFDL0JvQixhQUFhLElBQUk7SUFDakJIO0lBQ0FEO0FBQ0Y7QUFFZSxTQUFTSyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUN0Qiw4Q0FBV0E7UUFBQ3VCLFFBQVFMO2tCQUNuQiw0RUFBQ3RCLHNFQUFrQkE7WUFBQ2tCLFFBQVFBO3NCQUMxQiw0RUFBQ1osMERBQWNBO2dCQUFDRyxRQUFRQTswQkFDdEIsNEVBQUNnQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xwLWRleC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7XG4gIGRhcmtUaGVtZSxcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXG4gIGNvbm5lY3RvcnNGb3JXYWxsZXRzLFxuICBSYWluYm93S2l0UHJvdmlkZXIsXG4gIG1pZG5pZ2h0VGhlbWUsXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2FsY2hlbXlcIjtcbmltcG9ydCB7IG1haW5uZXQsIG9wdGltaXNtLCBwb2x5Z29uLCBmYW50b20gfSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZywgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9wdWJsaWNcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB1cmk6IFwiaHR0cHM6Ly9hcGkuc3R1ZGlvLnRoZWdyYXBoLmNvbS9xdWVyeS80ODEzNS9jaGFpbnRydXN0LWZhbnRvbS92MC4wLjFcIixcbn0pO1xuLy8gZm9yIGdvZXJsaTogXCJodHRwczovL2FwaS5zdHVkaW8udGhlZ3JhcGguY29tL3F1ZXJ5LzQ4MTM1L2NoYWludHJ1c3QvdmVyc2lvbi9sYXRlc3RcIlxuXG5jb25zdCBhbGNoZW15QXBpS2V5OiBzdHJpbmcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTENIRU1ZX0FQSV9LRVkhO1xuY29uc3QgcHJvamVjdElkOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XQUxMRVRfQ09OTkVDVF9JRCE7XG5cbi8vQ2hhaW5zIHdlIGFyZSBnb2luZyB0byBzdXBwb3J0XG4vLyBcIkNvbm5lY3RvcnNcIiBmb3IgdGhlc2UgY2xpZW50c1xuLy8gV2FnbWlDbGllbnRcblxuY29uc3QgeyBjaGFpbnMsIHB1YmxpY0NsaWVudCB9ID0gY29uZmlndXJlQ2hhaW5zKFtmYW50b21dLCBbcHVibGljUHJvdmlkZXIoKV0pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogXCJDaGFpblRydXN0XCIsXG4gIHByb2plY3RJZDogcHJvamVjdElkLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDb25maWcoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHVibGljQ2xpZW50LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17d2FnbWlDbGllbnR9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30+XG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImZhbnRvbSIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNvbmZpZyIsIldhZ21pQ29uZmlnIiwicHVibGljUHJvdmlkZXIiLCJBcG9sbG9Qcm92aWRlciIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJjYWNoZSIsInVyaSIsImFsY2hlbXlBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9BUElfS0VZIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfV0FMTEVUX0NPTk5FQ1RfSUQiLCJjaGFpbnMiLCJwdWJsaWNDbGllbnQiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();