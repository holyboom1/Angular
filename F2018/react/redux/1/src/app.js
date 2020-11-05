function List(state=[],action){
    switch (action.type) {
        case "ADD_USER" : {
            return state = [...state,action.data]
        }

        case "REMOVE_USER" : {
            let newState = state.filter((item)=>item.id!=action.id)
            return [...newState];
        }

        default : {
            return state
        }
    }
}


function My(state=[],action){
    switch (action.type) {
        case "ADD_USER" : {
            return state = [...state,action.data]
        }

        case "REMOVE_USER" : {
            let newState = state.filter((item)=>item.id!=action.id)
            return [...newState];
        }

        default : {
            return state
        }
    }
}


class Redux {
    constructor(reducer,state=[]){
        this._state = state;
        this._disp = reducer;
        this._callbacks = [];
    }

    get store(){
        return this._state;
    }

    /*
    * {
    *   type: "ADD_USER",
    *   data: {
    *       id:2,
    *       name: "test 2"
    *   }
    * }
    *
    * */

    dispatch (obj) {
        this._state=this._disp(this._state,obj);
        this._callbacks.forEach((fn)=>fn())
    }

    subscribe(fn){
        this._callbacks.push(fn)
    }



}

    let data = new Redux(List,[{id:1,name:"test"}]);
    let test = new Redux(My,[{id:1,name:"test"}]);
    data.subscribe(function () {
        console.log("Что-то произошло",data.store)
    })


    data.dispatch({
        type: "ADD_USER",
        data: {
            id:2,
            name: "test 2"
        }
    })

    data.dispatch({
        type: "ADD_USER",
        data: {
            id:3,
            name: "test 3"
        }
    })

    data.dispatch({
        type: "REMOVE_USER",
        id: 2
    })

