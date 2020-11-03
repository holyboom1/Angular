import "./less/style.less";
import User from "./modules/user/User";
import {some2,some1} from "./modules/test";


$(document).ready(function () {
    console.log('jq');
})

let user= new User("itstep")
let x = 20;
console.log(`${x+10} hello`);
console.log(user.info(), some2,some1);
console.log("sssss",process.env.DB_HOST);
console.log(process.env.API_PROTOCOL + process.env.API);