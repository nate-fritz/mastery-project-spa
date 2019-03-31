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
})({"js/utils/events/event-actions.js":[function(require,module,exports) {
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

var _default = {
  getRequest: getRequest,
  postRequest: postRequest
};
exports.default = _default;
},{}],"js/components/Makes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Makes;

function Makes(makes) {
  return "\n        <ul class=\"makes\">\n        ".concat(makes.map(function (make) {
    return "\n                <li class=\"make\">\n                <img id=\"".concat(make.id, "\" class=\"make__img\" src=\"").concat(make.makeImg, "\" alt=\"Manufacturer's Logo\"/>\n                <h2>").concat(make.makeName, "</h2>\n                </li>\n            ");
  }).join(''), "\n        </ul>\n        <section class=\"add-make\">\n            <input type=\"text\" class=\"add-make__make-name\" placeholder=\"Make Name\">\n            <input type=\"text\" class=\"add-make__make-country\" placeholder=\"Country of Origin\">\n            <input type=\"text\" class=\"add-make__make-img\" placeholder=\"Logo URL\">\n            <button class=\"add-make__submit\">Add Make</button>\n        </section>\n    ");
}
},{}],"js/components/Types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Types;

function Types(types) {
  return "\n        <ul id=\"type\">\n            ".concat(types.map(function (type) {
    return "\n                    <li class=\"type__list\">\n                        <h3 class=\"typeName\">".concat(type.typeName, "</h3>\n                    </li>\n                ");
  }).join(''), "\n        </ul>\n        \n        ");
}
},{}],"js/components/SingleMake.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingleMake;

var _Types = _interopRequireDefault(require("./Types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SingleMake(make) {
  return "\n    <ul class=\"make__list\">\n        <li>\n            <div class=\"make__container\">\n                <img id=\"".concat(make.id, "\" class=\"make__img2\" src=\"").concat(make.makeImg, "\" alt=\"Make Image\"/>\n                <h4 class=\"make__name\">").concat(make.makeName, "</h4>\n                <h5 class=\"make__country\">").concat(make.makeCountry, "</h5>\n            </div> \n        </li>\n    </ul>\n    <ul>\n        <li id=\"").concat(type.id, "\" class=\"make__types\">").concat((0, _Types.default)(make.types), "</li>\n    </ul>    \n        ");
}
},{"./Types":"js/components/Types.js"}],"js/components/Models.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Models;

function Models(models) {
  return "\n    <ul class=\"models__list\">   \n  ".concat(models.map(function (model) {
    return "\n      <li>\n        <div class=\"model_container\">\n            <h2 class=\"model__name\" id=\"".concat(model.id, "\">").concat(model.modelName, "</h2>\n        </div>\n      </li>\n    ");
  }).join(''), "\n    </ul>\n");
}
},{}],"js/components/SingleType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingleType;

var _Models = _interopRequireDefault(require("./Models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SingleType(type) {
  return "\n    <ul class=\"singleType__list\">\n        <li>\n            <div class=\"singleType__container\">\n                <h2 class=\"singleType__name\">".concat(type.typeName, "</h2>\n            </div> \n        </li>   \n    </ul>\n\n            <li id=\"").concat(type.id, "\" class=\"singleType__models\">").concat((0, _Models.default)(type.models), "</li>\n        ");
}
},{"./Models":"js/components/Models.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _Makes = _interopRequireDefault(require("./components/Makes"));

var _SingleMake = _interopRequireDefault(require("./components/SingleMake"));

var _SingleType = _interopRequireDefault(require("./components/SingleType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();

function main() {
  _apiActions.default.getRequest('http://localhost:8080/makes', function (makes) {
    getAppContext().innerHTML = (0, _Makes.default)(makes);
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('make__img')) {
      _apiActions.default.getRequest("http://localhost:8080/makes/".concat(event.target.id), function (make) {
        getAppContext().innerHTML = (0, _SingleMake.default)(make);
      });
    }
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('typeName')) {
      _apiActions.default.getRequest("http://localhost:8080/type/".concat(event.target.id), function (type) {
        getAppContext().innerHTML = (0, _SingleType.default)(type);
      });
    }
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add-make__submit')) {
      var makeName = document.querySelector('.add-make__make-name').value;
      var makeCountry = document.querySelector('.add-make__make-country').value;
      var makeImg = document.querySelector('.add-make__make-img').value;

      _apiActions.default.postRequest('http://localhost:8080/makes/add', {
        makeName: makeName,
        makeCountry: makeCountry,
        makeImg: makeImg
      }, function (makes) {
        return getAppContext().innerHTML = (0, _Makes.default)(makes);
      });
    }
  });
}

function getAppContext() {
  return document.querySelector("#app");
}
},{"./utils/events/event-actions":"js/utils/events/event-actions.js","./utils/api/api-actions":"js/utils/api/api-actions.js","./components/Makes":"js/components/Makes.js","./components/SingleMake":"js/components/SingleMake.js","./components/SingleType":"js/components/SingleType.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56381" + '/');

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
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map