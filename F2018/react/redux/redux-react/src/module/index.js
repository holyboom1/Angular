import React ,{Component ,Fragment} from "react";
import {connect} from "react-redux";
import Item from "./item";


class Index extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.store)
        return (

            <Fragment>
                {
                    this.props.store.Items.map((item,i)=>
                        <div key={i}>
                            <Item data={item} />
                        </div>
                    )
                }
                <h1>{"Привет"}</h1>


            </Fragment>
        )
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data=>data.json())
            .then(items=>{
                this.props.dispatch({
                    type: "ADD_ITEMS",
                    list: items
                })
            })
    }



}

const setStateFromProps = (store)=>{
    return {
        store:store
    }
}


export default connect(setStateFromProps)(Index)


