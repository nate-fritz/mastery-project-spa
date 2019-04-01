// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

function Header() {
  return "    \n        <div class=\"main-header__title\">\n            <h1>SS</h1>\n        </div>\n        <nav class=\"main-header__nav\">\n            <button class=\"view__all-countries button\">Countries</button>\n            <button class=\"view__all-makes button\">Makes</button>\n            <button class=\"view__all-models button\">Models</button>\n        </nav>    \n    ";
}
},{}],"js/components/Makes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Makes;

function Makes(makes) {
  return "\n      <ul class=\"list\">\n      ".concat(makes.map(function (make) {
    return "\n          <li class=\"list__item\">\n            <div class=\"item-container\">\n            <img id=\"".concat(make.id, "\" class=\"single-make__img\" src=\"").concat(make.makeImg, "\" alt=\"Company Logo\">\n            <h3 class=\"make__name\">").concat(make.makeName, "</h3>\n          </div>\n        </li>\n      ");
  }).join(''), "\n    </ul>\n    \n    \n    \n    ");
}
},{}],"js/components/Countries.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Countries;

var _Makes = _interopRequireDefault(require("./Makes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Countries(countries) {
  return "\n      <ul class=\"contries-list\">\n      ".concat(countries.map(function (country) {
    return "\n          <li class=\"list__item\">\n            <div class=\"item-container\">\n              <h2 class=\"country__name\" id=\"".concat(country.id, "\">").concat(country.name, "</h2>\n              <div class=\"makes-contry\">\n                ").concat((0, _Makes.default)(country.makes), "\n              </div>\n          </div>\n        </li>\n      ");
  }).join(''), "\n    </ul>\n\n    <section class=\"add-country\">\n        <input type=\"text\" class=\"add-country__name\" placeholder=\"Country Name\">\n        <button class=\"add-country__submit\">Add Country</button>\n    </section>\n    ");
}
},{"./Makes":"js/components/Makes.js"}],"js/components/Country.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Country;

var _Makes = _interopRequireDefault(require("./Makes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Country(country) {
  return "\n    <h2 class=\"single-country__name\">".concat(country.name, "</h2>\n    <ul class=\"country__makes\">\n        <li class=\"country__make\">\n            ").concat((0, _Makes.default)(country.makes), "\n        </li>\n    </ul>\n\n<section class=\"add-make\">\n    <input type=\"text\" class=\"add-make__name\" placeholder=\"Make Name\">\n    <input type=\"text\" class=\"add-make__img\" placeholder=\"Image URL for Logo \">\n    <button class=\"add-make__submit\" id=\"").concat(country.id, "\">Add Make</button>\n</section>\n    ");
}
},{"./Makes":"js/components/Makes.js"}],"js/components/Models.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Models;

function Models(models) {
  return "\n  <ul class=\"flex-list flex-list2\">\n    ".concat(models.map(function (model) {
    return "\n        <li class=\"flex-list__item\">\n          <div class=\"flex-item-container\">\n            <h4 id=\"".concat(model.id, "\" class=\"model__name\"\">").concat(model.modelName, "<h4>\n        </div>\n      </li>\n    ");
  }).join(''), "\n  </ul>\n\n  ");
}
},{}],"js/components/Make.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Make;

var _Models = _interopRequireDefault(require("./Models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Make(make) {
  return "\n    <div class=\"single-make__div2\">\n        <img class=\"single-make__img2\" src=\"".concat(make.makeImg, "\" alt=\"Company Logo\">\n        <h2 class=\"single-make__name\">").concat(make.makeName, "</h2>\n    </div>\n    ").concat((0, _Models.default)(make.models), "\n    \n\n    <section class=\"add-model\">\n        <input type=\"text\" class=\"add-model__name\" placeholder=\"Model Name\">\n        <input type=\"text\" class=\"add-model__year\" placeholder=\"Model Year\">\n        <input type=\"text\" class=\"add-model__price\" placeholder=\"Model Price\">\n        <input type=\"text\" class=\"add-model__img\" placeholder=\"Image URL\">\n        <button class=\"add-model__submit\" id=\"").concat(make.id, "\">Add Model</button>\n    </section>\n\n    ");
}
},{"./Models":"js/components/Models.js"}],"js/components/Model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

