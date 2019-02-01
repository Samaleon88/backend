"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

var GRAPHQL = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var UserType = exports.UserType = new GRAPHQL.GraphQLObjectType({
    name: "Users",
    description: "Users in database",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            name: {
                type: GRAPHQL.GraphQLString
            },
            lastName: {
                type: GRAPHQL.GraphQLString
            },
            email: {
                type: GRAPHQL.GraphQLString
            },
            password: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});

var UserInputType = exports.UserInputType = new GRAPHQL.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Types of add users",
    fields: function fields() {
        return {
            name: {
                type: GRAPHQL.GraphQLString
            },
            lastName: {
                type: GRAPHQL.GraphQLString
            },
            email: {
                type: GRAPHQL.GraphQLString
            },
            password: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});