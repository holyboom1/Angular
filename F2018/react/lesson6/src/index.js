import React, {Component, Fragment} from 'react';
import Header from './modules/header';
import List from './modules/list';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }

    render(){
        return (
            <Fragment>
                <Header addItem={this.addItem}/>
                <List items={this.state.items}/>
            </Fragment>
        )
    }
    componentDidMount(){
        let arr=[];
        for(let i=1; i<=localStorage.length; i++){
            arr.push(JSON.parse(localStorage.getItem(i)))
        }

        this.setState({
            items:[...this.state.items,...arr]
        })
    }
    addItem=(item)=>{
        this.setState({
            items:[...this.state.items,item]
        })
    }
}
