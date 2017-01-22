import { Injectable } from "@angular/core";

import { UserModel } from "./../models/user.model";

@Injectable()
export class UserService {
  register(user: UserModel) {
    alert("About to register: " + user.name);
  }
}