"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
var MyLabel = function (_a) {
    var allCaps = _a.allCaps, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.label, label = _c === void 0 ? 'no label' : _c, _d = _a.size, size = _d === void 0 ? 'normal' : _d, fontColor = _a.fontColor;
    var texto = !!allCaps ? label.toLocaleUpperCase() : label;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: ['label', size, "text-".concat(color)].join(' '), style: { color: fontColor } }, { children: texto }), void 0));
};
exports.MyLabel = MyLabel;
