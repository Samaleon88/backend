import Movie from "../../../schemas/movies";
import {MovieType} from "../../types/movies";
import * as GR from "graphql";

export default {
    type: MovieType,
    args: {
        id:{
            name:"ID",
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        }

    },
    resolve (root,params){
        const deleteMovie = Movie.findByIdAndRemove(params.id).exec()
        if(!deleteMovie) throw new Error ("Error on delete Movie")
        return deleteMovie
    }
}