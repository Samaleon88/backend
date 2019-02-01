import Genre from "../../../schemas/genres";
import {GenreType,GenreInputType} from "../../types/genres";
import * as GR from "graphql";
export default {
    type: GenreType,
    args:{
        data:{
            name:"data",
            type: new GR.GraphQLNonNull(GenreInputType)
        }
    },
    resolve (root,params){
        const Genres = new Genre (params.data)
        const newGenre=Genres.save()
        if(!newGenre) throw new Error("Error at creating genre")
        return newGenre
    }
}