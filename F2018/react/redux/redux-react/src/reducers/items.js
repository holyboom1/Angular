export function Items(state=[],action){
    switch (action.type) {
        case "ADD_ITEMS" : {
            return [...state,...action.list]
        }

        case "REMOVE_ITEM" : {
            let newState = state.filter((item)=>item.id!=action.id)
            return [...newState];
        }

        default : {
            return state
        }
    }
}