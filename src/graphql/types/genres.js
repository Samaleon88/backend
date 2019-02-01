import * as GRAPHQL from "graphql";
import graphql from "..";
export const GenreType = new GRAPHQL.GraphQLObjectType({
    name: "Genres",
    description:"Types of genres",
    fields:()=>({
_id: {
type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
},
name: {
type: GRAPHQL.GraphQLString
},
description:{
    type: GRAPHQL.GraphQLString
}
    })
})
export const GenreInputType = new GRAPHQL.GraphQLInputObjectType({
    name: "addGenres",
    description:"Add Genres",
    fields: ()=>({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
})
