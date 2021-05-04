import { Injectable } from "@decorators/di";
import { createUsersDto } from "./dto/user.dto";

@Injectable()
class userService {
    
    async getUser(id: number){
        return {id};
    }

    async createUsers(dto: createUsersDto){
        const result = await new Promise(resolve =>{
            setTimeout(() => {
                resolve(dto)
            }, 2000);
        })

        return result;
    }
}

export default userService;