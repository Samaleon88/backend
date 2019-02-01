"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ratings = require("../../../schemas/ratings");

var _ratings2 = _interopRequireDefault(_ratings);

var _rating = require("../../types/rating");

var _graphql = require("graphql");

var GR = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _rating.RatingType,
    args: {
        id: {
            name: "ID",
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        }

    },
    resolve: function resolve(root, params) {
        var deleteRating = _ratings2.default.findByIdAndRemove(params.id).exec();
        if (!deleteRating) throw new Error("Error on delete user");
        return deleteRating;
    }
};