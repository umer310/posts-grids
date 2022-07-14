/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend-components/ComponentsSide.js":
/*!**************************************************!*\
  !*** ./src/backend-components/ComponentsSide.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function ComponentsSide() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Working "));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsSide);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _backend_components_ComponentsSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backend-components/ComponentsSide */ "./src/backend-components/ComponentsSide.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");









wp.blocks.registerBlockType("ourplugin/posts-grids", {
  title: "Posts Grids By Umer",
  description: "Seleect youy post type Grird sletect stlyle ",
  icon: "smiley",
  attributes: {
    myRichHeading: {
      type: "string"
    },
    toggle: {
      type: "boolean",
      default: true
    },
    favoriteAnimal: {
      type: "string",
      default: "asc"
    },
    orderBy: {
      type: "string",
      default: "title"
    },
    favoriteColor: {
      type: "string",
      default: "#DDDDDD"
    },
    activateLasers: {
      type: "boolean",
      default: false
    },
    numberOfPosts: {
      type: "string",
      default: 6
    },
    selectCategory: {
      type: "string",
      default: 0
    },
    paddingForMainBox: {
      type: "object",
      default: {
        top: "10px",
        right: "10px",
        bottom: "10px",
        left: "10px"
      }
    },
    paddingForContentBox: {
      type: "object",
      default: {
        top: "10px",
        right: "10px",
        bottom: "10px",
        left: "10px"
      }
    },
    borderMainBox: {
      type: "object",
      default: {
        color: "#72aee6",
        style: "solid",
        width: "1px"
      }
    },
    maniFontSizes: {
      type: "number",
      default: 12
    },
    fontSizeM: {
      type: "number",
      default: 16
    },
    fontColorForMain: {
      type: "string",
      default: "#232323"
    }
  },
  category: "common",
  edit: EditComponent,
  save: function () {
    return null;
  }
});

function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  console.log(attributes);
  const colors = [{
    name: "Blue 20",
    color: "#72aee6"
  } // ...
  ];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let mainStyle = {
    paddingTop: attributes.paddingForMainBox.top,
    paddingRight: attributes.paddingForMainBox.right,
    paddingBottom: attributes.paddingForMainBox.bottom,
    paddingLeft: attributes.paddingForMainBox.left,
    backgroundColor: attributes.favoriteColor,
    borderColor: attributes.borderMainBox.color,
    borderStyle: attributes.borderMainBox.style,
    borderWidth: attributes.borderMainBox.width,
    fontSize: attributes.fontSizeM,
    color: attributes.fontColorForMain
  };
  let contentStyle = {
    paddingTop: attributes.paddingForContentBox.top,
    paddingRight: attributes.paddingForContentBox.right,
    paddingBottom: attributes.paddingForContentBox.bottom,
    paddingLeft: attributes.paddingForContentBox.left
  };
  const allPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select("core").getEntityRecords("postType", "post", {
      per_page: props.attributes.numberOfPosts,
      categories: props.attributes.selectCategory,
      order: `${props.attributes.favoriteAnimal}`
    });
  });
  const getCategoriesByPost = wp.data.select("core").getEntityRecords("taxonomy", "category");
  const getAllRegistersPostsNams = wp.data.select("core"); //console.log(getAllRegistersPostsNams.getPostType());

  {
    getCategoriesByPost && setAttributes({
      selectCategory: getCategoriesByPost[0].id
    });
  }

  function updateQuestionValue(value) {
    setAttributes({
      numberOfPosts: value
    });
  } // if (allPosts == undefined) return <p>Loading...</p>;


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "featured-professor-wrapper "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Most awesome settings ever",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Do You Want Search Bar Enabled",
    checked: attributes.toggle,
    onChange: newval => setAttributes({
      toggle: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderControl, {
    colors: colors,
    value: attributes.borderMainBox,
    label: "Border",
    onChange: nextValues => setAttributes({
      borderMainBox: nextValues
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: attributes.fontColorForMain,
    onChangeComplete: newval => setAttributes({
      fontColorForMain: newval.hex
    }),
    disableAlpha: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    values: attributes.paddingForMainBox,
    onChange: nextValues => setAttributes({
      paddingForMainBox: nextValues
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    values: attributes.paddingForContentBox,
    onChange: nextValues => setAttributes({
      paddingForContentBox: nextValues
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
    value: attributes.fontSizeM,
    onChange: newFontSize => {
      setAttributes({
        fontSizeM: newFontSize
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select your categories",
    value: attributes.favoriteAnimal,
    options: [{
      label: "ASC",
      value: "asc"
    }, {
      label: "DESC",
      value: "desc"
    }],
    onChange: newval => setAttributes({
      favoriteAnimal: newval
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: attributes.favoriteColor,
    onChangeComplete: newval => setAttributes({
      favoriteColor: newval.hex
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Activate lasers?",
    checked: attributes.activateLasers,
    onChange: newval => setAttributes({
      activateLasers: newval
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Post setting",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "  Enter number of how show",
    type: "number",
    onChange: value => setAttributes({
      numberOfPosts: value
    }),
    value: attributes.numberOfPosts
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Order By",
    value: attributes.orderBy,
    options: [{
      label: "Data",
      value: "data"
    }, {
      label: "Title",
      value: "title"
    }, {
      label: "Random",
      value: "random"
    }],
    onChange: value => setAttributes({
      orderBy: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select your categories",
    value: attributes.selectCategory,
    options: getCategoriesByPost && getCategoriesByPost.map(postc => {
      return {
        label: postc.name,
        value: postc.id
      };
    }),
    onChange: newval => setAttributes({
      selectCategory: newval
    })
  }))))), attributes.toggle == true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    placeholder: "Type something to search",
    type: "text"
  }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "posts-grids-container layout " + props.className
  }, allPosts && allPosts.map((post, i) => {
    const a = 0;
    const featuredImage = post.featured_media ? wp.data.select("core").getMedia(post.featured_media) : null;
    const getUser = post.author ? wp.data.select("core").getEntityRecords("root", "user", {
      include: post.author
    }) : null;
    const getCategoriesByPosts = wp.data.select("core").getEntityRecords("taxonomy", "category", {
      include: post.categories
    });
    const date = new Date(post.date.split("T")[0]);
    const day = String(date.getDate()).padStart(2, "0");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: post.id,
      className: "cell",
      style: mainStyle
    }, featuredImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: featuredImage.media_details.sizes.thumbnail.source_url
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-content",
      style: contentStyle
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-mata"
    }, getCategoriesByPosts && getCategoriesByPosts.map((postscat, i) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        className: "post-category",
        href: postscat.link
      }, postscat.name, " ");
    }), getUser && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "post-user",
      href: getUser[a].link
    }, getUser[a].username)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "post-title"
    }, post.title.rendered), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-date"
    }, day, "-", monthNames[date.getMonth()], "-", date.getFullYear()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-expcerpt"
    }, post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").slice(0, 100).concat("..."))));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map