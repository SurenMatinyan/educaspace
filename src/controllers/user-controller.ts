import {Request as Req, Response as Res,} from 'express';
import {Request, Response, Controller, Get, Post, Params, Next} from '@decorators/express';
import { Injectable } from "@decorators/di";
import auth from '../middlewares/auth';
import userService from '../services/user-service';
import { createUsersDto } from '../services/dto/user.dto';


@Controller('/')
@Injectable()
class UsersController {

     constructor(private userService: userService){

     }
     
    @Get('/:id', [auth])
    public async getUser(@Response() res: Res, @Params('id') id: number){
       try{
         res.status(200).json(await this.userService.getUser(id))
       }
       catch(err){
         Next(err);
       }
    }

    @Post('/create')
    public async createUsers(@Request("body") body: createUsersDto, @Response() res: Res){
       try{
         res.status(200).json(await this.userService.createUsers(body));
       }
       catch(err){
         Next(err);
       }
    }
}

export default UsersController;