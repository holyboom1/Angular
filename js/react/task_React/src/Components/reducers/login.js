
const login = (state = {
    loginned: false,


} , action) => {

    switch (action.type) {
        case  "LOGIN" : {
            document.cookie="loginUser=true"
            return Object.assign({},{
                loginned: true,

            })
        }

        case  "LOGOFF" : {
                document.cookie=`loginUser=false;max-age=0`;
            return Object.assign({},{
                loginned: false,

            })
        }
        // case "LOGIN_TRY" :{
        //     // let name = action.user_name.toLowerCase()
        //     //
        //     // if(name==="admin"){
        //     //     if (action.password==="123")
        //             document.cookie="loginUser=true"
        //             return Object.assign({},{
        //                 loginned: true})
        //
        // }

        default : {
            return  state
        }
    }


}
export default login