
const alertShow = (state = {
    showAlert: false,
    text: null
} , action) => {

    switch (action.type) {
        case  "SHOW_ALERT" : {
            return Object.assign({},{
                showAlert: true,
                text: action.text
            })
        }

        case  "HIDE_ALERT" : {

            return Object.assign({}, {
                showAlert: false,
                text: null
            })
        }

        default : {
            return  state
        }
    }


}
export default alertShow;