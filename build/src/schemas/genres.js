"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var GenreSchema = new Schema({
    "name": {
        type: String,
        require: true
    },
    "description": {
        type: String,
        required: true
    }
}, { "collection": "genres", GenreSchema: GenreSchema });
exports.default = _mongoose2.default.model("genres", GenreSchema);