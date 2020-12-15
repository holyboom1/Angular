
const FilterState = (state = {
    SetFilter: 0,


} , action) => {

    switch (action.type) {
        case  "SetFilter" : {
            return Object.assign({},{
                SetFilter: action.set_filter,
            })
        }


        default : {
            return  state
        }
    }


}
export default FilterState