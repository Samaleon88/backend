import Movie from "../../../schemas/movies";
import {MovieType,MovieInputType} from "../../types/movies";
import * as GR from "graphql";
export default {
    type: MovieType,
    args:{
        data:{
            name:"data",
            type: new GR.GraphQLNonNull(MovieInputType)
        }
    },
    resolve (root,params){
        const movie = new Movie (params.data)
        const newMovie=movie.save()
        if(!newMovie) throw new Error("Error at creating movie")
        return newMovie
    }
}