function Model(model) {
  return "\n    <div class=\"list2\">\n    <h2 class=\"single-model__name\">".concat(model.modelName, "</h2>\n    <h4 class=\"single-model__year\">Year: ").concat(model.modelYear, "</h4>\n    <h4 class=\"single-model__price\">MSRP: ").concat(model.modelPrice, "</h4>\n    <img class=\"single-model__img\" src=\"").concat(model.modelImg, "\" alt=\"Picture of this model\">\n    </div>\n\n    <div class=\"list3\">\n        <input type=\"text\" class=\"edit__model--content\" placeholder=\"").concat(model.modelName, "\">\n        <button class=\"edit__model--submit\" id=\"").concat(model.id, "\">Replace Model</button>\n\n        <button class=\"delete-model__submit\" id=\"").concat(model.id, "\">Delete Model</button>\n    </div>\n\n    ");
}
},{}],"js/utils/events/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"js/utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function deleteRequest(location, callback) {
  fetch(location, {
    method: "DELETE"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest,
  deleteRequest: deleteRequest
};
exports.default = _default;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _Header = _interopRequireDefault(require("./components/Header"));

var _Countries = _interopRequireDefault(require("./components/Countries"));

var _Country = _interopRequireDefault(require("./components/Country"));

var _Makes = _interopRequireDefault(require("./components/Makes"));

var _Make = _interopRequireDefault(require("./components/Make"));

var _Models = _interopRequireDefault(require("./components/Models"));

var _Model = _interopRequireDefault(require("./components/Model"));

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

header();
main();

function header() {
  getHeaderContext().innerHTML = (0, _Header.default)();
  viewAllCountries();
  viewAllMakes();
  viewAllModels();
}

function main() {
  _apiActions.default.getRequest('http://localhost:8080/countries', function (countries) {
    getAppContext().innerHTML = (0, _Countries.default)(countries);
  });

  viewSingleCountry();
  viewSingleMake();
  viewSingleModel();
  addCountry();
  addMake();
  addModel();
  removeModel();
  editModel();
}

function viewAllCountries() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('view__all-countries')) {
      _apiActions.default.getRequest("http://localhost:8080/countries", function (countries) {
        getAppContext().innerHTML = (0, _Countries.default)(countries);
      });
    }
  });
}

function viewSingleCountry() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('country__name')) {
      _apiActions.default.getRequest("http://localhost:8080/countries/".concat(event.target.id), function (country) {
        getAppContext().innerHTML = (0, _Country.default)(country);
      });
    }
  });
}

function viewAllMakes() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('view__all-makes')) {
      _apiActions.default.getRequest("http://localhost:8080/makes", function (makes) {
        getAppContext().innerHTML = (0, _Makes.default)(makes);
      });
    }
  });
}

function viewSingleMake() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('single-make__img')) {
      _apiActions.default.getRequest("http://localhost:8080/makes/".concat(event.target.id), function (make) {
        getAppContext().innerHTML = (0, _Make.default)(make);
      });
    }
  });
}

function viewAllModels() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('view__all-models')) {
      _apiActions.default.getRequest("http://localhost:8080/models", function (models) {
        getAppContext().innerHTML = (0, _Models.default)(models);
      });
    }
  });
}

function viewSingleModel() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('model__name')) {
      _apiActions.default.getRequest("http://localhost:8080/models/".concat(event.target.id), function (model) {
        getAppContext().innerHTML = (0, _Model.default)(model);
      });
    }
  });
}

function addCountry() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add-country__submit')) {
      var name = event.target.parentElement.querySelector('.add-country__name').value;

      _apiActions.default.postRequest('http://localhost:8080/countries/add', {
        name: name
      }, function (countries) {
        return getAppContext().innerHTML = (0, _Countries.default)(countries);
      });
    }
  });
}

function addMake() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add-make__submit')) {
      console.log("hi");
      var makeName = event.target.parentElement.querySelector('.add-make__name').value;
      var makeImg = event.target.parentElement.querySelector('.add-make__img').value;

      _apiActions.default.postRequest("http://localhost:8080/countries/".concat(event.target.id), {
        makeName: makeName,
        makeImg: makeImg
      }, function (country) {
        return getAppContext().innerHTML = (0, _Country.default)(country);
      });
    }
  });
}

function addModel() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add-model__submit')) {
      var modelName = event.target.parentElement.querySelector('.add-model__name').value;
      var modelYear = event.target.parentElement.querySelector('.add-model__year').value;
      var modelPrice = event.target.parentElement.querySelector(".add-model__price").value;
      var modelImg = event.target.parentElement.querySelector('.add-model__img').value;

      _apiActions.default.postRequest("http://localhost:8080/makes/".concat(event.target.id), {
        modelName: modelName,
        modelYear: modelYear,
        modelPrice: modelPrice,
        modelImg: modelImg
      }, function (make) {
        return getAppContext().innerHTML = (0, _Make.default)(make);
      });
    }
  });
}

function editModel() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('edit__model--submit')) {
      var newName = event.target.parentElement.querySelector('.edit__model--content').value;

      _apiActions.default.postRequest("http://localhost:8080/models/edit/".concat(event.target.id), {
        newName: newName
      }, function (model) {
        return getAppContext().innerHTML = (0, _Model.default)(model);
      });
    }
  });
}

function removeModel() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('delete-model__submit')) {
      _apiActions.default.deleteRequest("http://localhost:8080/models/delete/".concat(event.target.id), function (make) {
        getAppContext().innerHTML = (0, _Make.default)(make);
      });
    }
  });
}

function getHeaderContext() {
  return document.querySelector("#header");
}

function getAppContext() {
  return document.querySelector("#app");
}
},{"./components/Header":"js/components/Header.js","./components/Countries":"js/components/Countries.js","./components/Country":"js/components/Country.js","./components/Makes":"js/components/Makes.js","./components/Make":"js/components/Make.js","./components/Models":"js/components/Models.js","./components/Model":"js/components/Model.js","./utils/events/event-actions":"js/utils/events/event-actions.js","./utils/api/api-actions":"js/utils/api/api-actions.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59950" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map