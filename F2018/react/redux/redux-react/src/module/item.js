import React ,{Component ,Fragment} from "react";
import {connect} from "react-redux";

class Item extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (

            <Fragment>
                <div className={"item"}>
                    <p onClick={()=>this.remove(this.props.data.id)}>
                        {this.props.data.id}
                    </p>
                    <p>{this.props.data.title}</p>
                    <p>{this.props.data.body}</p>
                </div>
            </Fragment>
        )
    }

    remove = (id) =>{
        this.props.dispatch({
            type: "REMOVE_ITEM",
            id : id
        })
    }


}

const setStateFromProps = (store)=>{
    return {
        store:store
    }
}


export default connect(setStateFromProps)(Item)


