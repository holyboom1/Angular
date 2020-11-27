export default (state = {
    toggle: false,
    text : null
} , action) => {
    switch (action.type) {
        case  "TOGGLE" : {
            return Object.assign({},{
                toggle: `${!state.active}`,
                text : action.text,
            })
        }

        case  "HIDE" : {
            return Object.assign({},{
                active: false,
                text : null,
            })
        }

        default : {
            return  state
        }
    }


}