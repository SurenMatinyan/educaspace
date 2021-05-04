import express, {Express} from 'express';
import { attachControllers } from '@decorators/express';
import cors from 'cors';
import path from 'path';
import UsersController from './controllers/user-controller'


const app: Express = express();
app.listen(3000, () => {
  console.log("connected in port 3000")
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const apiRouter = express.Router();
attachControllers(apiRouter, [UsersController]);

app.use('/api/v1', apiRouter);





