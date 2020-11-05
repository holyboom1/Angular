import React ,{Component ,Fragment} from "react";
import Main from "./pages/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Filter from "./filter";
import Tobos from "./tobos";

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }

    render(){
        return (
            <Fragment>
                <Header />
                <Filter count={this.state.list.length}
                        filter={this.filter}
                    />
                {
                    this.state.list.length!=0 ?
                        <Tobos list={this.state.list}
                               changeStatus={this.changeStatus}
                               removeItem={this.removeItem}
                        /> :                             "Загрузка"
                }

            </Fragment>
        )
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")             .then(data =>data.json())
              .then(list =>this.setState({
                  list:[...list]
              }))

    }

    changeStatus=(id)=>{
        const newList = this.state.list.map((item)=>{
            item.id ===id ? item.completed=true : null
            return item;
        })

        this.setState({
            list:[...newList]
        })


    }

    removeItem=(id)=>{
        const newList = this.state.list.filter((item)=>{
            return item.id !=id ? true : false

        })

        this.setState({
            list:[...newList]
        })


    }

    filter=()=>{
       const newList = [].concat(this.state.list);
       newList.reverse();
       this.setState({
           list : [...newList]
       })
    }

}
