(function() {
var exports = {};
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var heroicons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! heroicons-react */ "heroicons-react");
/* harmony import */ var heroicons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(heroicons_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Umer\\Desktop\\Dark-Web-main\\Components\\Header.js";




function Header() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "sticky top-0 bg-black",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex w-full p-6 items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        onClick: () => router.push("/"),
        className: "text-white  cursor-pointer text-xl font-extrabold xl:text-4xl md:text-3xl ",
        children: ["DARK", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-red-600",
          children: "WEB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "flex flex-grow py-3 px-6 ml-10 mr-5 border  border-gray-600 rounded-full max",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(heroicons_react__WEBPACK_IMPORTED_MODULE_3__.Search, {
          className: "h-5 mr-3 text-red-600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 10
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: searchInputRef,
          type: "text",
          className: "flex grow bg-transparent  text-white 2-full focus:outline-none w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(heroicons_react__WEBPACK_IMPORTED_MODULE_3__.XCircleOutline, {
          onClick: () => searchInputRef.current.value = "",
          className: "h-6 mr-3 text-red-600 cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          hidden: true,
          onClick: search,
          type: "submit",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Components/PaginationButton.js":
/*!****************************************!*\
  !*** ./Components/PaginationButton.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var heroicons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! heroicons-react */ "heroicons-react");
/* harmony import */ var heroicons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(heroicons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Umer\\Desktop\\Dark-Web-main\\Components\\PaginationButton.js";




function PaginationButton() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const startIndex = Number(router.query.start) || 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-between max-w-lg text-red-800 mb-10",
    children: [startIndex >= 10 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/search?term=${router.query.term}
                &start=${startIndex - 10}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-grow flex-col cursor-pointer items-center  hover:underline",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(heroicons_react__WEBPACK_IMPORTED_MODULE_1__.ChevronLeft, {
          className: "text-red-700"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: " text-red-700",
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/search?term=${router.query.term}
            &start=${startIndex + 10}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-grow flex-col cursor-pointer items-center  hover:underline",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(heroicons_react__WEBPACK_IMPORTED_MODULE_1__.ChevronRight, {
          className: "text-red-700"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-red-700",
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PaginationButton);

/***/ }),

/***/ "./Components/SearchResults.js":
/*!*************************************!*\
  !*** ./Components/SearchResults.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaginationButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationButton */ "./Components/PaginationButton.js");

var _jsxFileName = "C:\\Users\\Umer\\Desktop\\Dark-Web-main\\Components\\SearchResults.js";


function SearchResults({
  results
}) {
  var _results$searchInform, _results$searchInform2, _results$items;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mx-auto w-full pl-3 pr-3 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-gray-400 tracking-wide text-md mb-5 mt-3",
      children: ["About ", (_results$searchInform = results.searchInformation) === null || _results$searchInform === void 0 ? void 0 : _results$searchInform.formattedTotalResults, " results (", (_results$searchInform2 = results.searchInformation) === null || _results$searchInform2 === void 0 ? void 0 : _results$searchInform2.formattedSearchTime, " seconds)  "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), (_results$items = results.items) === null || _results$items === void 0 ? void 0 : _results$items.map(result => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-xl mb-8 text-white",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: result.link,
          className: "text-sml text-gray-500",
          children: result.formattedUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 23
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: result.link,
          className: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "truncate text-xl text-red-600 font-medium group-hover:underline",
            children: result.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 27
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 23
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 22
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "line-clamp-2",
        children: result.snippet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 22
      }, this)]
    }, result.link, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationButton__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./Response.js":
