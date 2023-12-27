"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APITypesKey = exports.APITypes = void 0;
exports.APITypes = {
    admin: "admin",
    user: "user",
    common: "common",
};
exports.APITypesKey = Object.keys(exports.APITypes).filter(function (item) { return item !== exports.APITypes.common; });
