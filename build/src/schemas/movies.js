'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MovieSchema = new Schema({
    'image': {
        type: String,
        required: true
    },
    'name': {
        type: String,
        required: true
    },
    'plot': {
        type: String,
        required: true
    },
    'director': {
        type: String,
        required: true
    },
    'year': {
        type: Number,
        required: true
    },
    'duration': {
        type: String,
        required: true
    },
    'language': {
        type: String,
        required: true
    },
    'url': {
        type: String,
        required: true
    },
    'rank': {
        type: [Number],
        required: true
    },
    'rating': {
        type: Schema.Types.ObjectId,
        ref: 'ratings'
    },
    'genre': {
        type: Schema.Types.ObjectId,
        ref: 'genres'
    }
}, { 'collection': 'movie', timestamps: true });

exports.default = _mongoose2.default.model('movies', MovieSchema);