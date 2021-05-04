import { Middleware,  } from '@decorators/express';
import {NextFunction, Request, Response} from 'express';


class UserMiddleware implements Middleware {
  use(request: Request, response: Response, next: NextFunction): void{
    if(request.params.id === "10") return  next();
    response.send("numbr not 10")
  }
}

export default UserMiddleware;
 