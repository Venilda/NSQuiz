import { Injectable } from "@angular/core";

import { UserModel } from "./../models/user.model";
import { DataBaseService } from './../services/dataBase.service';

@Injectable()
export class UserService {
    db: DataBaseService;
  register(user: UserModel){
      this.db.postData(user)
      console.log("User is login!");
  }

  getUser(id: any){
      return this.db.getData(id);
  }
}