"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoConnectionError = exports.TimeoutError = exports.NoHandlerError = exports.TSDKError = void 0;
/** TSDK Base Error */
var TSDKError = /** @class */ (function (_super) {
    __extends(TSDKError, _super);
    function TSDKError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TSDKError;
}(Error));
exports.TSDKError = TSDKError;
/**
 * Before call, not set handler instance error
 */
var NoHandlerError = /** @class */ (function (_super) {
    __extends(NoHandlerError, _super);
    function NoHandlerError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoHandlerError;
}(TSDKError));
exports.NoHandlerError = NoHandlerError;
/**
 * Timeout error
 */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TimeoutError;
}(TSDKError));
exports.TimeoutError = TimeoutError;
/**
 * No connection error
 */
var NoConnectionError = /** @class */ (function (_super) {
    __extends(NoConnectionError, _super);
    function NoConnectionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoConnectionError;
}(TSDKError));
exports.NoConnectionError = NoConnectionError;