/*!*********************!*\
  !*** ./Response.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [{
      "title": "Google Custom Search - apple",
      "totalResults": "207000000",
      "searchTerms": "apple",
      "count": 10,
      "startIndex": 1,
      "inputEncoding": "utf8",
      "outputEncoding": "utf8",
      "safe": "off",
      "cx": "c43dbf42a89d4263a"
    }],
    "nextPage": [{
      "title": "Google Custom Search - apple",
      "totalResults": "207000000",
      "searchTerms": "apple",
      "count": 10,
      "startIndex": 11,
      "inputEncoding": "utf8",
      "outputEncoding": "utf8",
      "safe": "off",
      "cx": "c43dbf42a89d4263a"
    }]
  },
  "context": {
    "title": "Google"
  },
  "searchInformation": {
    "searchTime": 0.507256,
    "formattedSearchTime": "0.51",
    "totalResults": "207000000",
    "formattedTotalResults": "207,000,000"
  },
  "items": [{
    "kind": "customsearch#result",
    "title": "Apple Inc (AAPL : NASDAQ) Stock Price & News - Google Finance",
    "htmlTitle": "<b>Apple</b> Inc (AAPL : NASDAQ) Stock Price &amp; News - Google Finance",
    "link": "https://www.google.com/finance/quote/AAPL:NASDAQ",
    "displayLink": "www.google.com",
    "snippet": "Get the latest Apple Inc (AAPL) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and ...",
    "htmlSnippet": "Get the latest <b>Apple</b> Inc (AAPL) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and&nbsp;...",
    "cacheId": "9Lb16SCLSOUJ",
    "formattedUrl": "https://www.google.com/finance/quote/AAPL:NASDAQ",
    "htmlFormattedUrl": "https://www.google.com/finance/quote/AAPL:NASDAQ",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8",
        "width": "311",
        "height": "162"
      }],
      "metatags": [{
        "application-name": "Google Finance",
        "og:image": "https://ssl.gstatic.com/finance/favicon/finance_770x402.png",
        "theme-color": "#ffffff",
        "og:type": "website",
        "og:image:width": "770",
        "twitter:card": "summary",
        "twitter:title": "Apple Inc (AAPL : NASDAQ) Stock Price & News - Google Finance",
        "apple-mobile-web-app-title": "Google Finance",
        "og:title": "Apple Inc (AAPL : NASDAQ) Stock Price & News - Google Finance",
        "og:image:height": "402",
        "og:description": "Get the latest Apple Inc (AAPL) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
        "twitter:image": "https://ssl.gstatic.com/finance/favicon/finance_496x496.png",
        "referrer": "origin",
        "apple-mobile-web-app-status-bar-style": "default",
        "msapplication-tap-highlight": "no",
        "twitter:site": "@google",
        "viewport": "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
        "apple-mobile-web-app-capable": "yes",
        "twitter:description": "Get the latest Apple Inc (AAPL) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
        "mobile-web-app-capable": "yes",
        "og:url": "https://www.google.com/finance/quote/AAPL:NASDAQ"
      }],
      "cse_image": [{
        "src": "https://ssl.gstatic.com/finance/favicon/finance_770x402.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Apple unveils Apple Watch Series 5 - Apple",
    "htmlTitle": "<b>Apple</b> unveils <b>Apple</b> Watch Series 5 - <b>Apple</b>",
    "link": "https://www.google.com/appserve/mkt/p/AFnwnKU1qDt3bZFC_a67YIIq1qOcMwPD0YnJKP9Ks8u0eF50AnF3V0VEU0fqmsVIyw62oEeHHUWhhFb7qAR2psEaz5-vRax9GzfFet2JHs7JALEdlWJ-G5B7GhfLwyR-mkHPtCcku9mOhrp_A8yqiOsRSBUBMIdORnRymMWc",
    "displayLink": "www.google.com",
    "snippet": "Sep 10, 2019 ... Apple today announced Apple Watch Series 5, debuting an Always-On Retina display that never sleeps.",
    "htmlSnippet": "Sep 10, 2019 <b>...</b> <b>Apple</b> today announced <b>Apple</b> Watch Series 5, debuting an Always-On Retina display that never sleeps.",
    "cacheId": "Op0ixfjvLSQJ",
    "formattedUrl": "https://www.google.com/.../AFnwnKU1qDt3bZFC_ a67YIIq1qOcMwPD0YnJKP9Ks8u0eF50AnF3V0VEU0fqmsVIyw62oEeH...",
    "htmlFormattedUrl": "https://www.google.com/.../AFnwnKU1qDt3bZFC_ a67YIIq1qOcMwPD0YnJKP9Ks8u0eF50AnF3V0VEU0fqmsVIyw62oEeH...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKI4Q0A0ke5dhMMTTWAE_t7RMvQWcsvVUMq3yhIVYdI3ivARNVaoOF2eA4",
        "width": "310",
        "height": "163"
      }],
      "BreadcrumbList": [{}],
      "metatags": [{
        "analytics-s-bucket-1": "appleglobal,applestoreww",
        "analytics-s-bucket-0": "appleglobal,applestoreww",
        "og:image": "https://www.apple.com/newsroom/images/tile-images/Apple_watch_series_5_introduces-always-on-retina-display_091019.jpg.og.jpg?202107170027",
        "og:type": "article",
        "twitter:title": "Apple unveils Apple Watch Series 5",
        "twitter:card": "summary_large_image",
        "og:site_name": "Apple Newsroom",
        "og:title": "Apple unveils Apple Watch Series 5",
        "ac-gn-store-key": "SX29D2YPJFKFAFC2P",
        "og:description": "Apple today announced Apple Watch Series 5, debuting an Always-On Retina display that never sleeps.",
        "twitter:image": "https://www.apple.com/newsroom/images/tile-images/Apple_watch_series_5_introduces-always-on-retina-display_091019.jpg.og.jpg?202107170027",
        "analytics-s-channel": "newsroom",
        "twitter:site": "@Apple",
        "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
        "twitter:description": "Apple today announced Apple Watch Series 5, debuting an Always-On Retina display that never sleeps.",
        "og:locale": "en_US",
        "position": "1",
        "og:url": "https://www.apple.com/newsroom/2019/09/apple-unveils-apple-watch-series-5/",
        "analytics-s-bucket-2": "appleglobal,applestoreww",
        "analytics-track": "Newsroom - Apple unveils Apple Watch Series 5"
      }],
      "cse_image": [{
        "src": "https://www.apple.com/newsroom/images/tile-images/Apple_watch_series_5_introduces-always-on-retina-display_091019.jpg.og.jpg?202107170027"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Exposure Notifications: Helping fight COVID-19 - Google",
    "htmlTitle": "Exposure Notifications: Helping fight COVID-19 - Google",
    "link": "https://www.google.com/covid19/exposurenotifications/",
    "displayLink": "www.google.com",
    "snippet": "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you've likely been exposed to COVID-19.",
    "htmlSnippet": "Learn how Exposure Notifications, built by Google and <b>Apple</b>, enable apps to send you a notification if you&#39;ve likely been exposed to COVID-19.",
    "cacheId": "qtK_I3x8mI4J",
    "formattedUrl": "https://www.google.com/covid19/exposurenotifications/",
    "htmlFormattedUrl": "https://www.google.com/covid19/exposurenotifications/",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiwk52X8M4D7_y6Ep34qS_cb3XzaYv0NRD9jNw4Y1hPBwXlkqhv8pO4DAM",
        "width": "300",
        "height": "168"
      }],
      "metatags": [{
        "referrer": "no-referrer",
        "og:image": "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200",
        "twitter:card": "summary_large_image",
        "twitter:image:alt": "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you’ve likely been exposed to COVID-19.",
        "og:site_name": "Exposure Notifications: Helping fight COVID-19 - Google",
        "viewport": "initial-scale=1, minimum-scale=1, width=device-width",
        "og:title": "Exposure Notifications: Helping fight COVID-19 - Google",
        "og:url": "https://www.google.com/intl/en_us/covid19/exposurenotifications/",
        "og:description": "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you’ve likely been exposed to COVID-19.",
        "twitter:image": "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200"
      }],
      "cse_image": [{
        "src": "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "‎Gmail - Email by Google on the App Store",
    "htmlTitle": "‎Gmail - Email by Google on the App Store",
    "link": "https://www.google.com/inbox/ios",
    "displayLink": "www.google.com",
    "snippet": "More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800- MY-APPLE. Choose your country or region. Copyright © 2021 Apple Inc. All ...",
    "htmlSnippet": "More ways to shop: Find an <b>Apple</b> Store or other retailer near you. Or call 1-800- MY-<b>APPLE</b>. Choose your country or region. Copyright © 2021 <b>Apple</b> Inc. All&nbsp;...",
    "cacheId": "WXHbpTK2LacJ",
    "formattedUrl": "https://www.google.com/inbox/ios",
    "htmlFormattedUrl": "https://www.google.com/inbox/ios",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfwtcAwNzIKgeMKec6MFU8G35IXM8Vu7jivKUFHTVG_ilsQXQzsAEZM2Dy",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "og:image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/ee/f5/04/eef50448-49cd-474b-8425-1efb8fcafc6d/contsched.ttdjlrkd.png/1200x630wa.png",
        "apple-itunes-app": "app-id=375380948, app-argument=https://apps.apple.com/us/app/gmail-email-by-google/id422689480",
        "og:image:width": "1200",
        "twitter:card": "summary_large_image",
        "og:site_name": "App Store",
        "applicable-device": "pc,mobile",
        "og:image:type": "image/png",
        "og:description": "‎The official Gmail app brings the best of Gmail to your iPhone or iPad with real-time notifications, multiple account support, and search that works across all your mail.\n\nWith the Gmail app, you can:\n• Undo Send, to prevent embarrassing mistakes\n• Switch between multiple accounts\n• Get notified of…",
        "og:image:secure_url": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/ee/f5/04/eef50448-49cd-474b-8425-1efb8fcafc6d/contsched.ttdjlrkd.png/1200x630wa.png",
        "twitter:image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/ee/f5/04/eef50448-49cd-474b-8425-1efb8fcafc6d/contsched.ttdjlrkd.png/600x600wa.png",
        "web-experience-app/config/environment": "%7B%22appVersion%22%3A1%2C%22modulePrefix%22%3A%22web-experience-app%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%2F%22%2C%22locationType%22%3A%22history-hash-router-scroll%22%2C%22historySupportMiddleware%22%3Atrue%2C%22contentSecurityPolicyMeta%22%3Atrue%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%5B%22'none'%22%5D%2C%22img-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%2C%22*.apple.com%22%2C%22*.googleusercontent.com%22%2C%22data%3A%22%5D%2C%22style-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22*.apple.com%22%5D%2C%22font-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.apple.com%22%2C%22https%3A%2F%2F*.apple.com%22%5D%2C%22media-src%22%3A%5B%22'self'%22%2C%22blob%3A%22%2C%22http%3A%2F%2F*%22%2C%22https%3A%2F%2F*%22%5D%2C%22connect-src%22%3A%5B%22'self'%22%2C%22*.apple.com%22%2C%22https%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%5D%2C%22script-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22'unsafe-eval'%22%2C%22*.apple.com",
        "twitter:image:alt": "Gmail - Email by Google on the App Store",
        "twitter:site": "@AppStore",
        "og:image:alt": "Gmail - Email by Google on the App Store",
        "og:type": "website",
        "twitter:title": "‎Gmail - Email by Google",
        "og:title": "‎Gmail - Email by Google",
        "og:image:height": "630",
        "version": "2130.14.0",
        "fb:app_id": "116556461780510",
        "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
        "ac-gn-search-suggestions-enabled": "false",
        "twitter:description": "‎The official Gmail app brings the best of Gmail to your iPhone or iPad with real-time notifications, multiple account support, and search that works across all your mail.\n\nWith the Gmail app, you can:\n• Undo Send, to prevent embarrassing mistakes\n• Switch between multiple accounts\n• Get notified of…",
        "og:locale": "en_US",
        "og:url": "https://apps.apple.com/us/app/gmail-email-by-google/id422689480",
        "apple:content_id": "422689480"
      }],
      "cse_image": [{
        "src": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/ee/f5/04/eef50448-49cd-474b-8425-1efb8fcafc6d/contsched.ttdjlrkd.png/1200x630wa.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "‎Google My Business on the App Store",
    "htmlTitle": "‎Google My Business on the App Store",
    "link": "https://www.google.com/appserve/mkt/p/ALvTkbYonw2Ez0v23NN55uqlr-gK3WcuknM927W5_yP2BfCd4dLzr2QglXd5Xhed1x96X8GgXpu63YhZYSBCQnTcNGFl-RtCT02SOK0lU755affGIqib1y9E-ZWSjPqVtwosJw2ze5Tqs_qx4DSJFbCnSyxi0jhlxVHhis8beaNs8fwVa_d55waJWjuUlBeqr1k0u3qRvlJtL9mxicn-ZJZ88QPfZA2xgY7gxACj-_Scv4qCa2qizmVGLItYRWtjTxZqFEL9obM",
    "displayLink": "www.google.com",
    "snippet": "More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800- MY-APPLE. Choose your country or region. Copyright © 2021 Apple Inc. All ...",
    "htmlSnippet": "More ways to shop: Find an <b>Apple</b> Store or other retailer near you. Or call 1-800- MY-<b>APPLE</b>. Choose your country or region. Copyright © 2021 <b>Apple</b> Inc. All&nbsp;...",
    "cacheId": "BkhyGg9f-u8J",
    "formattedUrl": "https://www.google.com/.../ALvTkbYonw2Ez0v23NN55uqlr- gK3WcuknM927W5_ ...",
    "htmlFormattedUrl": "https://www.google.com/.../ALvTkbYonw2Ez0v23NN55uqlr- gK3WcuknM927W5_ ...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2-q8w2PEuUqOs8cQvgVzyPdy_uJ8S0JDwLwnGi9xAEo5KidMYdl7pds",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "og:image": "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/7d/56/89/7d5689d8-ba82-ec2f-64a4-31682436cd8b/contsched.tldymdvp.png/1200x630wa.png",
        "apple-itunes-app": "app-id=375380948, app-argument=https://apps.apple.com/us/app/google-my-business/id853371601",
        "og:image:width": "1200",
        "twitter:card": "summary_large_image",
        "og:site_name": "App Store",
        "applicable-device": "pc,mobile",
        "og:image:type": "image/png",
        "og:description": "‎Every day, millions of people search on Google for businesses like yours. Make your Business Profile on Google stand out for free and turn those searches into your customers with the Google My Business app.\n\nMore than just a local listing:\n- Make edits to your Business Profile on your phone and see…",
        "og:image:secure_url": "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/7d/56/89/7d5689d8-ba82-ec2f-64a4-31682436cd8b/contsched.tldymdvp.png/1200x630wa.png",
        "twitter:image": "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/7d/56/89/7d5689d8-ba82-ec2f-64a4-31682436cd8b/contsched.tldymdvp.png/600x600wa.png",
        "web-experience-app/config/environment": "%7B%22appVersion%22%3A1%2C%22modulePrefix%22%3A%22web-experience-app%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%2F%22%2C%22locationType%22%3A%22history-hash-router-scroll%22%2C%22historySupportMiddleware%22%3Atrue%2C%22contentSecurityPolicyMeta%22%3Atrue%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%5B%22'none'%22%5D%2C%22img-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%2C%22*.apple.com%22%2C%22*.googleusercontent.com%22%2C%22data%3A%22%5D%2C%22style-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22*.apple.com%22%5D%2C%22font-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.apple.com%22%2C%22https%3A%2F%2F*.apple.com%22%5D%2C%22media-src%22%3A%5B%22'self'%22%2C%22blob%3A%22%2C%22http%3A%2F%2F*%22%2C%22https%3A%2F%2F*%22%5D%2C%22connect-src%22%3A%5B%22'self'%22%2C%22*.apple.com%22%2C%22https%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%5D%2C%22script-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22'unsafe-eval'%22%2C%22*.apple.com",
        "twitter:image:alt": "Google My Business on the App Store",
        "twitter:site": "@AppStore",
        "og:image:alt": "Google My Business on the App Store",
        "og:type": "website",
        "twitter:title": "‎Google My Business",
        "og:title": "‎Google My Business",
        "og:image:height": "630",
        "version": "2130.14.0",
        "fb:app_id": "116556461780510",
        "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
        "ac-gn-search-suggestions-enabled": "false",
        "twitter:description": "‎Every day, millions of people search on Google for businesses like yours. Make your Business Profile on Google stand out for free and turn those searches into your customers with the Google My Business app.\n\nMore than just a local listing:\n- Make edits to your Business Profile on your phone and see…",
        "og:locale": "en_US",
        "og:url": "https://apps.apple.com/us/app/google-my-business/id853371601",
        "apple:content_id": "853371601"
      }],
      "cse_image": [{
        "src": "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/7d/56/89/7d5689d8-ba82-ec2f-64a4-31682436cd8b/contsched.tldymdvp.png/1200x630wa.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "‎Google Podcasts on the App Store",
    "htmlTitle": "‎Google Podcasts on the App Store",
    "link": "https://www.google.com/appserve/mkt/p/AD-FnExgJDaQMhp-bndciy8LHtS0fJRZu7cY81_EUHezjnuM8DDh4POUz9B2t6p7ndu9d0iyuSo16amYzwvS_Qp566VTbMiYIKo6TyRJhH9KsjvKzr_dfm0",
    "displayLink": "www.google.com",
    "snippet": "It's much better than shifty apple podcasts. You can listen from each episode easily. When you switch on other podcast in apple it is impossible to return to ...",
    "htmlSnippet": "It&#39;s much better than shifty <b>apple</b> podcasts. You can listen from each episode easily. When you switch on other podcast in <b>apple</b> it is impossible to return to&nbsp;...",
    "cacheId": "CcPZVcXC0NsJ",
    "formattedUrl": "https://www.google.com/.../AD-FnExgJDaQMhp-bndciy8LHtS0fJRZu7cY81 _EUHezjnuM8DDh4POUz9B2t6p7ndu9d0iyuSo16amYzwvS_ ...",
    "htmlFormattedUrl": "https://www.google.com/.../AD-FnExgJDaQMhp-bndciy8LHtS0fJRZu7cY81 _EUHezjnuM8DDh4POUz9B2t6p7ndu9d0iyuSo16amYzwvS_ ...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNG6oQbbgWm0IWZZ3pZhUrLRG5RyAGTWqIiUk5LW70QAkhDPfe1aXj8Bl4",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "og:image": "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/db/7d/2d/db7d2db2-03f3-acae-0b5f-5fa4b43b25e4/logo_podcasts_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
        "apple-itunes-app": "app-id=375380948, app-argument=https://apps.apple.com/us/app/google-podcasts/id1398000105",
        "og:image:width": "1200",
        "twitter:card": "summary_large_image",
        "og:site_name": "App Store",
        "applicable-device": "pc,mobile",
        "og:image:type": "image/png",
        "og:description": "‎With Google Podcasts, you can find and listen to the world's podcasts for free. \n\nDiscover podcasts you'll love \n● Subscribe and listen to all your favorite podcasts. \n● Explore show and episode recommendations just for you. \n● Browse popular and trending shows in comedy, news, sports, and more. \n●…",
        "og:image:secure_url": "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/db/7d/2d/db7d2db2-03f3-acae-0b5f-5fa4b43b25e4/logo_podcasts_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
        "twitter:image": "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/db/7d/2d/db7d2db2-03f3-acae-0b5f-5fa4b43b25e4/logo_podcasts_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/600x600wa.png",
        "web-experience-app/config/environment": "%7B%22appVersion%22%3A1%2C%22modulePrefix%22%3A%22web-experience-app%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%2F%22%2C%22locationType%22%3A%22history-hash-router-scroll%22%2C%22historySupportMiddleware%22%3Atrue%2C%22contentSecurityPolicyMeta%22%3Atrue%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%5B%22'none'%22%5D%2C%22img-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%2C%22*.apple.com%22%2C%22*.googleusercontent.com%22%2C%22data%3A%22%5D%2C%22style-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22*.apple.com%22%5D%2C%22font-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.apple.com%22%2C%22https%3A%2F%2F*.apple.com%22%5D%2C%22media-src%22%3A%5B%22'self'%22%2C%22blob%3A%22%2C%22http%3A%2F%2F*%22%2C%22https%3A%2F%2F*%22%5D%2C%22connect-src%22%3A%5B%22'self'%22%2C%22*.apple.com%22%2C%22https%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%5D%2C%22script-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22'unsafe-eval'%22%2C%22*.apple.com",
        "twitter:image:alt": "Google Podcasts on the App Store",
        "twitter:site": "@AppStore",
        "og:image:alt": "Google Podcasts on the App Store",
        "og:type": "website",
        "twitter:title": "‎Google Podcasts",
        "og:title": "‎Google Podcasts",
        "og:image:height": "630",
        "version": "2130.14.0",
        "fb:app_id": "116556461780510",
        "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
        "ac-gn-search-suggestions-enabled": "false",
        "twitter:description": "‎With Google Podcasts, you can find and listen to the world's podcasts for free. \n\nDiscover podcasts you'll love \n● Subscribe and listen to all your favorite podcasts. \n● Explore show and episode recommendations just for you. \n● Browse popular and trending shows in comedy, news, sports, and more. \n●…",
        "og:locale": "en_US",
        "og:url": "https://apps.apple.com/us/app/google-podcasts/id1398000105",
        "apple:content_id": "1398000105"
      }],
      "cse_image": [{
        "src": "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/db/7d/2d/db7d2db2-03f3-acae-0b5f-5fa4b43b25e4/logo_podcasts_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Exposure Notifications - FAQ v1.2 FINALbetter",
    "htmlTitle": "Exposure Notifications - FAQ v1.2 FINALbetter",
    "link": "https://www.google.com/covid19/exposurenotifications/pdfs/Exposure-Notification-FAQ-v1.2.pdf",
    "displayLink": "www.google.com",
    "snippet": "On April 10, 2020 Google and Apple announced a joint effort to enable the use of Bluetooth technology to help governments and health agencies reduce the ...",
    "htmlSnippet": "On April 10, 2020 Google and <b>Apple</b> announced a joint effort to enable the use of Bluetooth technology to help governments and health agencies reduce the&nbsp;...",
    "cacheId": "c38qlJ_xxu0J",
    "formattedUrl": "https://www.google.com/covid19/.../Exposure-Notification-FAQ-v1.2.pdf",
    "htmlFormattedUrl": "https://www.google.com/covid19/.../Exposure-Notification-FAQ-v1.2.pdf",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTQxKjX8NNAeU2MJuf-P-911sawWxx5PsjPYPX4_oNsCrmCwAzPZaB8c",
        "width": "197",
        "height": "255"
      }],
      "metatags": [{
        "moddate": "D:20200831225153Z00'00'",
        "creator": "Pages",
        "creationdate": "D:20200831225153Z00'00'",
        "producer": "macOS Version 10.15.4 (Build 19E287) Quartz PDFContext",
        "title": "Exposure Notifications - FAQ v1.2 FINALbetter"
      }],
      "cse_image": [{
        "src": "x-raw-image:///d16c5603de232ea04fb99f8ed71018c72e6cfa977ad3a31831834f07c064137d"
      }]
    },
    "mime": "application/pdf",
    "fileFormat": "PDF/Adobe Acrobat"
  }, {
    "kind": "customsearch#result",
    "title": "‎Google Calendar: Get Organised on the App Store",
    "htmlTitle": "‎Google Calendar: Get Organised on the App Store",
    "link": "https://www.google.com/appserve/mkt/p/AFnwnKU8rXawiqZigRm8zZju55yf8CeAmPSeuwClOD6vldy35ZVoCbp9nQ6xFyy4e_H2cARCq_VP67iAjIcRGQb6V5-2nspdGJr2fEYksekEEgzwcP5_rKpSZAYnzce7xbM",
    "displayLink": "www.google.com",
    "snippet": "See All · Find a retailer near you. Latin America and the Caribbean Español. Copyright © 2021 Apple Inc. All rights reserved. Privacy Policy Legal Site Map.",
    "htmlSnippet": "See All &middot; Find a retailer near you. Latin America and the Caribbean Español. Copyright © 2021 <b>Apple</b> Inc. All rights reserved. Privacy Policy Legal Site Map.",
    "cacheId": "1sKAk7KiKjoJ",
    "formattedUrl": "https://www.google.com/.../ AFnwnKU8rXawiqZigRm8zZju55yf8CeAmPSeuwClOD6vldy35ZVoCbp9...",
    "htmlFormattedUrl": "https://www.google.com/.../ AFnwnKU8rXawiqZigRm8zZju55yf8CeAmPSeuwClOD6vldy35ZVoCbp9...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5eoQE10xm-9pdGhMobq8jNlzQnMU_lhtXrommW2TSY8EeYZkBksxMWcl0",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "og:image": "https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/04/ad/e7/04ade7d9-f2be-81f1-510d-dac38eb92f0e/contsched.fxudjuhi.png/1200x630wa.png",
        "apple-itunes-app": "app-id=375380948, app-argument=https://apps.apple.com/ky/app/google-calendar-get-organised/id909319292",
        "og:image:width": "1200",
        "twitter:card": "summary_large_image",
        "og:site_name": "App Store",
        "applicable-device": "pc,mobile",
        "og:image:type": "image/png",
        "og:description": "‎Get the official Google Calendar app for your iPhone or iPad to save time and make the most of every day.\n\n• Different ways to view your calendar – quickly switch between month, week and day views.\n• Events from Gmail – flight, hotel, concert, restaurant reservations and more are added to your calen…",
        "og:image:secure_url": "https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/04/ad/e7/04ade7d9-f2be-81f1-510d-dac38eb92f0e/contsched.fxudjuhi.png/1200x630wa.png",
        "twitter:image": "https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/04/ad/e7/04ade7d9-f2be-81f1-510d-dac38eb92f0e/contsched.fxudjuhi.png/600x600wa.png",
        "web-experience-app/config/environment": "%7B%22appVersion%22%3A1%2C%22modulePrefix%22%3A%22web-experience-app%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%2F%22%2C%22locationType%22%3A%22history-hash-router-scroll%22%2C%22historySupportMiddleware%22%3Atrue%2C%22contentSecurityPolicyMeta%22%3Atrue%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%5B%22'none'%22%5D%2C%22img-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%2C%22*.apple.com%22%2C%22*.googleusercontent.com%22%2C%22data%3A%22%5D%2C%22style-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22*.apple.com%22%5D%2C%22font-src%22%3A%5B%22'self'%22%2C%22http%3A%2F%2F*.apple.com%22%2C%22https%3A%2F%2F*.apple.com%22%5D%2C%22media-src%22%3A%5B%22'self'%22%2C%22blob%3A%22%2C%22http%3A%2F%2F*%22%2C%22https%3A%2F%2F*%22%5D%2C%22connect-src%22%3A%5B%22'self'%22%2C%22*.apple.com%22%2C%22https%3A%2F%2F*.mzstatic.com%22%2C%22*.mzstatic.com%22%5D%2C%22script-src%22%3A%5B%22'self'%22%2C%22'unsafe-inline'%22%2C%22'unsafe-eval'%22%2C%22*.apple.com",
        "twitter:image:alt": "Google Calendar: Get Organised on the App Store",
        "twitter:site": "@AppStore",
        "og:image:alt": "Google Calendar: Get Organised on the App Store",
        "og:type": "website",
        "twitter:title": "‎Google Calendar: Get Organised",
        "og:title": "‎Google Calendar: Get Organised",
        "og:image:height": "630",
        "version": "2130.14.0",
        "fb:app_id": "116556461780510",
        "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
        "ac-gn-search-suggestions-enabled": "false",
        "twitter:description": "‎Get the official Google Calendar app for your iPhone or iPad to save time and make the most of every day.\n\n• Different ways to view your calendar – quickly switch between month, week and day views.\n• Events from Gmail – flight, hotel, concert, restaurant reservations and more are added to your calen…",
        "og:locale": "en_GB",
        "og:url": "https://apps.apple.com/ky/app/google-calendar-get-organised/id909319292",
        "apple:content_id": "909319292"
      }],
      "cse_image": [{
        "src": "https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/04/ad/e7/04ade7d9-f2be-81f1-510d-dac38eb92f0e/contsched.fxudjuhi.png/1200x630wa.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Intelligent Tracking Prevention | WebKit",
    "htmlTitle": "Intelligent Tracking Prevention | WebKit",
    "link": "https://www.google.com/appserve/mkt/p/APDk4sN48rCev8UYlnfrGpLGiqB3TuU5mpMq4UrxyCq6pLBsxSs5lGm1fSBeduTWuMbQuqGbBKYfdBDnZmzLH02pzNBbocbqzq9AZuKQHXCjWu5c7wYkByWD-njcA3gn_HnX8hTx2K0UhkOBsZ3fJaShuZw",
    "displayLink": "www.google.com",
    "snippet": "Jun 5, 2017 ... ... ES6Learn more · @webkit · Site Map · Privacy Policy · Licensing WebKit · WebKit and the WebKit logo are trademarks of Apple Inc.",
    "htmlSnippet": "Jun 5, 2017 <b>...</b> ... ES6Learn more &middot; @webkit &middot; Site Map &middot; Privacy Policy &middot; Licensing WebKit &middot; WebKit and the WebKit logo are trademarks of <b>Apple</b> Inc.",
    "cacheId": "lsELLn2CVZ4J",
    "formattedUrl": "https://www.google.com/.../ APDk4sN48rCev8UYlnfrGpLGiqB3TuU5mpMq4UrxyCq6pLBsxSs5lGm1...",
    "htmlFormattedUrl": "https://www.google.com/.../ APDk4sN48rCev8UYlnfrGpLGiqB3TuU5mpMq4UrxyCq6pLBsxSs5lGm1...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsPgSOma6ZHF_K64dUyW8om31oJ9rWHOtiUr16zWi8GacIpWmerO1L7w",
        "width": "408",
        "height": "124"
      }],
      "metatags": [{
        "application-name": "WebKit",
        "og:image": "https://webkit.org/wp-content/uploads/tracking-prevention-timeline.png",
        "twitter:card": "summary_large_image",
        "twitter:title": "Intelligent Tracking Prevention",
        "og:type": "article",
        "article:published_time": "2017-06-05T14:00:38-07:00",
        "article:section": "Privacy",
        "supported-color-schemes": "light dark",
        "og:site_name": "WebKit",
        "og:title": "Intelligent Tracking Prevention",
        "twitter:creator": "@johnwilander",
        "og:description": "Note: Read about improvements to this technology in recent blog posts about Intelligent Tracking Prevention, and the Storage Access API.",
        "twitter:image:src": "https://webkit.org/wp-content/uploads/tracking-prevention-timeline.png",
        "article:tag": "Storage",
        "twitter:site": "@webkit",
        "article:modified_time": "2019-02-21T10:28:19-08:00",
        "viewport": "width=device-width, initial-scale=1, user-scalable=yes, viewport-fit=cover",
        "twitter:description": "Note: Read about improvements to this technology in recent blog posts about Intelligent Tracking Prevention, and the Storage Access API.",
        "fb:admins": "1085088865",
        "og:url": "https://webkit.org/blog/7675/intelligent-tracking-prevention/"
      }],
      "cse_image": [{
        "src": "https://webkit.org/wp-content/uploads/tracking-prevention-timeline.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Apple's 16-inch MacBook Pro is here, and it has a good keyboard ...",
    "htmlTitle": "<b>Apple&#39;s</b> 16-inch MacBook Pro is here, and it has a good keyboard ...",
    "link": "https://www.google.com/appserve/mkt/p/AFnwnKXmMEuIHgLJLL3JdvxLpNVtLxgaXfju24dKIwaNZSoBR8YViaasweUX0h-SMhfsJ8wHNV4ovIm-rvCf-a9hK2Yh4j25gJkAn25QRrOBQctfKPx_yx4CiLASBldHBSSA1K0_cTKudW9bY5DyrDzBGFQ8UvVDH2Nv1LNsqRgA_OxCCXH473s9zoey81IMeQxY199GiftEqAT8JFhlxb4egVxhXw",
    "displayLink": "www.google.com",
    "snippet": "Nov 13, 2019 ... Apple has launched a new 16-inch MacBook Pro today, available for pre-order now and in stores later this week. The starting price of $2399 is ...",
    "htmlSnippet": "Nov 13, 2019 <b>...</b> <b>Apple</b> has launched a new 16-inch MacBook Pro today, available for pre-order now and in stores later this week. The starting price of $2399 is&nbsp;...",
    "cacheId": "edGuWWcQnWkJ",
    "formattedUrl": "https://www.google.com/.../ AFnwnKXmMEuIHgLJLL3JdvxLpNVtLxgaXfju24dKIwaNZSoBR8YViaa...",
    "htmlFormattedUrl": "https://www.google.com/.../ AFnwnKXmMEuIHgLJLL3JdvxLpNVtLxgaXfju24dKIwaNZSoBR8YViaa...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAngtn4MRtLUyKbjE59Q8m0zwI3ffQp7ASin2scHl2IrTxcbTsn27Blzb1",
        "width": "311",
        "height": "162"
      }],
      "metatags": [{
        "og:image": "https://cdn.vox-cdn.com/thumbor/qlf4y_limzzcXpbQwnJioFJSdo0=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19372028/akrales_191112_3778_0126.jpg",
        "article:published_time": "2019-11-13T08:30:00-05:00",
        "og:image:width": "1200",
        "twitter:card": "summary_large_image",
        "og:site_name": "The Verge",
        "sailthru.tags": "general,the-verge,front-page,apple,hands-on,featured-video,tech,featured-story,laptops,apple-mac-os",
        "twitter:url": "https://www.theverge.com/2019/11/13/20962380/apples-16-inch-macbook-pro-keyboard-screen-speakers-processor",
        "apple-mobile-web-app-title": "Verge",
        "parsely-author": "Dieter Bohn",
        "msapplication-tileimage": "https://cdn.vox-cdn.com/uploads/chorus_asset/file/7396113/221a67c8-a10f-11e6-8fae-983107008690.0.png",
        "og:description": "Goodbye, Butterfly",
        "article:publisher": "http://www.facebook.com/verge",
        "twitter:image": "https://cdn.vox-cdn.com/thumbor/tB-mMNi-oD1V6H3IIYZxPryxb3U=/0x170:2040x1190/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19372028/akrales_191112_3778_0126.jpg",
        "ahrefs-site-verification": "1e57a609922037a3fbdc1c22efd7334113f174f15608f37e1b8538a7b4ce64c3",
        "parsely-type": "post",
        "twitter:site": "verge",
        "article:modified_time": "2019-11-13T08:30:00-05:00",
        "parsely-link": "https://www.theverge.com/2019/11/13/20962380/apples-16-inch-macbook-pro-keyboard-screen-speakers-processor",
        "sailthru.title": "Apple’s 16-inch MacBook Pro is here, and it has a good keyboard",
        "parsely-image-url": "https://cdn.vox-cdn.com/thumbor/C-4m_zsbqPNA6cZUGOWiXP9uy9Q=/0x106:2040x1254/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/65691013/akrales_191112_3778_0126.0.jpg",
        "parsely-section": "front-page",
        "msapplication-tilecolor": "#393092",
        "sailthru.date": "2019-11-13T08:30:00-05:00",
        "og:type": "article",
        "twitter:title": "Apple’s 16-inch MacBook Pro is here, and it has a good keyboard",
        "msvalidate.01": "D385D0326A3AE144205C298DB34B4E94",
        "author": "Dieter Bohn",
        "og:title": "Apple’s 16-inch MacBook Pro is here, and it has a good keyboard",
        "og:image:height": "630",
        "sailthru.image.thumb": "https://cdn.vox-cdn.com/thumbor/cJSYzx5hynvzjbvSsRf_INScwlQ=/340x0:1700x1360/200x200/cdn.vox-cdn.com/uploads/chorus_image/image/65691013/akrales_191112_3778_0126.0.jpg",
        "parsely-title": "Apple’s 16-inch MacBook Pro is here, and it has a good keyboard",
        "article:author": "https://www.facebook.com/dieter.bohn",
        "style-tools": "https://www.theverge.com/style/community/372/d79ca2e96329b8fc17d1be854fe1f719/tools.css",
        "parsely-pub-date": "2019-11-13T08:30:00-05:00",
        "fb:app_id": "549923288395304",
        "sailthru.description": "Apple has launched a new 16-inch MacBook Pro today, available for pre-order now and in stores later this week. The starting price of $2,399 is the same price as the previous 15-inch MacBook Pro, which this one replaces. It has new processors, better speakers, and (obviously) a larger screen. But I know the most important question you have is whether the keyboard is any good. Reader: it is good.",
        "parsely-tags": "verge,front-page,apple,hands-on,featured-video,tech,featured-story,laptops,apple-mac-os",
        "outbrainsection": "apple-mac-os",
        "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
        "twitter:description": "Goodbye, Butterfly",
        "og:url": "https://www.theverge.com/2019/11/13/20962380/apples-16-inch-macbook-pro-keyboard-screen-speakers-processor",
        "sailthru.image.full": "https://cdn.vox-cdn.com/thumbor/C-4m_zsbqPNA6cZUGOWiXP9uy9Q=/0x106:2040x1254/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/65691013/akrales_191112_3778_0126.0.jpg"
      }],
      "cse_image": [{
        "src": "https://cdn.vox-cdn.com/thumbor/qlf4y_limzzcXpbQwnJioFJSdo0=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19372028/akrales_191112_3778_0126.jpg"
      }]
    }
  }]
});

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Header */ "./Components/Header.js");
/* harmony import */ var _Components_SearchResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/SearchResults */ "./Components/SearchResults.js");
/* harmony import */ var _Response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Response */ "./Response.js");

