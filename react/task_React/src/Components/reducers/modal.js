export default (state = {
    toggle: false,
    text : null,
    type_of_modal:null
} , action) => {
    switch (action.type) {
        case  "TOGGLE" : {
            return Object.assign({},{
                toggle: !state.toggle,
                text : action.text,
            })
        }

        case  "HIDE" : {
            return Object.assign({},{
                toggle: false,
                text : null,
            })
        }

        case "LOGIN_MODAL":{
            return  Object.assign({},{
                toggle: true,
                type_of_modal: "login_modal",
                text: action.text

            })
        }

        default : {
            return  state
        }
    }


}