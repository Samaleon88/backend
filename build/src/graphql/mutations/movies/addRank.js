"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require("graphql");

var GR = _interopRequireWildcard(_graphql);

var _movies = require("../../../schemas/movies");

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require("../../types/movies");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    type: _movies3.MovieType,
    args: {
        id: {
            name: "ID",
            type: GR.GraphQLNonNull(GR.GraphQLID)
        },
        data: {
            name: "data",
            type: GR.GraphQLNonNull(_movies3.RankMovieType)
        }
    }, resolve: function resolve(root, params) {
        var id = params.id,
            data = params.data;

        return _movies2.default.findByIdAndUpdate(id, { $push: { rank: data.rank } }).then(function (movie) {
            return _movies2.default.findById(_movies2.default.id).exec();
        });
    }
};