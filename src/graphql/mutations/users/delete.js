import User from "../../../schemas/users";
import {UserType} from "../../types/user";
import * as GR from "graphql";

export default {
    type: UserType,
    args: {
        id:{
            name:"ID",
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        }

    },
    resolve (root,params){
        const deleteUser = User.findByIdAndRemove(params.id).exec()
        if(!deleteUser) throw new Error ("Error on delete user")
        return deleteUser
    }
}
