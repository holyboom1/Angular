import ReactDOM from "react-dom"
import React, {Component, Fragment, Suspense} from 'react';
import {Lines, Wave } from "react-preloading-component";
const Header = React.lazy(()=>import(/* webpackChunkName: "[header]" */ './modules/header'));
const List = React.lazy(()=>import(/* webpackChunkName: "[List]" */  './modules/list'));
//import List from './modules/list';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }
//<h2>1111</h2>
    render(){
        return (
            <Suspense fallback={<Wave color="#FF4601" size={150} />} >
                <Fragment>
                    <Header addItem={this.addItem}/>
                    <List items={this.state.items}/>
                    {/*{ReactDOM.createPortal(,document.getElementById("stat"))}*/}
                </Fragment>
            </Suspense>
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
