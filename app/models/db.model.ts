import { UserModel } from './../models/user.model';
import { QuizModel } from './../models/quiz.model';
export class DbModel{
    users: Array<any>;
    quizes: Array<QuizModel>;
    constructor(){
        this.users = [{name: "ilian", password: "ilian"}];
        this.quizes = [];
    }
}