var _jsxFileName = "C:\\Users\\Umer\\Desktop\\Dark-Web-main\\pages\\search.js";






function Search({
  results
}) {
  console.log(results);
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [router.query.term, "-Dark Search"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_SearchResults__WEBPACK_IMPORTED_MODULE_4__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Search);
async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData ? _Response__WEBPACK_IMPORTED_MODULE_5__.default : await fetch(`https://www.googleapis.com/customsearch/v1?key=${"AIzaSyAc4TyaxBaVKsrWCbGk6fMv_y2PE9hJHAM"}&cx=${"c43dbf42a89d4263a"}&q=${context.query.term}
        &start=${startIndex}`).then(response => response.json());
  return {
    props: {
      results: data
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "heroicons-react":
/*!**********************************!*\
  !*** external "heroicons-react" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("heroicons-react");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/search.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvLi9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL0NvbXBvbmVudHMvUGFnaW5hdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL0NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL1Jlc3BvbnNlLmpzIiwid2VicGFjazovL2Rhcmstd2ViLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Rhcmstd2ViLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL2Rhcmstd2ViLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9kYXJrLXdlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL2Rhcmstd2ViLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2Rhcmstd2ViLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvLi9wYWdlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Rhcmstd2ViL2V4dGVybmFsIFwiaGVyb2ljb25zLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9kYXJrLXdlYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Rhcmstd2ViL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZGFyay13ZWIvaWdub3JlZHxDOlxcVXNlcnNcXFVtZXJcXERlc2t0b3BcXERhcmstV2ViLW1haW5cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2hJbnB1dFJlZiIsInVzZVJlZiIsInNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRlcm0iLCJjdXJyZW50IiwidmFsdWUiLCJwdXNoIiwiUGFnaW5hdGlvbkJ1dHRvbiIsInN0YXJ0SW5kZXgiLCJOdW1iZXIiLCJxdWVyeSIsInN0YXJ0IiwiU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJzZWFyY2hJbmZvcm1hdGlvbiIsImZvcm1hdHRlZFRvdGFsUmVzdWx0cyIsImZvcm1hdHRlZFNlYXJjaFRpbWUiLCJpdGVtcyIsIm1hcCIsInJlc3VsdCIsImxpbmsiLCJmb3JtYXR0ZWRVcmwiLCJ0aXRsZSIsInNuaXBwZXQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibGVuZ3RoIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJTZWFyY2giLCJsb2ciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwidXNlRHVtbXlEYXRhIiwiUmVzcG9uc2UiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2YsUUFBTUMsTUFBTSxHQUFFQyxrRUFBUyxFQUF2QjtBQUNBLFFBQU1DLGNBQWMsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQTdCOztBQUVBLFFBQU1DLE1BQU0sR0FBSUMsQ0FBRCxJQUFPO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxVQUFNQyxJQUFJLEdBQUdMLGNBQWMsQ0FBQ00sT0FBZixDQUF1QkMsS0FBcEM7QUFFQSxRQUFJLENBQUNGLElBQUwsRUFBVztBQUVYUCxVQUFNLENBQUNVLElBQVAs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QUwsQ0FHdENpSixJQUhzQyxDQUdoQzZiLFFBQUQsSUFBY0EsUUFBUSxDQUFDbk4sSUFBVCxFQUhtQixDQUE1QztBQUtJLFNBQU07QUFDRnpVLFNBQUssRUFBRztBQUNKN0MsYUFBTyxFQUFDdVg7QUFESjtBQUROLEdBQU47QUFLUCxDOzs7Ozs7Ozs7OztBQ3hDWSxrQkFBa0IsTUFBTSx3QkFBd0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7QUNEQSx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qyw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBTZWFyY2gsIFhDaXJjbGVPdXRsaW5lIH0gZnJvbSAnaGVyb2ljb25zLXJlYWN0J1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICBjb25zdCByb3V0ZXIgPXVzZVJvdXRlcigpO1xuICAgY29uc3Qgc2VhcmNoSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGVybSA9IHNlYXJjaElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBpZiAoIXRlcm0pIHJldHVybjtcblxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoP3Rlcm09JHt0ZXJtfWApO1xufTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBiZy1ibGFja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBwLTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICA8aDEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfSBcbiAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXG4gICAgICAgICAgY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBmb250LWV4dHJhYm9sZCB4bDp0ZXh0LTR4bCBtZDp0ZXh0LTN4bCBcIj5cbiAgICAgICAgREFSSzxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiPldFQjwvc3Bhbj48L2gxPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBweS0zIHB4LTYgbWwtMTAgbXItNSBib3JkZXIgXG4gICAgICAgIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLWZ1bGxcbiAgICAgICAgbWF4XCI+XG4gICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cImgtNSBtci0zIHRleHQtcmVkLTYwMFwiLz5cbiAgICAgICAgPGlucHV0IHJlZj17c2VhcmNoSW5wdXRSZWZ9IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBncm93IGJnLXRyYW5zcGFyZW50IFxuICAgICAgICB0ZXh0LXdoaXRlIDItZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCIvPlxuICAgICAgICA8WENpcmNsZU91dGxpbmUgb25DbGljaz17KCk9PihzZWFyY2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gXCJcIil9XG4gICAgICAgIGNsYXNzTmFtZT1cImgtNiBtci0zIHRleHQtcmVkLTYwMCBjdXJzb3ItcG9pbnRlclwiLz5cbiAgICAgICAgPGJ1dHRvbiBoaWRkZW4gb25DbGljaz17c2VhcmNofVxuICAgICAgICB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiXG5pbXBvcnQgeyBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0IH0gZnJvbSAnaGVyb2ljb25zLXJlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gUGFnaW5hdGlvbkJ1dHRvbigpIHtcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgXG4gICBjb25zdCBzdGFydEluZGV4ID0gTnVtYmVyKHJvdXRlci5xdWVyeS5zdGFydCkgfHwgMDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1heC13LWxnIHRleHQtcmVkLTgwMFxuICAgICAgICBtYi0xMFwiPlxuICAgICAgICAgICAge3N0YXJ0SW5kZXggPj0xMCAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2g/dGVybT0ke3JvdXRlci5xdWVyeS50ZXJtfVxuICAgICAgICAgICAgICAgICZzdGFydD0ke3N0YXJ0SW5kZXggLSAxMH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGZsZXgtY29sIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBcbiAgICAgICAgICAgICAgIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIi8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1yZWQtNzAwXCI+UHJldmlvdXM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2g/dGVybT0ke3JvdXRlci5xdWVyeS50ZXJtfVxuICAgICAgICAgICAgJnN0YXJ0PSR7c3RhcnRJbmRleCArIDEwfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBmbGV4LWNvbCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgXG4gICAgICAgICAgICAgICAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIi8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwXCI+TmV4dDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25CdXR0b25cbiIsImltcG9ydCBQYWdpbmF0aW9uQnV0dG9uIGZyb20gXCIuL1BhZ2luYXRpb25CdXR0b25cIjtcblxuXG5mdW5jdGlvbiBTZWFyY2hSZXN1bHRzKHsgcmVzdWx0cyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBwbC0zIHByLTMgcHgtMyBzbTpwbC1bNSVdXG4gICAgICAgIG1kOnBsLVsxNCVdIGxnOnBsLTUyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRyYWNraW5nLXdpZGUgdGV4dC1tZCBtYi01IG10LTNcIj5cbiAgICAgICAgICAgICAgICBBYm91dCB7cmVzdWx0cy5zZWFyY2hJbmZvcm1hdGlvbj8uXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVG90YWxSZXN1bHRzfSByZXN1bHRzIChcbiAgICAgICAgICAgICAgICAge3Jlc3VsdHMuc2VhcmNoSW5mb3JtYXRpb24/LlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFNlYXJjaFRpbWV9IHNlY29uZHMpICA8L3A+XG5cbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5pdGVtcz8ubWFwKChyZXN1bHQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVzdWx0Lmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXcteGwgbWItOCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVzdWx0Lmxpbmt9IGNsYXNzTmFtZT1cInRleHQtc21sIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LmZvcm1hdHRlZFVybH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVzdWx0Lmxpbmt9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHJ1bmNhdGUgdGV4dC14bCB0ZXh0LXJlZC02MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtIGdyb3VwLWhvdmVyOnVuZGVybGluZVwiPntyZXN1bHQudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluZS1jbGFtcC0yXCI+e3Jlc3VsdC5zbmlwcGV0fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDxQYWdpbmF0aW9uQnV0dG9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0c1xuIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgXCJraW5kXCI6IFwiY3VzdG9tc2VhcmNoI3NlYXJjaFwiLFxuICAgIFwidXJsXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcInRlbXBsYXRlXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY3VzdG9tc2VhcmNoL3YxP3E9e3NlYXJjaFRlcm1zfSZudW09e2NvdW50P30mc3RhcnQ9e3N0YXJ0SW5kZXg/fSZscj17bGFuZ3VhZ2U/fSZzYWZlPXtzYWZlP30mY3g9e2N4P30mc29ydD17c29ydD99JmZpbHRlcj17ZmlsdGVyP30mZ2w9e2dsP30mY3I9e2NyP30mZ29vZ2xlaG9zdD17Z29vZ2xlSG9zdD99JmMyY29mZj17ZGlzYWJsZUNuVHdUcmFuc2xhdGlvbj99JmhxPXtocT99JmhsPXtobD99JnNpdGVTZWFyY2g9e3NpdGVTZWFyY2g/fSZzaXRlU2VhcmNoRmlsdGVyPXtzaXRlU2VhcmNoRmlsdGVyP30mZXhhY3RUZXJtcz17ZXhhY3RUZXJtcz99JmV4Y2x1ZGVUZXJtcz17ZXhjbHVkZVRlcm1zP30mbGlua1NpdGU9e2xpbmtTaXRlP30mb3JUZXJtcz17b3JUZXJtcz99JnJlbGF0ZWRTaXRlPXtyZWxhdGVkU2l0ZT99JmRhdGVSZXN0cmljdD17ZGF0ZVJlc3RyaWN0P30mbG93UmFuZ2U9e2xvd1JhbmdlP30maGlnaFJhbmdlPXtoaWdoUmFuZ2U/fSZzZWFyY2hUeXBlPXtzZWFyY2hUeXBlfSZmaWxlVHlwZT17ZmlsZVR5cGU/fSZyaWdodHM9e3JpZ2h0cz99JmltZ1NpemU9e2ltZ1NpemU/fSZpbWdUeXBlPXtpbWdUeXBlP30maW1nQ29sb3JUeXBlPXtpbWdDb2xvclR5cGU/fSZpbWdEb21pbmFudENvbG9yPXtpbWdEb21pbmFudENvbG9yP30mYWx0PWpzb25cIlxuICAgIH0sXG4gICAgXCJxdWVyaWVzXCI6IHtcbiAgICAgICAgXCJyZXF1ZXN0XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR29vZ2xlIEN1c3RvbSBTZWFyY2ggLSBhcHBsZVwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxSZXN1bHRzXCI6IFwiMjA3MDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgXCJzZWFyY2hUZXJtc1wiOiBcImFwcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJjb3VudFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcInN0YXJ0SW5kZXhcIjogMSxcbiAgICAgICAgICAgICAgICBcImlucHV0RW5jb2RpbmdcIjogXCJ1dGY4XCIsXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRFbmNvZGluZ1wiOiBcInV0ZjhcIixcbiAgICAgICAgICAgICAgICBcInNhZmVcIjogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBcImN4XCI6IFwiYzQzZGJmNDJhODlkNDI2M2FcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5leHRQYWdlXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR29vZ2xlIEN1c3RvbSBTZWFyY2ggLSBhcHBsZVwiLFxuICAgICAgICAgICAgICAgIFwidG90YWxSZXN1bHRzXCI6IFwiMjA3MDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgXCJzZWFyY2hUZXJtc1wiOiBcImFwcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJjb3VudFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcInN0YXJ0SW5kZXhcIjogMTEsXG4gICAgICAgICAgICAgICAgXCJpbnB1dEVuY29kaW5nXCI6IFwidXRmOFwiLFxuICAgICAgICAgICAgICAgIFwib3V0cHV0RW5jb2RpbmdcIjogXCJ1dGY4XCIsXG4gICAgICAgICAgICAgICAgXCJzYWZlXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgXCJjeFwiOiBcImM0M2RiZjQyYTg5ZDQyNjNhXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJjb250ZXh0XCI6IHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdvb2dsZVwiXG4gICAgfSxcbiAgICBcInNlYXJjaEluZm9ybWF0aW9uXCI6IHtcbiAgICAgICAgXCJzZWFyY2hUaW1lXCI6IDAuNTA3MjU2LFxuICAgICAgICBcImZvcm1hdHRlZFNlYXJjaFRpbWVcIjogXCIwLjUxXCIsXG4gICAgICAgIFwidG90YWxSZXN1bHRzXCI6IFwiMjA3MDAwMDAwXCIsXG4gICAgICAgIFwiZm9ybWF0dGVkVG90YWxSZXN1bHRzXCI6IFwiMjA3LDAwMCwwMDBcIlxuICAgIH0sXG4gICAgXCJpdGVtc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcImN1c3RvbXNlYXJjaCNyZXN1bHRcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJBcHBsZSBJbmMgKEFBUEwgOiBOQVNEQVEpIFN0b2NrIFByaWNlICYgTmV3cyAtIEdvb2dsZSBGaW5hbmNlXCIsXG4gICAgICAgICAgICBcImh0bWxUaXRsZVwiOiBcIjxiPkFwcGxlPC9iPiBJbmMgKEFBUEwgOiBOQVNEQVEpIFN0b2NrIFByaWNlICZhbXA7IE5ld3MgLSBHb29nbGUgRmluYW5jZVwiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9maW5hbmNlL3F1b3RlL0FBUEw6TkFTREFRXCIsXG4gICAgICAgICAgICBcImRpc3BsYXlMaW5rXCI6IFwid3d3Lmdvb2dsZS5jb21cIixcbiAgICAgICAgICAgIFwic25pcHBldFwiOiBcIkdldCB0aGUgbGF0ZXN0IEFwcGxlIEluYyAoQUFQTCkgcmVhbC10aW1lIHF1b3RlLCBoaXN0b3JpY2FsIHBlcmZvcm1hbmNlLCBjaGFydHMsIGFuZCBvdGhlciBmaW5hbmNpYWwgaW5mb3JtYXRpb24gdG8gaGVscCB5b3UgbWFrZSBtb3JlIGluZm9ybWVkIHRyYWRpbmcgYW5kwqAuLi5cIixcbiAgICAgICAgICAgIFwiaHRtbFNuaXBwZXRcIjogXCJHZXQgdGhlIGxhdGVzdCA8Yj5BcHBsZTwvYj4gSW5jIChBQVBMKSByZWFsLXRpbWUgcXVvdGUsIGhpc3RvcmljYWwgcGVyZm9ybWFuY2UsIGNoYXJ0cywgYW5kIG90aGVyIGZpbmFuY2lhbCBpbmZvcm1hdGlvbiB0byBoZWxwIHlvdSBtYWtlIG1vcmUgaW5mb3JtZWQgdHJhZGluZyBhbmQmbmJzcDsuLi5cIixcbiAgICAgICAgICAgIFwiY2FjaGVJZFwiOiBcIjlMYjE2U0NMU09VSlwiLFxuICAgICAgICAgICAgXCJmb3JtYXR0ZWRVcmxcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2ZpbmFuY2UvcXVvdGUvQUFQTDpOQVNEQVFcIixcbiAgICAgICAgICAgIFwiaHRtbEZvcm1hdHRlZFVybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZmluYW5jZS9xdW90ZS9BQVBMOk5BU0RBUVwiLFxuICAgICAgICAgICAgXCJwYWdlbWFwXCI6IHtcbiAgICAgICAgICAgICAgICBcImNzZV90aHVtYm5haWxcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjMuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JRbGRUSEF6MTRNaVdZLTJicElDeU9OWUxVamNvWTdoSmM4QVFqMXRtZm1oSERRNDNVTm1TVnVfOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjMxMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxNjJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIm1ldGF0YWdzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi1uYW1lXCI6IFwiR29vZ2xlIEZpbmFuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2VcIjogXCJodHRwczovL3NzbC5nc3RhdGljLmNvbS9maW5hbmNlL2Zhdmljb24vZmluYW5jZV83NzB4NDAyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGVtZS1jb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dHlwZVwiOiBcIndlYnNpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2U6d2lkdGhcIjogXCI3NzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOnRpdGxlXCI6IFwiQXBwbGUgSW5jIChBQVBMIDogTkFTREFRKSBTdG9jayBQcmljZSAmIE5ld3MgLSBHb29nbGUgRmluYW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiOiBcIkdvb2dsZSBGaW5hbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnRpdGxlXCI6IFwiQXBwbGUgSW5jIChBQVBMIDogTkFTREFRKSBTdG9jayBQcmljZSAmIE5ld3MgLSBHb29nbGUgRmluYW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZTpoZWlnaHRcIjogXCI0MDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6ZGVzY3JpcHRpb25cIjogXCJHZXQgdGhlIGxhdGVzdCBBcHBsZSBJbmMgKEFBUEwpIHJlYWwtdGltZSBxdW90ZSwgaGlzdG9yaWNhbCBwZXJmb3JtYW5jZSwgY2hhcnRzLCBhbmQgb3RoZXIgZmluYW5jaWFsIGluZm9ybWF0aW9uIHRvIGhlbHAgeW91IG1ha2UgbW9yZSBpbmZvcm1lZCB0cmFkaW5nIGFuZCBpbnZlc3RtZW50IGRlY2lzaW9ucy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vc3NsLmdzdGF0aWMuY29tL2ZpbmFuY2UvZmF2aWNvbi9maW5hbmNlXzQ5Nng0OTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlZmVycmVyXCI6IFwib3JpZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIjogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1zYXBwbGljYXRpb24tdGFwLWhpZ2hsaWdodFwiOiBcIm5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkBnb29nbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld3BvcnRcIjogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ubyxtaW5pbWFsLXVpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIjogXCJ5ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBcIkdldCB0aGUgbGF0ZXN0IEFwcGxlIEluYyAoQUFQTCkgcmVhbC10aW1lIHF1b3RlLCBoaXN0b3JpY2FsIHBlcmZvcm1hbmNlLCBjaGFydHMsIGFuZCBvdGhlciBmaW5hbmNpYWwgaW5mb3JtYXRpb24gdG8gaGVscCB5b3UgbWFrZSBtb3JlIGluZm9ybWVkIHRyYWRpbmcgYW5kIGludmVzdG1lbnQgZGVjaXNpb25zLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCI6IFwieWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnVybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZmluYW5jZS9xdW90ZS9BQVBMOk5BU0RBUVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3NlX2ltYWdlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL3NzbC5nc3RhdGljLmNvbS9maW5hbmNlL2Zhdmljb24vZmluYW5jZV83NzB4NDAyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcImN1c3RvbXNlYXJjaCNyZXN1bHRcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJBcHBsZSB1bnZlaWxzIEFwcGxlIFdhdGNoIFNlcmllcyA1IC0gQXBwbGVcIixcbiAgICAgICAgICAgIFwiaHRtbFRpdGxlXCI6IFwiPGI+QXBwbGU8L2I+IHVudmVpbHMgPGI+QXBwbGU8L2I+IFdhdGNoIFNlcmllcyA1IC0gPGI+QXBwbGU8L2I+XCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2FwcHNlcnZlL21rdC9wL0FGbnduS1UxcUR0M2JaRkNfYTY3WUlJcTFxT2NNd1BEMFluSktQOUtzOHUwZUY1MEFuRjNWMFZFVTBmcW1zVkl5dzYyb0VlSEhVV2hoRmI3cUFSMnBzRWF6NS12UmF4OUd6ZkZldDJKSHM3SkFMRWRsV0otRzVCN0doZkx3eVItbWtIUHRDY2t1OW1PaHJwX0E4eXFpT3NSU0JVQk1JZE9SblJ5bU1XY1wiLFxuICAgICAgICAgICAgXCJkaXNwbGF5TGlua1wiOiBcInd3dy5nb29nbGUuY29tXCIsXG4gICAgICAgICAgICBcInNuaXBwZXRcIjogXCJTZXAgMTAsIDIwMTkgLi4uIEFwcGxlIHRvZGF5IGFubm91bmNlZCBBcHBsZSBXYXRjaCBTZXJpZXMgNSwgZGVidXRpbmcgYW4gQWx3YXlzLU9uIFJldGluYSBkaXNwbGF5IHRoYXQgbmV2ZXIgc2xlZXBzLlwiLFxuICAgICAgICAgICAgXCJodG1sU25pcHBldFwiOiBcIlNlcCAxMCwgMjAxOSA8Yj4uLi48L2I+IDxiPkFwcGxlPC9iPiB0b2RheSBhbm5vdW5jZWQgPGI+QXBwbGU8L2I+IFdhdGNoIFNlcmllcyA1LCBkZWJ1dGluZyBhbiBBbHdheXMtT24gUmV0aW5hIGRpc3BsYXkgdGhhdCBuZXZlciBzbGVlcHMuXCIsXG4gICAgICAgICAgICBcImNhY2hlSWRcIjogXCJPcDBpeGZqdkxTUUpcIixcbiAgICAgICAgICAgIFwiZm9ybWF0dGVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8uLi4vQUZud25LVTFxRHQzYlpGQ18gYTY3WUlJcTFxT2NNd1BEMFluSktQOUtzOHUwZUY1MEFuRjNWMFZFVTBmcW1zVkl5dzYyb0VlSC4uLlwiLFxuICAgICAgICAgICAgXCJodG1sRm9ybWF0dGVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8uLi4vQUZud25LVTFxRHQzYlpGQ18gYTY3WUlJcTFxT2NNd1BEMFluSktQOUtzOHUwZUY1MEFuRjNWMFZFVTBmcW1zVkl5dzYyb0VlSC4uLlwiLFxuICAgICAgICAgICAgXCJwYWdlbWFwXCI6IHtcbiAgICAgICAgICAgICAgICBcImNzZV90aHVtYm5haWxcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjMuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1NLSTRRMEEwa2U1ZGhNTVRUV0FFX3Q3Uk12UVdjc3ZWVU1xM3loSVZZZEkzaXZBUk5WYW9PRjJlQTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIzMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTYzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJCcmVhZGNydW1iTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIm1ldGF0YWdzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmFseXRpY3Mtcy1idWNrZXQtMVwiOiBcImFwcGxlZ2xvYmFsLGFwcGxlc3RvcmV3d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmFseXRpY3Mtcy1idWNrZXQtMFwiOiBcImFwcGxlZ2xvYmFsLGFwcGxlc3RvcmV3d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZVwiOiBcImh0dHBzOi8vd3d3LmFwcGxlLmNvbS9uZXdzcm9vbS9pbWFnZXMvdGlsZS1pbWFnZXMvQXBwbGVfd2F0Y2hfc2VyaWVzXzVfaW50cm9kdWNlcy1hbHdheXMtb24tcmV0aW5hLWRpc3BsYXlfMDkxMDE5LmpwZy5vZy5qcGc/MjAyMTA3MTcwMDI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnR5cGVcIjogXCJhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCJBcHBsZSB1bnZlaWxzIEFwcGxlIFdhdGNoIFNlcmllcyA1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6c2l0ZV9uYW1lXCI6IFwiQXBwbGUgTmV3c3Jvb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dGl0bGVcIjogXCJBcHBsZSB1bnZlaWxzIEFwcGxlIFdhdGNoIFNlcmllcyA1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjLWduLXN0b3JlLWtleVwiOiBcIlNYMjlEMllQSkZLRkFGQzJQXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmRlc2NyaXB0aW9uXCI6IFwiQXBwbGUgdG9kYXkgYW5ub3VuY2VkIEFwcGxlIFdhdGNoIFNlcmllcyA1LCBkZWJ1dGluZyBhbiBBbHdheXMtT24gUmV0aW5hIGRpc3BsYXkgdGhhdCBuZXZlciBzbGVlcHMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6aW1hZ2VcIjogXCJodHRwczovL3d3dy5hcHBsZS5jb20vbmV3c3Jvb20vaW1hZ2VzL3RpbGUtaW1hZ2VzL0FwcGxlX3dhdGNoX3Nlcmllc181X2ludHJvZHVjZXMtYWx3YXlzLW9uLXJldGluYS1kaXNwbGF5XzA5MTAxOS5qcGcub2cuanBnPzIwMjEwNzE3MDAyN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmFseXRpY3Mtcy1jaGFubmVsXCI6IFwibmV3c3Jvb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQEFwcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdwb3J0XCI6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHZpZXdwb3J0LWZpdD1jb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IFwiQXBwbGUgdG9kYXkgYW5ub3VuY2VkIEFwcGxlIFdhdGNoIFNlcmllcyA1LCBkZWJ1dGluZyBhbiBBbHdheXMtT24gUmV0aW5hIGRpc3BsYXkgdGhhdCBuZXZlciBzbGVlcHMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmxvY2FsZVwiOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzp1cmxcIjogXCJodHRwczovL3d3dy5hcHBsZS5jb20vbmV3c3Jvb20vMjAxOS8wOS9hcHBsZS11bnZlaWxzLWFwcGxlLXdhdGNoLXNlcmllcy01L1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmFseXRpY3Mtcy1idWNrZXQtMlwiOiBcImFwcGxlZ2xvYmFsLGFwcGxlc3RvcmV3d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmFseXRpY3MtdHJhY2tcIjogXCJOZXdzcm9vbSAtIEFwcGxlIHVudmVpbHMgQXBwbGUgV2F0Y2ggU2VyaWVzIDVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNzZV9pbWFnZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly93d3cuYXBwbGUuY29tL25ld3Nyb29tL2ltYWdlcy90aWxlLWltYWdlcy9BcHBsZV93YXRjaF9zZXJpZXNfNV9pbnRyb2R1Y2VzLWFsd2F5cy1vbi1yZXRpbmEtZGlzcGxheV8wOTEwMTkuanBnLm9nLmpwZz8yMDIxMDcxNzAwMjdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJjdXN0b21zZWFyY2gjcmVzdWx0XCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXhwb3N1cmUgTm90aWZpY2F0aW9uczogSGVscGluZyBmaWdodCBDT1ZJRC0xOSAtIEdvb2dsZVwiLFxuICAgICAgICAgICAgXCJodG1sVGl0bGVcIjogXCJFeHBvc3VyZSBOb3RpZmljYXRpb25zOiBIZWxwaW5nIGZpZ2h0IENPVklELTE5IC0gR29vZ2xlXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2NvdmlkMTkvZXhwb3N1cmVub3RpZmljYXRpb25zL1wiLFxuICAgICAgICAgICAgXCJkaXNwbGF5TGlua1wiOiBcInd3dy5nb29nbGUuY29tXCIsXG4gICAgICAgICAgICBcInNuaXBwZXRcIjogXCJMZWFybiBob3cgRXhwb3N1cmUgTm90aWZpY2F0aW9ucywgYnVpbHQgYnkgR29vZ2xlIGFuZCBBcHBsZSwgZW5hYmxlIGFwcHMgdG8gc2VuZCB5b3UgYSBub3RpZmljYXRpb24gaWYgeW91J3ZlIGxpa2VseSBiZWVuIGV4cG9zZWQgdG8gQ09WSUQtMTkuXCIsXG4gICAgICAgICAgICBcImh0bWxTbmlwcGV0XCI6IFwiTGVhcm4gaG93IEV4cG9zdXJlIE5vdGlmaWNhdGlvbnMsIGJ1aWx0IGJ5IEdvb2dsZSBhbmQgPGI+QXBwbGU8L2I+LCBlbmFibGUgYXBwcyB0byBzZW5kIHlvdSBhIG5vdGlmaWNhdGlvbiBpZiB5b3UmIzM5O3ZlIGxpa2VseSBiZWVuIGV4cG9zZWQgdG8gQ09WSUQtMTkuXCIsXG4gICAgICAgICAgICBcImNhY2hlSWRcIjogXCJxdEtfSTN4OG1JNEpcIixcbiAgICAgICAgICAgIFwiZm9ybWF0dGVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jb3ZpZDE5L2V4cG9zdXJlbm90aWZpY2F0aW9ucy9cIixcbiAgICAgICAgICAgIFwiaHRtbEZvcm1hdHRlZFVybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY292aWQxOS9leHBvc3VyZW5vdGlmaWNhdGlvbnMvXCIsXG4gICAgICAgICAgICBcInBhZ2VtYXBcIjoge1xuICAgICAgICAgICAgICAgIFwiY3NlX3RodW1ibmFpbFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMi5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUWl3azUyWDhNNEQ3X3k2RXAzNHFTX2NiM1h6YVl2ME5SRDlqTnc0WTFoUEJ3WGxrcWh2OHBPNERBTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxNjhcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIm1ldGF0YWdzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWZlcnJlclwiOiBcIm5vLXJlZmVycmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlXCI6IFwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL1NuZTIxSXU1TDAzcW5FNG9UTXRqbVVXZk9sTTh6VXdyZk5YQ0FrbHVuNHdIdVZpLXUxSmQtN3Vrb1hUQ3VpTm56bDJLcVREeTZnQml6cE1CN29VNkJ4SG5RbkZmR2JoLU9Hb0w9dzEyMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmltYWdlOmFsdFwiOiBcIkxlYXJuIGhvdyBFeHBvc3VyZSBOb3RpZmljYXRpb25zLCBidWlsdCBieSBHb29nbGUgYW5kIEFwcGxlLCBlbmFibGUgYXBwcyB0byBzZW5kIHlvdSBhIG5vdGlmaWNhdGlvbiBpZiB5b3XigJl2ZSBsaWtlbHkgYmVlbiBleHBvc2VkIHRvIENPVklELTE5LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzpzaXRlX25hbWVcIjogXCJFeHBvc3VyZSBOb3RpZmljYXRpb25zOiBIZWxwaW5nIGZpZ2h0IENPVklELTE5IC0gR29vZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdwb3J0XCI6IFwiaW5pdGlhbC1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzp0aXRsZVwiOiBcIkV4cG9zdXJlIE5vdGlmaWNhdGlvbnM6IEhlbHBpbmcgZmlnaHQgQ09WSUQtMTkgLSBHb29nbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbnRsL2VuX3VzL2NvdmlkMTkvZXhwb3N1cmVub3RpZmljYXRpb25zL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzpkZXNjcmlwdGlvblwiOiBcIkxlYXJuIGhvdyBFeHBvc3VyZSBOb3RpZmljYXRpb25zLCBidWlsdCBieSBHb29nbGUgYW5kIEFwcGxlLCBlbmFibGUgYXBwcyB0byBzZW5kIHlvdSBhIG5vdGlmaWNhdGlvbiBpZiB5b3XigJl2ZSBsaWtlbHkgYmVlbiBleHBvc2VkIHRvIENPVklELTE5LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmltYWdlXCI6IFwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL1NuZTIxSXU1TDAzcW5FNG9UTXRqbVVXZk9sTTh6VXdyZk5YQ0FrbHVuNHdIdVZpLXUxSmQtN3Vrb1hUQ3VpTm56bDJLcVREeTZnQml6cE1CN29VNkJ4SG5RbkZmR2JoLU9Hb0w9dzEyMDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNzZV9pbWFnZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL1NuZTIxSXU1TDAzcW5FNG9UTXRqbVVXZk9sTTh6VXdyZk5YQ0FrbHVuNHdIdVZpLXUxSmQtN3Vrb1hUQ3VpTm56bDJLcVREeTZnQml6cE1CN29VNkJ4SG5RbkZmR2JoLU9Hb0w9dzEyMDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJjdXN0b21zZWFyY2gjcmVzdWx0XCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi4oCOR21haWwgLSBFbWFpbCBieSBHb29nbGUgb24gdGhlIEFwcCBTdG9yZVwiLFxuICAgICAgICAgICAgXCJodG1sVGl0bGVcIjogXCLigI5HbWFpbCAtIEVtYWlsIGJ5IEdvb2dsZSBvbiB0aGUgQXBwIFN0b3JlXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2luYm94L2lvc1wiLFxuICAgICAgICAgICAgXCJkaXNwbGF5TGlua1wiOiBcInd3dy5nb29nbGUuY29tXCIsXG4gICAgICAgICAgICBcInNuaXBwZXRcIjogXCJNb3JlIHdheXMgdG8gc2hvcDogRmluZCBhbiBBcHBsZSBTdG9yZSBvciBvdGhlciByZXRhaWxlciBuZWFyIHlvdS4gT3IgY2FsbCAxLTgwMC0gTVktQVBQTEUuIENob29zZSB5b3VyIGNvdW50cnkgb3IgcmVnaW9uLiBDb3B5cmlnaHQgwqkgMjAyMSBBcHBsZSBJbmMuIEFsbMKgLi4uXCIsXG4gICAgICAgICAgICBcImh0bWxTbmlwcGV0XCI6IFwiTW9yZSB3YXlzIHRvIHNob3A6IEZpbmQgYW4gPGI+QXBwbGU8L2I+IFN0b3JlIG9yIG90aGVyIHJldGFpbGVyIG5lYXIgeW91LiBPciBjYWxsIDEtODAwLSBNWS08Yj5BUFBMRTwvYj4uIENob29zZSB5b3VyIGNvdW50cnkgb3IgcmVnaW9uLiBDb3B5cmlnaHQgwqkgMjAyMSA8Yj5BcHBsZTwvYj4gSW5jLiBBbGwmbmJzcDsuLi5cIixcbiAgICAgICAgICAgIFwiY2FjaGVJZFwiOiBcIldYSGJwVEsyTGFjSlwiLFxuICAgICAgICAgICAgXCJmb3JtYXR0ZWRVcmxcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2luYm94L2lvc1wiLFxuICAgICAgICAgICAgXCJodG1sRm9ybWF0dGVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbmJveC9pb3NcIixcbiAgICAgICAgICAgIFwicGFnZW1hcFwiOiB7XG4gICAgICAgICAgICAgICAgXCJjc2VfdGh1bWJuYWlsXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2VuY3J5cHRlZC10Ym4yLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUZnd0Y0F3TnpJS2dlTUtlYzZNRlU4RzM1SVhNOFZ1N2ppdktVRkhUVkdfaWxzUVhRenNBRVpNMkR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiMzEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjE2M1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibWV0YXRhZ3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlXCI6IFwiaHR0cHM6Ly9pczMtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9QdXJwbGUxMTUvdjQvZWUvZjUvMDQvZWVmNTA0NDgtNDljZC00NzRiLTg0MjUtMWVmYjhmY2FmYzZkL2NvbnRzY2hlZC50dGRqbHJrZC5wbmcvMTIwMHg2MzB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwbGUtaXR1bmVzLWFwcFwiOiBcImFwcC1pZD0zNzUzODA5NDgsIGFwcC1hcmd1bWVudD1odHRwczovL2FwcHMuYXBwbGUuY29tL3VzL2FwcC9nbWFpbC1lbWFpbC1ieS1nb29nbGUvaWQ0MjI2ODk0ODBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2U6d2lkdGhcIjogXCIxMjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6c2l0ZV9uYW1lXCI6IFwiQXBwIFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2FibGUtZGV2aWNlXCI6IFwicGMsbW9iaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOnR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6ZGVzY3JpcHRpb25cIjogXCLigI5UaGUgb2ZmaWNpYWwgR21haWwgYXBwIGJyaW5ncyB0aGUgYmVzdCBvZiBHbWFpbCB0byB5b3VyIGlQaG9uZSBvciBpUGFkIHdpdGggcmVhbC10aW1lIG5vdGlmaWNhdGlvbnMsIG11bHRpcGxlIGFjY291bnQgc3VwcG9ydCwgYW5kIHNlYXJjaCB0aGF0IHdvcmtzIGFjcm9zcyBhbGwgeW91ciBtYWlsLlxcblxcbldpdGggdGhlIEdtYWlsIGFwcCwgeW91IGNhbjpcXG7igKIgVW5kbyBTZW5kLCB0byBwcmV2ZW50IGVtYmFycmFzc2luZyBtaXN0YWtlc1xcbuKAoiBTd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBhY2NvdW50c1xcbuKAoiBHZXQgbm90aWZpZWQgb2bigKZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2U6c2VjdXJlX3VybFwiOiBcImh0dHBzOi8vaXMzLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTE1L3Y0L2VlL2Y1LzA0L2VlZjUwNDQ4LTQ5Y2QtNDc0Yi04NDI1LTFlZmI4ZmNhZmM2ZC9jb250c2NoZWQudHRkamxya2QucG5nLzEyMDB4NjMwd2EucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6aW1hZ2VcIjogXCJodHRwczovL2lzMy1zc2wubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL1B1cnBsZTExNS92NC9lZS9mNS8wNC9lZWY1MDQ0OC00OWNkLTQ3NGItODQyNS0xZWZiOGZjYWZjNmQvY29udHNjaGVkLnR0ZGpscmtkLnBuZy82MDB4NjAwd2EucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndlYi1leHBlcmllbmNlLWFwcC9jb25maWcvZW52aXJvbm1lbnRcIjogXCIlN0IlMjJhcHBWZXJzaW9uJTIyJTNBMSUyQyUyMm1vZHVsZVByZWZpeCUyMiUzQSUyMndlYi1leHBlcmllbmNlLWFwcCUyMiUyQyUyMmVudmlyb25tZW50JTIyJTNBJTIycHJvZHVjdGlvbiUyMiUyQyUyMnJvb3RVUkwlMjIlM0ElMjIlMkYlMjIlMkMlMjJsb2NhdGlvblR5cGUlMjIlM0ElMjJoaXN0b3J5LWhhc2gtcm91dGVyLXNjcm9sbCUyMiUyQyUyMmhpc3RvcnlTdXBwb3J0TWlkZGxld2FyZSUyMiUzQXRydWUlMkMlMjJjb250ZW50U2VjdXJpdHlQb2xpY3lNZXRhJTIyJTNBdHJ1ZSUyQyUyMmNvbnRlbnRTZWN1cml0eVBvbGljeSUyMiUzQSU3QiUyMmRlZmF1bHQtc3JjJTIyJTNBJTVCJTIyJ25vbmUnJTIyJTVEJTJDJTIyaW1nLXNyYyUyMiUzQSU1QiUyMidzZWxmJyUyMiUyQyUyMmh0dHAlM0ElMkYlMkYqLm16c3RhdGljLmNvbSUyMiUyQyUyMioubXpzdGF0aWMuY29tJTIyJTJDJTIyKi5hcHBsZS5jb20lMjIlMkMlMjIqLmdvb2dsZXVzZXJjb250ZW50LmNvbSUyMiUyQyUyMmRhdGElM0ElMjIlNUQlMkMlMjJzdHlsZS1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjIndW5zYWZlLWlubGluZSclMjIlMkMlMjIqLmFwcGxlLmNvbSUyMiU1RCUyQyUyMmZvbnQtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyaHR0cCUzQSUyRiUyRiouYXBwbGUuY29tJTIyJTJDJTIyaHR0cHMlM0ElMkYlMkYqLmFwcGxlLmNvbSUyMiU1RCUyQyUyMm1lZGlhLXNyYyUyMiUzQSU1QiUyMidzZWxmJyUyMiUyQyUyMmJsb2IlM0ElMjIlMkMlMjJodHRwJTNBJTJGJTJGKiUyMiUyQyUyMmh0dHBzJTNBJTJGJTJGKiUyMiU1RCUyQyUyMmNvbm5lY3Qtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyKi5hcHBsZS5jb20lMjIlMkMlMjJodHRwcyUzQSUyRiUyRioubXpzdGF0aWMuY29tJTIyJTJDJTIyKi5tenN0YXRpYy5jb20lMjIlNUQlMkMlMjJzY3JpcHQtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyJ3Vuc2FmZS1pbmxpbmUnJTIyJTJDJTIyJ3Vuc2FmZS1ldmFsJyUyMiUyQyUyMiouYXBwbGUuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6aW1hZ2U6YWx0XCI6IFwiR21haWwgLSBFbWFpbCBieSBHb29nbGUgb24gdGhlIEFwcMKgU3RvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQEFwcFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOmFsdFwiOiBcIkdtYWlsIC0gRW1haWwgYnkgR29vZ2xlIG9uIHRoZSBBcHDCoFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnR5cGVcIjogXCJ3ZWJzaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCLigI5HbWFpbCAtIEVtYWlsIGJ5IEdvb2dsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzp0aXRsZVwiOiBcIuKAjkdtYWlsIC0gRW1haWwgYnkgR29vZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOmhlaWdodFwiOiBcIjYzMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjEzMC4xNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZiOmFwcF9pZFwiOiBcIjExNjU1NjQ2MTc4MDUxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3cG9ydFwiOiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCB2aWV3cG9ydC1maXQ9Y292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWMtZ24tc2VhcmNoLXN1Z2dlc3Rpb25zLWVuYWJsZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IFwi4oCOVGhlIG9mZmljaWFsIEdtYWlsIGFwcCBicmluZ3MgdGhlIGJlc3Qgb2YgR21haWwgdG8geW91ciBpUGhvbmUgb3IgaVBhZCB3aXRoIHJlYWwtdGltZSBub3RpZmljYXRpb25zLCBtdWx0aXBsZSBhY2NvdW50IHN1cHBvcnQsIGFuZCBzZWFyY2ggdGhhdCB3b3JrcyBhY3Jvc3MgYWxsIHlvdXIgbWFpbC5cXG5cXG5XaXRoIHRoZSBHbWFpbCBhcHAsIHlvdSBjYW46XFxu4oCiIFVuZG8gU2VuZCwgdG8gcHJldmVudCBlbWJhcnJhc3NpbmcgbWlzdGFrZXNcXG7igKIgU3dpdGNoIGJldHdlZW4gbXVsdGlwbGUgYWNjb3VudHNcXG7igKIgR2V0IG5vdGlmaWVkIG9m4oCmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmxvY2FsZVwiOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnVybFwiOiBcImh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdXMvYXBwL2dtYWlsLWVtYWlsLWJ5LWdvb2dsZS9pZDQyMjY4OTQ4MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBsZTpjb250ZW50X2lkXCI6IFwiNDIyNjg5NDgwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjc2VfaW1hZ2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vaXMzLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTE1L3Y0L2VlL2Y1LzA0L2VlZjUwNDQ4LTQ5Y2QtNDc0Yi04NDI1LTFlZmI4ZmNhZmM2ZC9jb250c2NoZWQudHRkamxya2QucG5nLzEyMDB4NjMwd2EucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiY3VzdG9tc2VhcmNoI3Jlc3VsdFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuKAjkdvb2dsZSBNeSBCdXNpbmVzcyBvbiB0aGUgQXBwIFN0b3JlXCIsXG4gICAgICAgICAgICBcImh0bWxUaXRsZVwiOiBcIuKAjkdvb2dsZSBNeSBCdXNpbmVzcyBvbiB0aGUgQXBwIFN0b3JlXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2FwcHNlcnZlL21rdC9wL0FMdlRrYllvbncyRXowdjIzTk41NXVxbHItZ0szV2N1a25NOTI3VzVfeVAyQmZDZDRkTHpyMlFnbFhkNVhoZWQxeDk2WDhHZ1hwdTYzWWhaWVNCQ1FuVGNOR0ZsLVJ0Q1QwMlNPSzBsVTc1NWFmZkdJcWliMXk5RS1aV1NqUHFWdHdvc0p3MnplNVRxc19xeDREU0pGYkNuU3l4aTBqaGx4VkhoaXM4YmVhTnM4ZndWYV9kNTV3YUpXanVVbEJlcXIxazB1M3FSdmxKdEw5bXhpY24tWkpaODhRUGZaQTJ4Z1k3Z3hBQ2otX1NjdjRxQ2EycWl6bVZHTEl0WVJXdGpUeFpxRkVMOW9iTVwiLFxuICAgICAgICAgICAgXCJkaXNwbGF5TGlua1wiOiBcInd3dy5nb29nbGUuY29tXCIsXG4gICAgICAgICAgICBcInNuaXBwZXRcIjogXCJNb3JlIHdheXMgdG8gc2hvcDogRmluZCBhbiBBcHBsZSBTdG9yZSBvciBvdGhlciByZXRhaWxlciBuZWFyIHlvdS4gT3IgY2FsbCAxLTgwMC0gTVktQVBQTEUuIENob29zZSB5b3VyIGNvdW50cnkgb3IgcmVnaW9uLiBDb3B5cmlnaHQgwqkgMjAyMSBBcHBsZSBJbmMuIEFsbMKgLi4uXCIsXG4gICAgICAgICAgICBcImh0bWxTbmlwcGV0XCI6IFwiTW9yZSB3YXlzIHRvIHNob3A6IEZpbmQgYW4gPGI+QXBwbGU8L2I+IFN0b3JlIG9yIG90aGVyIHJldGFpbGVyIG5lYXIgeW91LiBPciBjYWxsIDEtODAwLSBNWS08Yj5BUFBMRTwvYj4uIENob29zZSB5b3VyIGNvdW50cnkgb3IgcmVnaW9uLiBDb3B5cmlnaHQgwqkgMjAyMSA8Yj5BcHBsZTwvYj4gSW5jLiBBbGwmbmJzcDsuLi5cIixcbiAgICAgICAgICAgIFwiY2FjaGVJZFwiOiBcIkJraHlHZzlmLXU4SlwiLFxuICAgICAgICAgICAgXCJmb3JtYXR0ZWRVcmxcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tLy4uLi9BTHZUa2JZb253MkV6MHYyM05ONTV1cWxyLSBnSzNXY3Vrbk05MjdXNV8gLi4uXCIsXG4gICAgICAgICAgICBcImh0bWxGb3JtYXR0ZWRVcmxcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tLy4uLi9BTHZUa2JZb253MkV6MHYyM05ONTV1cWxyLSBnSzNXY3Vrbk05MjdXNV8gLi4uXCIsXG4gICAgICAgICAgICBcInBhZ2VtYXBcIjoge1xuICAgICAgICAgICAgICAgIFwiY3NlX3RodW1ibmFpbFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU00yLXE4dzJQRXVVcU9zOGNRdmdWenlQZHlfdUo4UzBKRHdMd25HaTl4QUVvNUtpZE1ZZGw3cGRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiMzEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjE2M1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibWV0YXRhZ3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlXCI6IFwiaHR0cHM6Ly9pczMtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9QdXJwbGUxMjUvdjQvN2QvNTYvODkvN2Q1Njg5ZDgtYmE4Mi1lYzJmLTY0YTQtMzE2ODI0MzZjZDhiL2NvbnRzY2hlZC50bGR5bWR2cC5wbmcvMTIwMHg2MzB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwbGUtaXR1bmVzLWFwcFwiOiBcImFwcC1pZD0zNzUzODA5NDgsIGFwcC1hcmd1bWVudD1odHRwczovL2FwcHMuYXBwbGUuY29tL3VzL2FwcC9nb29nbGUtbXktYnVzaW5lc3MvaWQ4NTMzNzE2MDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2U6d2lkdGhcIjogXCIxMjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6c2l0ZV9uYW1lXCI6IFwiQXBwIFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2FibGUtZGV2aWNlXCI6IFwicGMsbW9iaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOnR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6ZGVzY3JpcHRpb25cIjogXCLigI5FdmVyeSBkYXksIG1pbGxpb25zIG9mIHBlb3BsZSBzZWFyY2ggb24gR29vZ2xlIGZvciBidXNpbmVzc2VzIGxpa2UgeW91cnMuIE1ha2UgeW91ciBCdXNpbmVzcyBQcm9maWxlIG9uIEdvb2dsZSBzdGFuZCBvdXQgZm9yIGZyZWUgYW5kIHR1cm4gdGhvc2Ugc2VhcmNoZXMgaW50byB5b3VyIGN1c3RvbWVycyB3aXRoIHRoZSBHb29nbGUgTXkgQnVzaW5lc3MgYXBwLlxcblxcbk1vcmUgdGhhbiBqdXN0IGEgbG9jYWwgbGlzdGluZzpcXG4tIE1ha2UgZWRpdHMgdG8geW91ciBCdXNpbmVzcyBQcm9maWxlIG9uIHlvdXIgcGhvbmUgYW5kIHNlZeKAplwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZTpzZWN1cmVfdXJsXCI6IFwiaHR0cHM6Ly9pczMtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9QdXJwbGUxMjUvdjQvN2QvNTYvODkvN2Q1Njg5ZDgtYmE4Mi1lYzJmLTY0YTQtMzE2ODI0MzZjZDhiL2NvbnRzY2hlZC50bGR5bWR2cC5wbmcvMTIwMHg2MzB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vaXMzLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTI1L3Y0LzdkLzU2Lzg5LzdkNTY4OWQ4LWJhODItZWMyZi02NGE0LTMxNjgyNDM2Y2Q4Yi9jb250c2NoZWQudGxkeW1kdnAucG5nLzYwMHg2MDB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2ViLWV4cGVyaWVuY2UtYXBwL2NvbmZpZy9lbnZpcm9ubWVudFwiOiBcIiU3QiUyMmFwcFZlcnNpb24lMjIlM0ExJTJDJTIybW9kdWxlUHJlZml4JTIyJTNBJTIyd2ViLWV4cGVyaWVuY2UtYXBwJTIyJTJDJTIyZW52aXJvbm1lbnQlMjIlM0ElMjJwcm9kdWN0aW9uJTIyJTJDJTIycm9vdFVSTCUyMiUzQSUyMiUyRiUyMiUyQyUyMmxvY2F0aW9uVHlwZSUyMiUzQSUyMmhpc3RvcnktaGFzaC1yb3V0ZXItc2Nyb2xsJTIyJTJDJTIyaGlzdG9yeVN1cHBvcnRNaWRkbGV3YXJlJTIyJTNBdHJ1ZSUyQyUyMmNvbnRlbnRTZWN1cml0eVBvbGljeU1ldGElMjIlM0F0cnVlJTJDJTIyY29udGVudFNlY3VyaXR5UG9saWN5JTIyJTNBJTdCJTIyZGVmYXVsdC1zcmMlMjIlM0ElNUIlMjInbm9uZSclMjIlNUQlMkMlMjJpbWctc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyaHR0cCUzQSUyRiUyRioubXpzdGF0aWMuY29tJTIyJTJDJTIyKi5tenN0YXRpYy5jb20lMjIlMkMlMjIqLmFwcGxlLmNvbSUyMiUyQyUyMiouZ29vZ2xldXNlcmNvbnRlbnQuY29tJTIyJTJDJTIyZGF0YSUzQSUyMiU1RCUyQyUyMnN0eWxlLXNyYyUyMiUzQSU1QiUyMidzZWxmJyUyMiUyQyUyMid1bnNhZmUtaW5saW5lJyUyMiUyQyUyMiouYXBwbGUuY29tJTIyJTVEJTJDJTIyZm9udC1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjJodHRwJTNBJTJGJTJGKi5hcHBsZS5jb20lMjIlMkMlMjJodHRwcyUzQSUyRiUyRiouYXBwbGUuY29tJTIyJTVEJTJDJTIybWVkaWEtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyYmxvYiUzQSUyMiUyQyUyMmh0dHAlM0ElMkYlMkYqJTIyJTJDJTIyaHR0cHMlM0ElMkYlMkYqJTIyJTVEJTJDJTIyY29ubmVjdC1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjIqLmFwcGxlLmNvbSUyMiUyQyUyMmh0dHBzJTNBJTJGJTJGKi5tenN0YXRpYy5jb20lMjIlMkMlMjIqLm16c3RhdGljLmNvbSUyMiU1RCUyQyUyMnNjcmlwdC1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjIndW5zYWZlLWlubGluZSclMjIlMkMlMjIndW5zYWZlLWV2YWwnJTIyJTJDJTIyKi5hcHBsZS5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjppbWFnZTphbHRcIjogXCJHb29nbGUgTXkgQnVzaW5lc3Mgb24gdGhlIEFwcMKgU3RvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQEFwcFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOmFsdFwiOiBcIkdvb2dsZSBNeSBCdXNpbmVzcyBvbiB0aGUgQXBwwqBTdG9yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzp0eXBlXCI6IFwid2Vic2l0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOnRpdGxlXCI6IFwi4oCOR29vZ2xlIE15IEJ1c2luZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnRpdGxlXCI6IFwi4oCOR29vZ2xlIE15IEJ1c2luZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOmhlaWdodFwiOiBcIjYzMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjEzMC4xNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZiOmFwcF9pZFwiOiBcIjExNjU1NjQ2MTc4MDUxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3cG9ydFwiOiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCB2aWV3cG9ydC1maXQ9Y292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWMtZ24tc2VhcmNoLXN1Z2dlc3Rpb25zLWVuYWJsZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IFwi4oCORXZlcnkgZGF5LCBtaWxsaW9ucyBvZiBwZW9wbGUgc2VhcmNoIG9uIEdvb2dsZSBmb3IgYnVzaW5lc3NlcyBsaWtlIHlvdXJzLiBNYWtlIHlvdXIgQnVzaW5lc3MgUHJvZmlsZSBvbiBHb29nbGUgc3RhbmQgb3V0IGZvciBmcmVlIGFuZCB0dXJuIHRob3NlIHNlYXJjaGVzIGludG8geW91ciBjdXN0b21lcnMgd2l0aCB0aGUgR29vZ2xlIE15IEJ1c2luZXNzIGFwcC5cXG5cXG5Nb3JlIHRoYW4ganVzdCBhIGxvY2FsIGxpc3Rpbmc6XFxuLSBNYWtlIGVkaXRzIHRvIHlvdXIgQnVzaW5lc3MgUHJvZmlsZSBvbiB5b3VyIHBob25lIGFuZCBzZWXigKZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6bG9jYWxlXCI6IFwiZW5fVVNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dXJsXCI6IFwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvZ29vZ2xlLW15LWJ1c2luZXNzL2lkODUzMzcxNjAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxlOmNvbnRlbnRfaWRcIjogXCI4NTMzNzE2MDFcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNzZV9pbWFnZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9pczMtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9QdXJwbGUxMjUvdjQvN2QvNTYvODkvN2Q1Njg5ZDgtYmE4Mi1lYzJmLTY0YTQtMzE2ODI0MzZjZDhiL2NvbnRzY2hlZC50bGR5bWR2cC5wbmcvMTIwMHg2MzB3YS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJjdXN0b21zZWFyY2gjcmVzdWx0XCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi4oCOR29vZ2xlIFBvZGNhc3RzIG9uIHRoZSBBcHAgU3RvcmVcIixcbiAgICAgICAgICAgIFwiaHRtbFRpdGxlXCI6IFwi4oCOR29vZ2xlIFBvZGNhc3RzIG9uIHRoZSBBcHAgU3RvcmVcIixcbiAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vYXBwc2VydmUvbWt0L3AvQUQtRm5FeGdKRGFRTWhwLWJuZGNpeThMSHRTMGZKUlp1N2NZODFfRVVIZXpqbnVNOEREaDRQT1V6OUIydDZwN25kdTlkMGl5dVNvMTZhbVl6d3ZTX1FwNTY2VlRiTWlZSUtvNlR5UkpoSDlLc2p2S3pyX2RmbTBcIixcbiAgICAgICAgICAgIFwiZGlzcGxheUxpbmtcIjogXCJ3d3cuZ29vZ2xlLmNvbVwiLFxuICAgICAgICAgICAgXCJzbmlwcGV0XCI6IFwiSXQncyBtdWNoIGJldHRlciB0aGFuIHNoaWZ0eSBhcHBsZSBwb2RjYXN0cy4gWW91IGNhbiBsaXN0ZW4gZnJvbSBlYWNoIGVwaXNvZGUgZWFzaWx5LiBXaGVuIHlvdSBzd2l0Y2ggb24gb3RoZXIgcG9kY2FzdCBpbiBhcHBsZSBpdCBpcyBpbXBvc3NpYmxlIHRvIHJldHVybiB0b8KgLi4uXCIsXG4gICAgICAgICAgICBcImh0bWxTbmlwcGV0XCI6IFwiSXQmIzM5O3MgbXVjaCBiZXR0ZXIgdGhhbiBzaGlmdHkgPGI+YXBwbGU8L2I+IHBvZGNhc3RzLiBZb3UgY2FuIGxpc3RlbiBmcm9tIGVhY2ggZXBpc29kZSBlYXNpbHkuIFdoZW4geW91IHN3aXRjaCBvbiBvdGhlciBwb2RjYXN0IGluIDxiPmFwcGxlPC9iPiBpdCBpcyBpbXBvc3NpYmxlIHRvIHJldHVybiB0byZuYnNwOy4uLlwiLFxuICAgICAgICAgICAgXCJjYWNoZUlkXCI6IFwiQ2NQWlZjWEMwTnNKXCIsXG4gICAgICAgICAgICBcImZvcm1hdHRlZFVybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vLi4uL0FELUZuRXhnSkRhUU1ocC1ibmRjaXk4TEh0UzBmSlJadTdjWTgxIF9FVUhlempudU04RERoNFBPVXo5QjJ0NnA3bmR1OWQwaXl1U28xNmFtWXp3dlNfIC4uLlwiLFxuICAgICAgICAgICAgXCJodG1sRm9ybWF0dGVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8uLi4vQUQtRm5FeGdKRGFRTWhwLWJuZGNpeThMSHRTMGZKUlp1N2NZODEgX0VVSGV6am51TThERGg0UE9VejlCMnQ2cDduZHU5ZDBpeXVTbzE2YW1Zend2U18gLi4uXCIsXG4gICAgICAgICAgICBcInBhZ2VtYXBcIjoge1xuICAgICAgICAgICAgICAgIFwiY3NlX3RodW1ibmFpbFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMi5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUk5HNm9RYmJnV20wSVdaWjNwWmhVckxSRzVSeUFHVFdxSWlVazVMVzcwUUFraERQZmUxYVhqOEJsNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjMxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxNjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIm1ldGF0YWdzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZVwiOiBcImh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTE1L3Y0L2RiLzdkLzJkL2RiN2QyZGIyLTAzZjMtYWNhZS0wYjVmLTVmYTRiNDNiMjVlNC9sb2dvX3BvZGNhc3RzX2NvbG9yLTAtMC0xeF9VMDA3ZW1hcmtldGluZy0wLTAtMC02LTAtMC1zUkdCLTAtMC0wLUdMRVMyX1UwMDJjMC01MTJNQi04NS0yMjAtMC0wLnBuZy8xMjAweDYzMHdhLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBsZS1pdHVuZXMtYXBwXCI6IFwiYXBwLWlkPTM3NTM4MDk0OCwgYXBwLWFyZ3VtZW50PWh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdXMvYXBwL2dvb2dsZS1wb2RjYXN0cy9pZDEzOTgwMDAxMDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2U6d2lkdGhcIjogXCIxMjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6c2l0ZV9uYW1lXCI6IFwiQXBwIFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2FibGUtZGV2aWNlXCI6IFwicGMsbW9iaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOnR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6ZGVzY3JpcHRpb25cIjogXCLigI5XaXRoIEdvb2dsZSBQb2RjYXN0cywgeW91IGNhbiBmaW5kIGFuZCBsaXN0ZW4gdG8gdGhlIHdvcmxkJ3MgcG9kY2FzdHMgZm9yIGZyZWUuIFxcblxcbkRpc2NvdmVyIHBvZGNhc3RzIHlvdSdsbCBsb3ZlIFxcbuKXjyBTdWJzY3JpYmUgYW5kIGxpc3RlbiB0byBhbGwgeW91ciBmYXZvcml0ZSBwb2RjYXN0cy4gXFxu4pePIEV4cGxvcmUgc2hvdyBhbmQgZXBpc29kZSByZWNvbW1lbmRhdGlvbnMganVzdCBmb3IgeW91LiBcXG7il48gQnJvd3NlIHBvcHVsYXIgYW5kIHRyZW5kaW5nIHNob3dzIGluIGNvbWVkeSwgbmV3cywgc3BvcnRzLCBhbmQgbW9yZS4gXFxu4peP4oCmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOnNlY3VyZV91cmxcIjogXCJodHRwczovL2lzMS1zc2wubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL1B1cnBsZTExNS92NC9kYi83ZC8yZC9kYjdkMmRiMi0wM2YzLWFjYWUtMGI1Zi01ZmE0YjQzYjI1ZTQvbG9nb19wb2RjYXN0c19jb2xvci0wLTAtMXhfVTAwN2VtYXJrZXRpbmctMC0wLTAtNi0wLTAtc1JHQi0wLTAtMC1HTEVTMl9VMDAyYzAtNTEyTUItODUtMjIwLTAtMC5wbmcvMTIwMHg2MzB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTE1L3Y0L2RiLzdkLzJkL2RiN2QyZGIyLTAzZjMtYWNhZS0wYjVmLTVmYTRiNDNiMjVlNC9sb2dvX3BvZGNhc3RzX2NvbG9yLTAtMC0xeF9VMDA3ZW1hcmtldGluZy0wLTAtMC02LTAtMC1zUkdCLTAtMC0wLUdMRVMyX1UwMDJjMC01MTJNQi04NS0yMjAtMC0wLnBuZy82MDB4NjAwd2EucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndlYi1leHBlcmllbmNlLWFwcC9jb25maWcvZW52aXJvbm1lbnRcIjogXCIlN0IlMjJhcHBWZXJzaW9uJTIyJTNBMSUyQyUyMm1vZHVsZVByZWZpeCUyMiUzQSUyMndlYi1leHBlcmllbmNlLWFwcCUyMiUyQyUyMmVudmlyb25tZW50JTIyJTNBJTIycHJvZHVjdGlvbiUyMiUyQyUyMnJvb3RVUkwlMjIlM0ElMjIlMkYlMjIlMkMlMjJsb2NhdGlvblR5cGUlMjIlM0ElMjJoaXN0b3J5LWhhc2gtcm91dGVyLXNjcm9sbCUyMiUyQyUyMmhpc3RvcnlTdXBwb3J0TWlkZGxld2FyZSUyMiUzQXRydWUlMkMlMjJjb250ZW50U2VjdXJpdHlQb2xpY3lNZXRhJTIyJTNBdHJ1ZSUyQyUyMmNvbnRlbnRTZWN1cml0eVBvbGljeSUyMiUzQSU3QiUyMmRlZmF1bHQtc3JjJTIyJTNBJTVCJTIyJ25vbmUnJTIyJTVEJTJDJTIyaW1nLXNyYyUyMiUzQSU1QiUyMidzZWxmJyUyMiUyQyUyMmh0dHAlM0ElMkYlMkYqLm16c3RhdGljLmNvbSUyMiUyQyUyMioubXpzdGF0aWMuY29tJTIyJTJDJTIyKi5hcHBsZS5jb20lMjIlMkMlMjIqLmdvb2dsZXVzZXJjb250ZW50LmNvbSUyMiUyQyUyMmRhdGElM0ElMjIlNUQlMkMlMjJzdHlsZS1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjIndW5zYWZlLWlubGluZSclMjIlMkMlMjIqLmFwcGxlLmNvbSUyMiU1RCUyQyUyMmZvbnQtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyaHR0cCUzQSUyRiUyRiouYXBwbGUuY29tJTIyJTJDJTIyaHR0cHMlM0ElMkYlMkYqLmFwcGxlLmNvbSUyMiU1RCUyQyUyMm1lZGlhLXNyYyUyMiUzQSU1QiUyMidzZWxmJyUyMiUyQyUyMmJsb2IlM0ElMjIlMkMlMjJodHRwJTNBJTJGJTJGKiUyMiUyQyUyMmh0dHBzJTNBJTJGJTJGKiUyMiU1RCUyQyUyMmNvbm5lY3Qtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyKi5hcHBsZS5jb20lMjIlMkMlMjJodHRwcyUzQSUyRiUyRioubXpzdGF0aWMuY29tJTIyJTJDJTIyKi5tenN0YXRpYy5jb20lMjIlNUQlMkMlMjJzY3JpcHQtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyJ3Vuc2FmZS1pbmxpbmUnJTIyJTJDJTIyJ3Vuc2FmZS1ldmFsJyUyMiUyQyUyMiouYXBwbGUuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6aW1hZ2U6YWx0XCI6IFwiR29vZ2xlIFBvZGNhc3RzIG9uIHRoZSBBcHDCoFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkBBcHBTdG9yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZTphbHRcIjogXCJHb29nbGUgUG9kY2FzdHMgb24gdGhlIEFwcMKgU3RvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dHlwZVwiOiBcIndlYnNpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjp0aXRsZVwiOiBcIuKAjkdvb2dsZSBQb2RjYXN0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzp0aXRsZVwiOiBcIuKAjkdvb2dsZSBQb2RjYXN0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZTpoZWlnaHRcIjogXCI2MzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIxMzAuMTQuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYjphcHBfaWRcIjogXCIxMTY1NTY0NjE3ODA1MTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld3BvcnRcIjogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgdmlld3BvcnQtZml0PWNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjLWduLXNlYXJjaC1zdWdnZXN0aW9ucy1lbmFibGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBcIuKAjldpdGggR29vZ2xlIFBvZGNhc3RzLCB5b3UgY2FuIGZpbmQgYW5kIGxpc3RlbiB0byB0aGUgd29ybGQncyBwb2RjYXN0cyBmb3IgZnJlZS4gXFxuXFxuRGlzY292ZXIgcG9kY2FzdHMgeW91J2xsIGxvdmUgXFxu4pePIFN1YnNjcmliZSBhbmQgbGlzdGVuIHRvIGFsbCB5b3VyIGZhdm9yaXRlIHBvZGNhc3RzLiBcXG7il48gRXhwbG9yZSBzaG93IGFuZCBlcGlzb2RlIHJlY29tbWVuZGF0aW9ucyBqdXN0IGZvciB5b3UuIFxcbuKXjyBCcm93c2UgcG9wdWxhciBhbmQgdHJlbmRpbmcgc2hvd3MgaW4gY29tZWR5LCBuZXdzLCBzcG9ydHMsIGFuZCBtb3JlLiBcXG7il4/igKZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6bG9jYWxlXCI6IFwiZW5fVVNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dXJsXCI6IFwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvZ29vZ2xlLXBvZGNhc3RzL2lkMTM5ODAwMDEwNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBsZTpjb250ZW50X2lkXCI6IFwiMTM5ODAwMDEwNVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3NlX2ltYWdlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2lzMS1zc2wubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL1B1cnBsZTExNS92NC9kYi83ZC8yZC9kYjdkMmRiMi0wM2YzLWFjYWUtMGI1Zi01ZmE0YjQzYjI1ZTQvbG9nb19wb2RjYXN0c19jb2xvci0wLTAtMXhfVTAwN2VtYXJrZXRpbmctMC0wLTAtNi0wLTAtc1JHQi0wLTAtMC1HTEVTMl9VMDAyYzAtNTEyTUItODUtMjIwLTAtMC5wbmcvMTIwMHg2MzB3YS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJjdXN0b21zZWFyY2gjcmVzdWx0XCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXhwb3N1cmUgTm90aWZpY2F0aW9ucyAtIEZBUSB2MS4yIEZJTkFMYmV0dGVyXCIsXG4gICAgICAgICAgICBcImh0bWxUaXRsZVwiOiBcIkV4cG9zdXJlIE5vdGlmaWNhdGlvbnMgLSBGQVEgdjEuMiBGSU5BTGJldHRlclwiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jb3ZpZDE5L2V4cG9zdXJlbm90aWZpY2F0aW9ucy9wZGZzL0V4cG9zdXJlLU5vdGlmaWNhdGlvbi1GQVEtdjEuMi5wZGZcIixcbiAgICAgICAgICAgIFwiZGlzcGxheUxpbmtcIjogXCJ3d3cuZ29vZ2xlLmNvbVwiLFxuICAgICAgICAgICAgXCJzbmlwcGV0XCI6IFwiT24gQXByaWwgMTAsIDIwMjAgR29vZ2xlIGFuZCBBcHBsZSBhbm5vdW5jZWQgYSBqb2ludCBlZmZvcnQgdG8gZW5hYmxlIHRoZSB1c2Ugb2YgQmx1ZXRvb3RoIHRlY2hub2xvZ3kgdG8gaGVscCBnb3Zlcm5tZW50cyBhbmQgaGVhbHRoIGFnZW5jaWVzIHJlZHVjZSB0aGXCoC4uLlwiLFxuICAgICAgICAgICAgXCJodG1sU25pcHBldFwiOiBcIk9uIEFwcmlsIDEwLCAyMDIwIEdvb2dsZSBhbmQgPGI+QXBwbGU8L2I+IGFubm91bmNlZCBhIGpvaW50IGVmZm9ydCB0byBlbmFibGUgdGhlIHVzZSBvZiBCbHVldG9vdGggdGVjaG5vbG9neSB0byBoZWxwIGdvdmVybm1lbnRzIGFuZCBoZWFsdGggYWdlbmNpZXMgcmVkdWNlIHRoZSZuYnNwOy4uLlwiLFxuICAgICAgICAgICAgXCJjYWNoZUlkXCI6IFwiYzM4cWxKX3h4dTBKXCIsXG4gICAgICAgICAgICBcImZvcm1hdHRlZFVybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY292aWQxOS8uLi4vRXhwb3N1cmUtTm90aWZpY2F0aW9uLUZBUS12MS4yLnBkZlwiLFxuICAgICAgICAgICAgXCJodG1sRm9ybWF0dGVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jb3ZpZDE5Ly4uLi9FeHBvc3VyZS1Ob3RpZmljYXRpb24tRkFRLXYxLjIucGRmXCIsXG4gICAgICAgICAgICBcInBhZ2VtYXBcIjoge1xuICAgICAgICAgICAgICAgIFwiY3NlX3RodW1ibmFpbFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUVhUUXhLalg4Tk5BZVUyTUp1Zi1QLTkxMXNhd1d4eDVQc2pQWVBYNF9vTnNDcm1Dd0F6UFphQjhjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiMTk3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjI1NVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibWV0YXRhZ3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGRhdGVcIjogXCJEOjIwMjAwODMxMjI1MTUzWjAwJzAwJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFwiUGFnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRpb25kYXRlXCI6IFwiRDoyMDIwMDgzMTIyNTE1M1owMCcwMCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjZXJcIjogXCJtYWNPUyBWZXJzaW9uIDEwLjE1LjQgKEJ1aWxkIDE5RTI4NykgUXVhcnR6IFBERkNvbnRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJFeHBvc3VyZSBOb3RpZmljYXRpb25zIC0gRkFRIHYxLjIgRklOQUxiZXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNzZV9pbWFnZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwieC1yYXctaW1hZ2U6Ly8vZDE2YzU2MDNkZTIzMmVhMDRmYjk5ZjhlZDcxMDE4YzcyZTZjZmE5NzdhZDNhMzE4MzE4MzRmMDdjMDY0MTM3ZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtaW1lXCI6IFwiYXBwbGljYXRpb24vcGRmXCIsXG4gICAgICAgICAgICBcImZpbGVGb3JtYXRcIjogXCJQREYvQWRvYmUgQWNyb2JhdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcImN1c3RvbXNlYXJjaCNyZXN1bHRcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLigI5Hb29nbGUgQ2FsZW5kYXI6IEdldCBPcmdhbmlzZWQgb24gdGhlIEFwcCBTdG9yZVwiLFxuICAgICAgICAgICAgXCJodG1sVGl0bGVcIjogXCLigI5Hb29nbGUgQ2FsZW5kYXI6IEdldCBPcmdhbmlzZWQgb24gdGhlIEFwcCBTdG9yZVwiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9hcHBzZXJ2ZS9ta3QvcC9BRm53bktVOHJYYXdpcVppZ1JtOHpaanU1NXlmOENlQW1QU2V1d0NsT0Q2dmxkeTM1WlZvQ2JwOW5RNnhGeXk0ZV9IMmNBUkNxX1ZQNjdpQWpJY1JHUWI2VjUtMm5zcGRHSnIyZkVZa3Nla0VFZ3p3Y1A1X3JLcFNaQVluemNlN3hiTVwiLFxuICAgICAgICAgICAgXCJkaXNwbGF5TGlua1wiOiBcInd3dy5nb29nbGUuY29tXCIsXG4gICAgICAgICAgICBcInNuaXBwZXRcIjogXCJTZWUgQWxsIMK3IEZpbmQgYSByZXRhaWxlciBuZWFyIHlvdS4gTGF0aW4gQW1lcmljYSBhbmQgdGhlIENhcmliYmVhbiBFc3Bhw7FvbC4gQ29weXJpZ2h0IMKpIDIwMjEgQXBwbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBQcml2YWN5IFBvbGljeSBMZWdhbCBTaXRlIE1hcC5cIixcbiAgICAgICAgICAgIFwiaHRtbFNuaXBwZXRcIjogXCJTZWUgQWxsICZtaWRkb3Q7IEZpbmQgYSByZXRhaWxlciBuZWFyIHlvdS4gTGF0aW4gQW1lcmljYSBhbmQgdGhlIENhcmliYmVhbiBFc3Bhw7FvbC4gQ29weXJpZ2h0IMKpIDIwMjEgPGI+QXBwbGU8L2I+IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gUHJpdmFjeSBQb2xpY3kgTGVnYWwgU2l0ZSBNYXAuXCIsXG4gICAgICAgICAgICBcImNhY2hlSWRcIjogXCIxc0tBazdLaUtqb0pcIixcbiAgICAgICAgICAgIFwiZm9ybWF0dGVkVXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8uLi4vIEFGbnduS1U4clhhd2lxWmlnUm04elpqdTU1eWY4Q2VBbVBTZXV3Q2xPRDZ2bGR5MzVaVm9DYnA5Li4uXCIsXG4gICAgICAgICAgICBcImh0bWxGb3JtYXR0ZWRVcmxcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tLy4uLi8gQUZud25LVThyWGF3aXFaaWdSbTh6Wmp1NTV5ZjhDZUFtUFNldXdDbE9ENnZsZHkzNVpWb0NicDkuLi5cIixcbiAgICAgICAgICAgIFwicGFnZW1hcFwiOiB7XG4gICAgICAgICAgICAgICAgXCJjc2VfdGh1bWJuYWlsXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2VuY3J5cHRlZC10Ym4yLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTNWVvUUUxMHhtLTlwZEdoTW9icThqTmx6UW5NVV9saHRYcm9tbVcyVFNZOEVlWVprQmtzeE1XY2wwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiMzEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjE2M1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibWV0YXRhZ3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlXCI6IFwiaHR0cHM6Ly9pczItc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9QdXJwbGUxMjUvdjQvMDQvYWQvZTcvMDRhZGU3ZDktZjJiZS04MWYxLTUxMGQtZGFjMzhlYjkyZjBlL2NvbnRzY2hlZC5meHVkanVoaS5wbmcvMTIwMHg2MzB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwbGUtaXR1bmVzLWFwcFwiOiBcImFwcC1pZD0zNzUzODA5NDgsIGFwcC1hcmd1bWVudD1odHRwczovL2FwcHMuYXBwbGUuY29tL2t5L2FwcC9nb29nbGUtY2FsZW5kYXItZ2V0LW9yZ2FuaXNlZC9pZDkwOTMxOTI5MlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZTp3aWR0aFwiOiBcIjEyMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzpzaXRlX25hbWVcIjogXCJBcHDCoFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2FibGUtZGV2aWNlXCI6IFwicGMsbW9iaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOnR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6ZGVzY3JpcHRpb25cIjogXCLigI5HZXQgdGhlIG9mZmljaWFsIEdvb2dsZSBDYWxlbmRhciBhcHAgZm9yIHlvdXIgaVBob25lIG9yIGlQYWQgdG8gc2F2ZSB0aW1lIGFuZCBtYWtlIHRoZSBtb3N0IG9mIGV2ZXJ5IGRheS5cXG5cXG7igKIgRGlmZmVyZW50IHdheXMgdG8gdmlldyB5b3VyIGNhbGVuZGFyIOKAkyBxdWlja2x5IHN3aXRjaCBiZXR3ZWVuIG1vbnRoLCB3ZWVrIGFuZCBkYXkgdmlld3MuXFxu4oCiIEV2ZW50cyBmcm9tIEdtYWlsIOKAkyBmbGlnaHQsIGhvdGVsLCBjb25jZXJ0LCByZXN0YXVyYW50IHJlc2VydmF0aW9ucyBhbmQgbW9yZSBhcmUgYWRkZWQgdG8geW91ciBjYWxlbuKAplwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZTpzZWN1cmVfdXJsXCI6IFwiaHR0cHM6Ly9pczItc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9QdXJwbGUxMjUvdjQvMDQvYWQvZTcvMDRhZGU3ZDktZjJiZS04MWYxLTUxMGQtZGFjMzhlYjkyZjBlL2NvbnRzY2hlZC5meHVkanVoaS5wbmcvMTIwMHg2MzB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vaXMyLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUHVycGxlMTI1L3Y0LzA0L2FkL2U3LzA0YWRlN2Q5LWYyYmUtODFmMS01MTBkLWRhYzM4ZWI5MmYwZS9jb250c2NoZWQuZnh1ZGp1aGkucG5nLzYwMHg2MDB3YS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2ViLWV4cGVyaWVuY2UtYXBwL2NvbmZpZy9lbnZpcm9ubWVudFwiOiBcIiU3QiUyMmFwcFZlcnNpb24lMjIlM0ExJTJDJTIybW9kdWxlUHJlZml4JTIyJTNBJTIyd2ViLWV4cGVyaWVuY2UtYXBwJTIyJTJDJTIyZW52aXJvbm1lbnQlMjIlM0ElMjJwcm9kdWN0aW9uJTIyJTJDJTIycm9vdFVSTCUyMiUzQSUyMiUyRiUyMiUyQyUyMmxvY2F0aW9uVHlwZSUyMiUzQSUyMmhpc3RvcnktaGFzaC1yb3V0ZXItc2Nyb2xsJTIyJTJDJTIyaGlzdG9yeVN1cHBvcnRNaWRkbGV3YXJlJTIyJTNBdHJ1ZSUyQyUyMmNvbnRlbnRTZWN1cml0eVBvbGljeU1ldGElMjIlM0F0cnVlJTJDJTIyY29udGVudFNlY3VyaXR5UG9saWN5JTIyJTNBJTdCJTIyZGVmYXVsdC1zcmMlMjIlM0ElNUIlMjInbm9uZSclMjIlNUQlMkMlMjJpbWctc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyaHR0cCUzQSUyRiUyRioubXpzdGF0aWMuY29tJTIyJTJDJTIyKi5tenN0YXRpYy5jb20lMjIlMkMlMjIqLmFwcGxlLmNvbSUyMiUyQyUyMiouZ29vZ2xldXNlcmNvbnRlbnQuY29tJTIyJTJDJTIyZGF0YSUzQSUyMiU1RCUyQyUyMnN0eWxlLXNyYyUyMiUzQSU1QiUyMidzZWxmJyUyMiUyQyUyMid1bnNhZmUtaW5saW5lJyUyMiUyQyUyMiouYXBwbGUuY29tJTIyJTVEJTJDJTIyZm9udC1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjJodHRwJTNBJTJGJTJGKi5hcHBsZS5jb20lMjIlMkMlMjJodHRwcyUzQSUyRiUyRiouYXBwbGUuY29tJTIyJTVEJTJDJTIybWVkaWEtc3JjJTIyJTNBJTVCJTIyJ3NlbGYnJTIyJTJDJTIyYmxvYiUzQSUyMiUyQyUyMmh0dHAlM0ElMkYlMkYqJTIyJTJDJTIyaHR0cHMlM0ElMkYlMkYqJTIyJTVEJTJDJTIyY29ubmVjdC1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjIqLmFwcGxlLmNvbSUyMiUyQyUyMmh0dHBzJTNBJTJGJTJGKi5tenN0YXRpYy5jb20lMjIlMkMlMjIqLm16c3RhdGljLmNvbSUyMiU1RCUyQyUyMnNjcmlwdC1zcmMlMjIlM0ElNUIlMjInc2VsZiclMjIlMkMlMjIndW5zYWZlLWlubGluZSclMjIlMkMlMjIndW5zYWZlLWV2YWwnJTIyJTJDJTIyKi5hcHBsZS5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjppbWFnZTphbHRcIjogXCJHb29nbGUgQ2FsZW5kYXI6IEdldCBPcmdhbmlzZWQgb24gdGhlIEFwcMKgU3RvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQEFwcFN0b3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOmFsdFwiOiBcIkdvb2dsZSBDYWxlbmRhcjogR2V0IE9yZ2FuaXNlZCBvbiB0aGUgQXBwwqBTdG9yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzp0eXBlXCI6IFwid2Vic2l0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOnRpdGxlXCI6IFwi4oCOR29vZ2xlIENhbGVuZGFyOiBHZXQgT3JnYW5pc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnRpdGxlXCI6IFwi4oCOR29vZ2xlIENhbGVuZGFyOiBHZXQgT3JnYW5pc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOmhlaWdodFwiOiBcIjYzMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjEzMC4xNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZiOmFwcF9pZFwiOiBcIjExNjU1NjQ2MTc4MDUxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3cG9ydFwiOiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCB2aWV3cG9ydC1maXQ9Y292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWMtZ24tc2VhcmNoLXN1Z2dlc3Rpb25zLWVuYWJsZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IFwi4oCOR2V0IHRoZSBvZmZpY2lhbCBHb29nbGUgQ2FsZW5kYXIgYXBwIGZvciB5b3VyIGlQaG9uZSBvciBpUGFkIHRvIHNhdmUgdGltZSBhbmQgbWFrZSB0aGUgbW9zdCBvZiBldmVyeSBkYXkuXFxuXFxu4oCiIERpZmZlcmVudCB3YXlzIHRvIHZpZXcgeW91ciBjYWxlbmRhciDigJMgcXVpY2tseSBzd2l0Y2ggYmV0d2VlbiBtb250aCwgd2VlayBhbmQgZGF5IHZpZXdzLlxcbuKAoiBFdmVudHMgZnJvbSBHbWFpbCDigJMgZmxpZ2h0LCBob3RlbCwgY29uY2VydCwgcmVzdGF1cmFudCByZXNlcnZhdGlvbnMgYW5kIG1vcmUgYXJlIGFkZGVkIHRvIHlvdXIgY2FsZW7igKZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6bG9jYWxlXCI6IFwiZW5fR0JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dXJsXCI6IFwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS9reS9hcHAvZ29vZ2xlLWNhbGVuZGFyLWdldC1vcmdhbmlzZWQvaWQ5MDkzMTkyOTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwbGU6Y29udGVudF9pZFwiOiBcIjkwOTMxOTI5MlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3NlX2ltYWdlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2lzMi1zc2wubXpzdGF0aWMuY29tL2ltYWdlL3RodW1iL1B1cnBsZTEyNS92NC8wNC9hZC9lNy8wNGFkZTdkOS1mMmJlLTgxZjEtNTEwZC1kYWMzOGViOTJmMGUvY29udHNjaGVkLmZ4dWRqdWhpLnBuZy8xMjAweDYzMHdhLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcImN1c3RvbXNlYXJjaCNyZXN1bHRcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJJbnRlbGxpZ2VudCBUcmFja2luZyBQcmV2ZW50aW9uIHwgV2ViS2l0XCIsXG4gICAgICAgICAgICBcImh0bWxUaXRsZVwiOiBcIkludGVsbGlnZW50IFRyYWNraW5nIFByZXZlbnRpb24gfCBXZWJLaXRcIixcbiAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vYXBwc2VydmUvbWt0L3AvQVBEazRzTjQ4ckNldjhVWWxuZnJHcExHaXFCM1R1VTVtcE1xNFVyeHlDcTZwTEJzeFNzNWxHbTFmU0JlZHVUV3VNYlF1cUdiQktZZmRCRG5abXpMSDAycHpOQmJvY2JxenE5QVp1S1FIWENqV3U1Yzd3WWtCeVdELW5qY0EzZ25fSG5YOGhUeDJLMFVoa09Cc1ozZkphU2h1WndcIixcbiAgICAgICAgICAgIFwiZGlzcGxheUxpbmtcIjogXCJ3d3cuZ29vZ2xlLmNvbVwiLFxuICAgICAgICAgICAgXCJzbmlwcGV0XCI6IFwiSnVuIDUsIDIwMTcgLi4uIC4uLiBFUzZMZWFybiBtb3JlIMK3IEB3ZWJraXQgwrcgU2l0ZSBNYXAgwrcgUHJpdmFjeSBQb2xpY3kgwrcgTGljZW5zaW5nIFdlYktpdCDCtyBXZWJLaXQgYW5kIHRoZSBXZWJLaXQgbG9nbyBhcmUgdHJhZGVtYXJrcyBvZiBBcHBsZSBJbmMuXCIsXG4gICAgICAgICAgICBcImh0bWxTbmlwcGV0XCI6IFwiSnVuIDUsIDIwMTcgPGI+Li4uPC9iPiAuLi4gRVM2TGVhcm4gbW9yZSAmbWlkZG90OyBAd2Via2l0ICZtaWRkb3Q7IFNpdGUgTWFwICZtaWRkb3Q7IFByaXZhY3kgUG9saWN5ICZtaWRkb3Q7IExpY2Vuc2luZyBXZWJLaXQgJm1pZGRvdDsgV2ViS2l0IGFuZCB0aGUgV2ViS2l0IGxvZ28gYXJlIHRyYWRlbWFya3Mgb2YgPGI+QXBwbGU8L2I+IEluYy5cIixcbiAgICAgICAgICAgIFwiY2FjaGVJZFwiOiBcImxzRUxMbjJDVlo0SlwiLFxuICAgICAgICAgICAgXCJmb3JtYXR0ZWRVcmxcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tLy4uLi8gQVBEazRzTjQ4ckNldjhVWWxuZnJHcExHaXFCM1R1VTVtcE1xNFVyeHlDcTZwTEJzeFNzNWxHbTEuLi5cIixcbiAgICAgICAgICAgIFwiaHRtbEZvcm1hdHRlZFVybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vLi4uLyBBUERrNHNONDhyQ2V2OFVZbG5mckdwTEdpcUIzVHVVNW1wTXE0VXJ4eUNxNnBMQnN4U3M1bEdtMS4uLlwiLFxuICAgICAgICAgICAgXCJwYWdlbWFwXCI6IHtcbiAgICAgICAgICAgICAgICBcImNzZV90aHVtYm5haWxcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjEuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JzUGdTT21hNlpIRl9LNjRkVXlXOG9tMzFvSjlyV0hPdGlVcjE2eldpOEdhY0lwV21lck8xTDd3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiNDA4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEyNFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibWV0YXRhZ3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uLW5hbWVcIjogXCJXZWJLaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2VcIjogXCJodHRwczovL3dlYmtpdC5vcmcvd3AtY29udGVudC91cGxvYWRzL3RyYWNraW5nLXByZXZlbnRpb24tdGltZWxpbmUucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjp0aXRsZVwiOiBcIkludGVsbGlnZW50IFRyYWNraW5nIFByZXZlbnRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dHlwZVwiOiBcImFydGljbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiOiBcIjIwMTctMDYtMDVUMTQ6MDA6MzgtMDc6MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJ0aWNsZTpzZWN0aW9uXCI6IFwiUHJpdmFjeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdXBwb3J0ZWQtY29sb3Itc2NoZW1lc1wiOiBcImxpZ2h0IGRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6c2l0ZV9uYW1lXCI6IFwiV2ViS2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnRpdGxlXCI6IFwiSW50ZWxsaWdlbnQgVHJhY2tpbmcgUHJldmVudGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmNyZWF0b3JcIjogXCJAam9obndpbGFuZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmRlc2NyaXB0aW9uXCI6IFwiTm90ZTogUmVhZCBhYm91dCBpbXByb3ZlbWVudHMgdG8gdGhpcyB0ZWNobm9sb2d5IGluIHJlY2VudCBibG9nIHBvc3RzIGFib3V0IEludGVsbGlnZW50IFRyYWNraW5nIFByZXZlbnRpb24sIGFuZCB0aGUgU3RvcmFnZSBBY2Nlc3MgQVBJLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmltYWdlOnNyY1wiOiBcImh0dHBzOi8vd2Via2l0Lm9yZy93cC1jb250ZW50L3VwbG9hZHMvdHJhY2tpbmctcHJldmVudGlvbi10aW1lbGluZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJ0aWNsZTp0YWdcIjogXCJTdG9yYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkB3ZWJraXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCI6IFwiMjAxOS0wMi0yMVQxMDoyODoxOS0wODowMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3cG9ydFwiOiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCB1c2VyLXNjYWxhYmxlPXllcywgdmlld3BvcnQtZml0PWNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjogXCJOb3RlOiBSZWFkIGFib3V0IGltcHJvdmVtZW50cyB0byB0aGlzIHRlY2hub2xvZ3kgaW4gcmVjZW50IGJsb2cgcG9zdHMgYWJvdXQgSW50ZWxsaWdlbnQgVHJhY2tpbmcgUHJldmVudGlvbiwgYW5kIHRoZSBTdG9yYWdlIEFjY2VzcyBBUEkuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZiOmFkbWluc1wiOiBcIjEwODUwODg4NjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dXJsXCI6IFwiaHR0cHM6Ly93ZWJraXQub3JnL2Jsb2cvNzY3NS9pbnRlbGxpZ2VudC10cmFja2luZy1wcmV2ZW50aW9uL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3NlX2ltYWdlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL3dlYmtpdC5vcmcvd3AtY29udGVudC91cGxvYWRzL3RyYWNraW5nLXByZXZlbnRpb24tdGltZWxpbmUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiY3VzdG9tc2VhcmNoI3Jlc3VsdFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFwcGxlJ3MgMTYtaW5jaCBNYWNCb29rIFBybyBpcyBoZXJlLCBhbmQgaXQgaGFzIGEgZ29vZCBrZXlib2FyZCAuLi5cIixcbiAgICAgICAgICAgIFwiaHRtbFRpdGxlXCI6IFwiPGI+QXBwbGUmIzM5O3M8L2I+IDE2LWluY2ggTWFjQm9vayBQcm8gaXMgaGVyZSwgYW5kIGl0IGhhcyBhIGdvb2Qga2V5Ym9hcmQgLi4uXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2FwcHNlcnZlL21rdC9wL0FGbnduS1htTUV1SUhnTEpMTDNKZHZ4THBOVnRMeGdhWGZqdTI0ZEtJd2FOWlNvQlI4WVZpYWFzd2VVWDBoLVNNaGZzSjh3SE5WNG92SW0tcnZDZi1hOWhLMlloNGoyNWdKa0FuMjVRUnJPQlFjdGZLUHhfeXg0Q2lMQVNCbGRIQlNTQTFLMF9jVEt1ZFc5Ylk1RHlyRHpCR0ZROFV2VkRIMk52MUxOc3FSZ0FfT3hDQ1hINDczczl6b2V5ODFJTWVReFkxOTlHaWZ0RXFBVDhKRmhseGI0ZWdWeGhYd1wiLFxuICAgICAgICAgICAgXCJkaXNwbGF5TGlua1wiOiBcInd3dy5nb29nbGUuY29tXCIsXG4gICAgICAgICAgICBcInNuaXBwZXRcIjogXCJOb3YgMTMsIDIwMTkgLi4uIEFwcGxlIGhhcyBsYXVuY2hlZCBhIG5ldyAxNi1pbmNoIE1hY0Jvb2sgUHJvIHRvZGF5LCBhdmFpbGFibGUgZm9yIHByZS1vcmRlciBub3cgYW5kIGluIHN0b3JlcyBsYXRlciB0aGlzIHdlZWsuIFRoZSBzdGFydGluZyBwcmljZSBvZiAkMjM5OSBpc8KgLi4uXCIsXG4gICAgICAgICAgICBcImh0bWxTbmlwcGV0XCI6IFwiTm92IDEzLCAyMDE5IDxiPi4uLjwvYj4gPGI+QXBwbGU8L2I+IGhhcyBsYXVuY2hlZCBhIG5ldyAxNi1pbmNoIE1hY0Jvb2sgUHJvIHRvZGF5LCBhdmFpbGFibGUgZm9yIHByZS1vcmRlciBub3cgYW5kIGluIHN0b3JlcyBsYXRlciB0aGlzIHdlZWsuIFRoZSBzdGFydGluZyBwcmljZSBvZiAkMjM5OSBpcyZuYnNwOy4uLlwiLFxuICAgICAgICAgICAgXCJjYWNoZUlkXCI6IFwiZWRHdVdXY1FuV2tKXCIsXG4gICAgICAgICAgICBcImZvcm1hdHRlZFVybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vLi4uLyBBRm53bktYbU1FdUlIZ0xKTEwzSmR2eExwTlZ0THhnYVhmanUyNGRLSXdhTlpTb0JSOFlWaWFhLi4uXCIsXG4gICAgICAgICAgICBcImh0bWxGb3JtYXR0ZWRVcmxcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tLy4uLi8gQUZud25LWG1NRXVJSGdMSkxMM0pkdnhMcE5WdEx4Z2FYZmp1MjRkS0l3YU5aU29CUjhZVmlhYS4uLlwiLFxuICAgICAgICAgICAgXCJwYWdlbWFwXCI6IHtcbiAgICAgICAgICAgICAgICBcImNzZV90aHVtYm5haWxcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjIuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1FBbmd0bjRNUnRMVXlLYmpFNTlROG0wendJM2ZmUXA3QVNpbjJzY0hsMklyVHhjYlRzbjI3Qmx6YjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIzMTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTYyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJtZXRhdGFnc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6aW1hZ2VcIjogXCJodHRwczovL2Nkbi52b3gtY2RuLmNvbS90aHVtYm9yL3FsZjR5X2xpbXp6Y1hwYlF3bkppb0ZKU2RvMD0vMHgxNDY6MjA0MHgxMjE0L2ZpdC1pbi8xMjAweDYzMC9jZG4udm94LWNkbi5jb20vdXBsb2Fkcy9jaG9ydXNfYXNzZXQvZmlsZS8xOTM3MjAyOC9ha3JhbGVzXzE5MTExMl8zNzc4XzAxMjYuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFydGljbGU6cHVibGlzaGVkX3RpbWVcIjogXCIyMDE5LTExLTEzVDA4OjMwOjAwLTA1OjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmltYWdlOndpZHRoXCI6IFwiMTIwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0dGVyOmNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnNpdGVfbmFtZVwiOiBcIlRoZSBWZXJnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzYWlsdGhydS50YWdzXCI6IFwiZ2VuZXJhbCx0aGUtdmVyZ2UsZnJvbnQtcGFnZSxhcHBsZSxoYW5kcy1vbixmZWF0dXJlZC12aWRlbyx0ZWNoLGZlYXR1cmVkLXN0b3J5LGxhcHRvcHMsYXBwbGUtbWFjLW9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6dXJsXCI6IFwiaHR0cHM6Ly93d3cudGhldmVyZ2UuY29tLzIwMTkvMTEvMTMvMjA5NjIzODAvYXBwbGVzLTE2LWluY2gtbWFjYm9vay1wcm8ta2V5Ym9hcmQtc2NyZWVuLXNwZWFrZXJzLXByb2Nlc3NvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiOiBcIlZlcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcnNlbHktYXV0aG9yXCI6IFwiRGlldGVyIEJvaG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXNhcHBsaWNhdGlvbi10aWxlaW1hZ2VcIjogXCJodHRwczovL2Nkbi52b3gtY2RuLmNvbS91cGxvYWRzL2Nob3J1c19hc3NldC9maWxlLzczOTYxMTMvMjIxYTY3YzgtYTEwZi0xMWU2LThmYWUtOTgzMTA3MDA4NjkwLjAucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOmRlc2NyaXB0aW9uXCI6IFwiR29vZGJ5ZSwgQnV0dGVyZmx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFydGljbGU6cHVibGlzaGVyXCI6IFwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vdmVyZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vY2RuLnZveC1jZG4uY29tL3RodW1ib3IvdEItbU1OaS1vRDFWNkgzSUlZWnhQcnl4YjNVPS8weDE3MDoyMDQweDExOTAvZml0LWluLzEyMDB4NjAwL2Nkbi52b3gtY2RuLmNvbS91cGxvYWRzL2Nob3J1c19hc3NldC9maWxlLzE5MzcyMDI4L2FrcmFsZXNfMTkxMTEyXzM3NzhfMDEyNi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWhyZWZzLXNpdGUtdmVyaWZpY2F0aW9uXCI6IFwiMWU1N2E2MDk5MjIwMzdhM2ZiZGMxYzIyZWZkNzMzNDExM2YxNzRmMTU2MDhmMzdlMWI4NTM4YTdiNGNlNjRjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJzZWx5LXR5cGVcIjogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcInZlcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFydGljbGU6bW9kaWZpZWRfdGltZVwiOiBcIjIwMTktMTEtMTNUMDg6MzA6MDAtMDU6MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyc2VseS1saW5rXCI6IFwiaHR0cHM6Ly93d3cudGhldmVyZ2UuY29tLzIwMTkvMTEvMTMvMjA5NjIzODAvYXBwbGVzLTE2LWluY2gtbWFjYm9vay1wcm8ta2V5Ym9hcmQtc2NyZWVuLXNwZWFrZXJzLXByb2Nlc3NvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzYWlsdGhydS50aXRsZVwiOiBcIkFwcGxl4oCZcyAxNi1pbmNoIE1hY0Jvb2sgUHJvIGlzIGhlcmUsIGFuZCBpdCBoYXMgYSBnb29kIGtleWJvYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcnNlbHktaW1hZ2UtdXJsXCI6IFwiaHR0cHM6Ly9jZG4udm94LWNkbi5jb20vdGh1bWJvci9DLTRtX3pzYnFQTkE2Y1pVR09XaVhQOXV5OVE9LzB4MTA2OjIwNDB4MTI1NC8xNjAweDkwMC9jZG4udm94LWNkbi5jb20vdXBsb2Fkcy9jaG9ydXNfaW1hZ2UvaW1hZ2UvNjU2OTEwMTMvYWtyYWxlc18xOTExMTJfMzc3OF8wMTI2LjAuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcnNlbHktc2VjdGlvblwiOiBcImZyb250LXBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXNhcHBsaWNhdGlvbi10aWxlY29sb3JcIjogXCIjMzkzMDkyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNhaWx0aHJ1LmRhdGVcIjogXCIyMDE5LTExLTEzVDA4OjMwOjAwLTA1OjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9nOnR5cGVcIjogXCJhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCJBcHBsZeKAmXMgMTYtaW5jaCBNYWNCb29rIFBybyBpcyBoZXJlLCBhbmQgaXQgaGFzIGEgZ29vZCBrZXlib2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtc3ZhbGlkYXRlLjAxXCI6IFwiRDM4NUQwMzI2QTNBRTE0NDIwNUMyOThEQjM0QjRFOTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IFwiRGlldGVyIEJvaG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2c6dGl0bGVcIjogXCJBcHBsZeKAmXMgMTYtaW5jaCBNYWNCb29rIFBybyBpcyBoZXJlLCBhbmQgaXQgaGFzIGEgZ29vZCBrZXlib2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzppbWFnZTpoZWlnaHRcIjogXCI2MzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2FpbHRocnUuaW1hZ2UudGh1bWJcIjogXCJodHRwczovL2Nkbi52b3gtY2RuLmNvbS90aHVtYm9yL2NKU1l6eDVoeW52empidlNzUmZfSU5TY3dsUT0vMzQweDA6MTcwMHgxMzYwLzIwMHgyMDAvY2RuLnZveC1jZG4uY29tL3VwbG9hZHMvY2hvcnVzX2ltYWdlL2ltYWdlLzY1NjkxMDEzL2FrcmFsZXNfMTkxMTEyXzM3NzhfMDEyNi4wLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJzZWx5LXRpdGxlXCI6IFwiQXBwbGXigJlzIDE2LWluY2ggTWFjQm9vayBQcm8gaXMgaGVyZSwgYW5kIGl0IGhhcyBhIGdvb2Qga2V5Ym9hcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJ0aWNsZTphdXRob3JcIjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGlldGVyLmJvaG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGUtdG9vbHNcIjogXCJodHRwczovL3d3dy50aGV2ZXJnZS5jb20vc3R5bGUvY29tbXVuaXR5LzM3Mi9kNzljYTJlOTYzMjliOGZjMTdkMWJlODU0ZmUxZjcxOS90b29scy5jc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyc2VseS1wdWItZGF0ZVwiOiBcIjIwMTktMTEtMTNUMDg6MzA6MDAtMDU6MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmI6YXBwX2lkXCI6IFwiNTQ5OTIzMjg4Mzk1MzA0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNhaWx0aHJ1LmRlc2NyaXB0aW9uXCI6IFwiQXBwbGUgaGFzIGxhdW5jaGVkIGEgbmV3IDE2LWluY2ggTWFjQm9vayBQcm8gdG9kYXksIGF2YWlsYWJsZSBmb3IgcHJlLW9yZGVyIG5vdyBhbmQgaW4gc3RvcmVzIGxhdGVyIHRoaXMgd2Vlay4gVGhlIHN0YXJ0aW5nIHByaWNlIG9mICQyLDM5OSBpcyB0aGUgc2FtZSBwcmljZSBhcyB0aGUgcHJldmlvdXMgMTUtaW5jaCBNYWNCb29rIFBybywgd2hpY2ggdGhpcyBvbmUgcmVwbGFjZXMuIEl0IGhhcyBuZXcgcHJvY2Vzc29ycywgYmV0dGVyIHNwZWFrZXJzLCBhbmQgKG9idmlvdXNseSkgYSBsYXJnZXIgc2NyZWVuLiBCdXQgSSBrbm93IHRoZSBtb3N0IGltcG9ydGFudCBxdWVzdGlvbiB5b3UgaGF2ZSBpcyB3aGV0aGVyIHRoZSBrZXlib2FyZCBpcyBhbnkgZ29vZC4gUmVhZGVyOiBpdCBpcyBnb29kLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJzZWx5LXRhZ3NcIjogXCJ2ZXJnZSxmcm9udC1wYWdlLGFwcGxlLGhhbmRzLW9uLGZlYXR1cmVkLXZpZGVvLHRlY2gsZmVhdHVyZWQtc3RvcnksbGFwdG9wcyxhcHBsZS1tYWMtb3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0YnJhaW5zZWN0aW9uXCI6IFwiYXBwbGUtbWFjLW9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdwb3J0XCI6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBcIkdvb2RieWUsIEJ1dHRlcmZseVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZzp1cmxcIjogXCJodHRwczovL3d3dy50aGV2ZXJnZS5jb20vMjAxOS8xMS8xMy8yMDk2MjM4MC9hcHBsZXMtMTYtaW5jaC1tYWNib29rLXByby1rZXlib2FyZC1zY3JlZW4tc3BlYWtlcnMtcHJvY2Vzc29yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNhaWx0aHJ1LmltYWdlLmZ1bGxcIjogXCJodHRwczovL2Nkbi52b3gtY2RuLmNvbS90aHVtYm9yL0MtNG1fenNicVBOQTZjWlVHT1dpWFA5dXk5UT0vMHgxMDY6MjA0MHgxMjU0LzE2MDB4OTAwL2Nkbi52b3gtY2RuLmNvbS91cGxvYWRzL2Nob3J1c19pbWFnZS9pbWFnZS82NTY5MTAxMy9ha3JhbGVzXzE5MTExMl8zNzc4XzAxMjYuMC5qcGdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNzZV9pbWFnZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9jZG4udm94LWNkbi5jb20vdGh1bWJvci9xbGY0eV9saW16emNYcGJRd25KaW9GSlNkbzA9LzB4MTQ2OjIwNDB4MTIxNC9maXQtaW4vMTIwMHg2MzAvY2RuLnZveC1jZG4uY29tL3VwbG9hZHMvY2hvcnVzX2Fzc2V0L2ZpbGUvMTkzNzIwMjgvYWtyYWxlc18xOTExMTJfMzc3OF8wMTI2LmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tICcuLi9Db21wb25lbnRzL1NlYXJjaFJlc3VsdHMnO1xuXG5cbmltcG9ydCBSZXNwb25zZSBmcm9tICcuLi9SZXNwb25zZSc7XG5cbmZ1bmN0aW9uIFNlYXJjaCh7cmVzdWx0c30pIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPntyb3V0ZXIucXVlcnkudGVybX0tRGFyayBTZWFyY2g8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgXG4gICAgICAgICAgIHsvKiBTZWFyY2ggUmVzdWx0cyAqL31cbiAgICAgICAgICAgPFNlYXJjaFJlc3VsdHMgcmVzdWx0cz17cmVzdWx0c30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgdXNlRHVtbXlEYXRhPWZhbHNlO1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBjb250ZXh0LnF1ZXJ5LnN0YXJ0IHx8IFwiMFwiO1xuICAgIGNvbnN0IGRhdGEgPSB1c2VEdW1teURhdGEgPyBSZXNwb25zZSA6YXdhaXQgZmV0Y2ggKFxuICAgICAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY3VzdG9tc2VhcmNoL3YxP2tleT0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9JmN4PSR7cHJvY2Vzcy5lbnYuQ09OVEVYVF9LRVl9JnE9JHtjb250ZXh0LnF1ZXJ5LnRlcm19XG4gICAgICAgICZzdGFydD0ke3N0YXJ0SW5kZXh9YFxuICAgICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHByb3BzIDoge1xuICAgICAgICAgICAgICAgIHJlc3VsdHM6ZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXJvaWNvbnMtcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=