import React from "react";
import {Container, Row, Col} from "reactstrap";
import Header from "Comp/header";
import MainContainer from "./MainContainer";
import Sort from "./Sort";


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: null,
            users: null
        }
        this.removeItem=this.removeItem.bind(this)
        this.ChangeDone=this.ChangeDone.bind(this)
    }

    render() {
        console.log(this.state.todos)
        return (

            <Container>
                <Row>
                    <Col className={"text-center head"}>
                        MY Task's
                    </Col>
                </Row>
                {this.state.todos!=null ?  <Header count={this.state.todos.length}/> : <Header count={0}/> }
                <Sort/>
                {this.state.todos!=null ?  <MainContainer remove={this.removeItem}
                                                          ChangeDone={this.ChangeDone}
                                                          data={this.state.todos}
                                                          users={this.state.users}/> :
                                            <MainContainer data={[]} users={[]}/>}

            </Container>

        )
    }

    componentDidMount() {
        this.getTodos();
        this.getUsers();
    }

        getTodos(){
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(data => data.json())
                .then(todos => this.setState({
                    todos: [... this.randomDate(todos)]
                }))
                .catch(error => console.log(error))

        }

        getUsers(){
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(data => data.json())
                .then(users => this.setState({
                    users: users
                }))
                .catch(error => console.log(error))
        }

        random(min, max) {
            // получить случайное число от (min-0.5) до (max+0.5)
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }

        randomDate(arr) {

            arr=[].concat(arr);
            let date = new Date();
            let msMax = date.getTime();
            date.setFullYear(date.getFullYear()-1);
            let msMin = date.getTime();

            return arr.map((item)=>{
                let date_cr= this.random(msMin,msMax);
                    item.created_at =date_cr;
                let date_up= this.random(date_cr,msMax)
                    item.updated_at = date_up;
                item.completed ? item.done_at = this.random(date_up,msMax) : null;
                return item;
            })
        }

        removeItem(id) {

            this.setState({
                todos: [... this.state.todos.filter((item)=>item.id!=id ? true : false)],
            })
    }

    ChangeDone(id) {
        this.setState({
            todos: [... this.state.todos.filter((item)=>{
                if (item.id===id) {
                    item.completed = !item.completed;
                    this.DoneDate(item)
                }
                return true
            })],
        })
    }

    DoneDate(item) {
        let date = new Date().getTime();
        if (item.completed){
            return item.done_at=date
        }
        if (!item.completed){
            return item.updated_at=date
        }

    }
}