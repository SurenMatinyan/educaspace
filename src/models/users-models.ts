import {Sequelize,Model,DataTypes} from "sequelize";


  interface UserAttributes {
    id?: number;
    lastName: string
    firstName: string
    email: string
    password: string
   
  }
  
  
  class User extends Model<UserAttributes> implements UserAttributes {
    public id?: number; 
    public lastName!: string;
    public firstName!: string;
    public email!: string;
    public password!: string;
    public  UserId!: number
   
    public static  initialization(sequelize: Sequelize){
        this.init(
            {
              id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
              lastName: {type: DataTypes.STRING(128)},
              firstName: {type: DataTypes.STRING(128)},
              email: { type: DataTypes.STRING},
              password: { type: DataTypes.STRING},
            },
            {
              tableName: "users",
              sequelize, 
            }
          );
    }

  }
  export default User;
  
  
  


  
