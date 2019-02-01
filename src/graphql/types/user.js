import * as GRAPHQL from "graphql"
export const UserType = new GRAPHQL.GraphQLObjectType({
    name:"Users",
    description:"Users in database",
    fields: ()=>({
        _id:{
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
    })
})

export const UserInputType = new GRAPHQL.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Types of add users",
    fields: () => ({
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
    })
})
