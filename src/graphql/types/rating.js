import * as GRAPHQL from 'graphql';

import Ratings from '../../schemas/ratings';

export const RatingType = new GRAPHQL.GraphQLObjectType({
    name: 'Ratings',
    description: 'Ratings in MongoDB',
    fields: () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        },
        age: {
            type: GRAPHQL.GraphQLInt
        }
    })
});

export const RatingInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'RatingInput',
    description: 'Insert Rating',
    fields : () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        },
        age: {
            type: GRAPHQL.GraphQLInt
        }
    })
})