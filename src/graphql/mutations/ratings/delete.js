import rating from "../../../schemas/ratings";
import {RatingType} from "../../types/rating";
import * as GR from "graphql";

export default {
    type: RatingType,
    args: {
        id:{
            name:"ID",
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        }

    },
    resolve (root,params){
        const deleteRating = rating.findByIdAndRemove(params.id).exec()
        if(!deleteRating) throw new Error ("Error on delete user")
        return deleteRating
    }
}