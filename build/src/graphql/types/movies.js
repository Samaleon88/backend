'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RankMovieType = exports.MovieInputType = exports.MovieType = undefined;

var _graphql = require('graphql');

var GR = _interopRequireWildcard(_graphql);

var _genres = require('./genres');

var _genres2 = require('../../schemas/genres');

var _genres3 = _interopRequireDefault(_genres2);

var _rating = require('./rating');

var _ratings = require('../../schemas/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MovieType = exports.MovieType = new GR.GraphQLObjectType({
    name: 'Movies',
    description: 'Types of Movies',
    fields: function fields() {
        return {
            _id: {
                type: GR.GraphQLNonNull(GR.GraphQLID)
            },
            image: {
                type: GR.GraphQLString
            },
            name: {
                type: GR.GraphQLString
            },
            director: {
                type: GR.GraphQLString
            },
            year: {
                type: GR.GraphQLInt
            },
            rank: {
                type: GR.GraphQLList(GR.GraphQLFloat)
            },
            duration: {
                type: GR.GraphQLString
            },
            language: {
                type: GR.GraphQLString
            },
            url: {
                type: GR.GraphQLString
            },
            rating: {
                type: _rating.RatingType,
                resolve: function resolve(movie) {
                    var rating = movie.rating;

                    return _ratings2.default.findById(rating).exec();
                }
            },
            genre: {
                type: _genres.GenreType,
                resolve: function resolve(movie) {
                    var genre = movie.genre;

                    return _genres3.default.findById(genre).exec();
                }
            },
            plot: {
                type: GR.GraphQLString
            }

        };
    }
});

var MovieInputType = exports.MovieInputType = new GR.GraphQLInputObjectType({
    name: 'addMovies',
    description: 'Input of Movies',
    fields: function fields() {
        return {
            image: {
                type: GR.GraphQLString
            },
            name: {
                type: GR.GraphQLString
            },
            director: {
                type: GR.GraphQLString
            },
            year: {
                type: GR.GraphQLInt
            },
            rank: {
                type: GR.GraphQLList(GR.GraphQLFloat)
            },
            duration: {
                type: GR.GraphQLString
            },
            language: {
                type: GR.GraphQLString
            },
            url: {
                type: GR.GraphQLString
            },
            rating: {
                type: GR.GraphQLString
            },
            genre: {
                type: GR.GraphQLString
            },
            plot: {
                type: GR.GraphQLString
            }

        };
    }
});

var RankMovieType = exports.RankMovieType = new GR.GraphQLInputObjectType({
    name: 'addRank',
    description: 'Add rank to movie',
    fields: function fields() {
        return {
            rank: {
                type: GR.GraphQLFloat
            }
        };
    }
});