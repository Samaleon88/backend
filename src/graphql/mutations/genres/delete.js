import Genre from "../../../schemas/genres";
import {GenreType} from "../../types/genres";
import * as GR from "graphql";

export default {
    type: GenreType,
    args: {
        id:{
            name:"ID",
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        }

    },
    resolve (root,params){
        const deleteGenre = Genre.findByIdAndRemove(params.id).exec()
        if(!deleteGenre) throw new Error ("Error on delete user")
        return deleteGenre
    }
}