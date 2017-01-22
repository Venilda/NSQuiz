import { Injectable } from "@angular/core";

import { UserModel } from "./../models/user.model";

@Injectable()
export class UserService {
  register(user: UserModel){
      console.log("User is login!");
  }
}