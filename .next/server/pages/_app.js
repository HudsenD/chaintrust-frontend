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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloClient({\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.InMemoryCache(),\n    uri: \"https://api.studio.thegraph.com/query/48135/chaintrust-fantom/v0.0.1\"\n});\n// for goerli: \"https://api.studio.thegraph.com/query/48135/chaintrust/version/latest\"\nconst alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;\nconst projectId = \"95d46654413fc72b5378e5636edee298\";\n//Chains we are going to support\n// \"Connectors\" for these clients\n// WagmiClient\nconst { chains , publicClient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.fantom\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"ChainTrust\",\n    projectId: projectId,\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createConfig)({\n    autoConnect: true,\n    connectors,\n    publicClient\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        config: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme)({\n                accentColor: \"#071c5f\",\n                accentColorForeground: \"#d0dafb\"\n            }),\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloProvider, {\n                client: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hudsendurst/practice-projects/chaintrust-frontend/pages/_app.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDWjtBQVFDO0FBRWtDO0FBQ0M7QUFDWDtBQUNxQjtBQUU3RSxNQUFNVyxTQUFTLElBQUlGLHdEQUFZQSxDQUFDO0lBQzlCRyxPQUFPLElBQUlGLHlEQUFhQTtJQUN4QkcsS0FBSztBQUNQO0FBQ0Esc0ZBQXNGO0FBRXRGLE1BQU1DLGdCQUF3QkMsUUFBUUMsR0FBRyxDQUFDQywyQkFBMkI7QUFDckUsTUFBTUMsWUFBb0JILGtDQUF5QztBQUVuRSxnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLGNBQWM7QUFFZCxNQUFNLEVBQUVLLE9BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUdqQixzREFBZUEsQ0FBQztJQUFDRCxnREFBTUE7Q0FBQyxFQUFFO0lBQUNJLHNFQUFjQTtDQUFHO0FBRTdFLE1BQU0sRUFBRWUsV0FBVSxFQUFFLEdBQUdyQix5RUFBaUJBLENBQUM7SUFDdkNzQixTQUFTO0lBQ1RMLFdBQVdBO0lBQ1hFO0FBQ0Y7QUFFQSxNQUFNSSxjQUFjbkIsbURBQVlBLENBQUM7SUFDL0JvQixhQUFhLElBQUk7SUFDakJIO0lBQ0FEO0FBQ0Y7QUFFZSxTQUFTSyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUN0Qiw4Q0FBV0E7UUFBQ3VCLFFBQVFMO2tCQUNuQiw0RUFBQ3RCLHNFQUFrQkE7WUFDakI0QixPQUFPOUIsaUVBQVNBLENBQUM7Z0JBQ2YrQixhQUFhO2dCQUNiQyx1QkFBdUI7WUFDekI7WUFDQVosUUFBUUE7c0JBRVIsNEVBQUNaLDBEQUFjQTtnQkFBQ0csUUFBUUE7MEJBQ3RCLDRFQUFDZ0I7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scC1kZXgvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQge1xuICBkYXJrVGhlbWUsXG4gIGdldERlZmF1bHRXYWxsZXRzLFxuICBjb25uZWN0b3JzRm9yV2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBtaWRuaWdodFRoZW1lLFxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9hbGNoZW15XCI7XG5pbXBvcnQgeyBtYWlubmV0LCBvcHRpbWlzbSwgcG9seWdvbiwgZmFudG9tIH0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDb25maWcsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgdXJpOiBcImh0dHBzOi8vYXBpLnN0dWRpby50aGVncmFwaC5jb20vcXVlcnkvNDgxMzUvY2hhaW50cnVzdC1mYW50b20vdjAuMC4xXCIsXG59KTtcbi8vIGZvciBnb2VybGk6IFwiaHR0cHM6Ly9hcGkuc3R1ZGlvLnRoZWdyYXBoLmNvbS9xdWVyeS80ODEzNS9jaGFpbnRydXN0L3ZlcnNpb24vbGF0ZXN0XCJcblxuY29uc3QgYWxjaGVteUFwaUtleTogc3RyaW5nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9BUElfS0VZITtcbmNvbnN0IHByb2plY3RJZDogc3RyaW5nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FMTEVUX0NPTk5FQ1RfSUQhO1xuXG4vL0NoYWlucyB3ZSBhcmUgZ29pbmcgdG8gc3VwcG9ydFxuLy8gXCJDb25uZWN0b3JzXCIgZm9yIHRoZXNlIGNsaWVudHNcbi8vIFdhZ21pQ2xpZW50XG5cbmNvbnN0IHsgY2hhaW5zLCBwdWJsaWNDbGllbnQgfSA9IGNvbmZpZ3VyZUNoYWlucyhbZmFudG9tXSwgW3B1YmxpY1Byb3ZpZGVyKCldKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiQ2hhaW5UcnVzdFwiLFxuICBwcm9qZWN0SWQ6IHByb2plY3RJZCxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ29uZmlnKHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHB1YmxpY0NsaWVudCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXJcbiAgICAgICAgdGhlbWU9e2RhcmtUaGVtZSh7XG4gICAgICAgICAgYWNjZW50Q29sb3I6IFwiIzA3MWM1ZlwiLFxuICAgICAgICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZDBkYWZiXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBjaGFpbnM9e2NoYWluc31cbiAgICAgID5cbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICA8L1dhZ21pQ29uZmlnPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImRhcmtUaGVtZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZmFudG9tIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ29uZmlnIiwiV2FnbWlDb25maWciLCJwdWJsaWNQcm92aWRlciIsIkFwb2xsb1Byb3ZpZGVyIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsImNhY2hlIiwidXJpIiwiYWxjaGVteUFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BTENIRU1ZX0FQSV9LRVkiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19XQUxMRVRfQ09OTkVDVF9JRCIsImNoYWlucyIsInB1YmxpY0NsaWVudCIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyIsInRoZW1lIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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