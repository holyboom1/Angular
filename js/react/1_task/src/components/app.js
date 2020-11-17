import React , {useState}from "react";
import {
    Container,
    Row,
    Col,
    Spinner,
    Button,

} from "reactstrap";
import Header from "Comp/header";
import MainContainer from "./MainContainer";
import Sort from "./Sort";
import ModalShow from "./parts/modal";
import ToastShow from "./parts/Toast";
import DatePick from "./parts/datePicker";




export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: null,
            users: null,
            modal:false,
            modalName:"",
            modalText : "",
            modalOk : null,
            toast: false,
            toastText:"",
            toastHead:"",
            modalInput:false

        }
        this.removeItem=this.removeItem.bind(this)
        this.ChangeDone=this.ChangeDone.bind(this)
        this.messageModal=this.messageModal.bind(this)
        this.modalToggle=this.modalToggle.bind(this)
        this.EditPost=this.EditPost.bind(this)
        this.CreateForm=this.CreateForm.bind(this)
        this.SortDone=this.SortDone.bind(this)
        this.SortUnDone=this.SortUnDone.bind(this)
    }

    render() {

        return (

            <Container>
                <Row>
                    <Col className={"text-center head"}>
                        MY Task's
                    </Col>
                </Row>
                {this.state.todos!=null ?  <Header count={this.state.todos.length}
                                                   modal={this.state.modal}
                                                   messageModal={this.messageModal}
                                                   modalOk={this.CreateForm}
                                                    /> : <Header count={0}/> }

                <Sort sortDone={this.SortDone} sortUnDone={this.SortUnDone}/>

                {this.state.todos!=null ?  <MainContainer remove={this.removeItem}
                                                          ChangeDone={this.ChangeDone}
                                                          data={this.state.todos}
                                                          users={this.state.users}
                                                          MEdit={this.MEdit}
                                                          EditPost={this.EditPost}
                                                          messageModal={this.messageModal}/> :
                                                         <Row className={"justify-content-center p-2"}>
                                                          <Spinner color={"secondary"} className={"align-self-center"}/>
                                                         </Row>}

                {this.state.modal ? <ModalShow modal={this.state.modal}
                                               modalToggle={this.modalToggle}
                                               modalText={this.state.modalText}
                                               modalName={this.state.modalName}
                                               modalOk={this.state.modalOk}
                                               inputModal={this.state.modalInput}
                                                /> : null  }

                {this.state.toast ? <ToastShow toastText={this.state.toastText}
                                               toastHead={this.state.toastHead}  /> : null}





            </Container>

        )
    }

        SortDone() {
            let arr = [].concat(this.state.todos)
            this.setState(
                {
                    todos: arr.sort((a, b) => (b.completed) - (a.completed))
                })
        }
        SortUnDone() {
        let arr = [].concat(this.state.todos)
        this.setState(
            {
                todos: arr.sort((a, b) => (a.completed) - (b.completed))
            })
    }
        ToastShowFn(textHead,textBody){
        this.setState({
            toastText:textBody,
            toastHead:textHead,
            toast:true
        })
        setTimeout(()=>{this.setState({toast:false})}, 3000)
    }
        componentDidMount() {
      this.getTodos();
      this.getUsers();
      //     this.postData({
      //     "id": 222,
      //     "title": "22222",
      //     "completed": false})
      //   this.putData("5fae7500a7c46d740000bf60", {"title": "33333",})
      //   this.deleteData("5fae7500a7c46d740000bf60")

    }
        messageModal(id,name,fn,inputModal, text){
            if (inputModal==="edit"){

                this.setState({

                    modalInput:inputModal,
                    modalName: name,
                    modalText: text,
                    modalOk: ()=>fn(id),
                    modal:true,

                })
            }
            if ( inputModal ==="new"){


                this.setState({
                    modal: true,
                    modalInput: inputModal,
                    modalOk: () => fn(),
                })
            }
            if (inputModal ==="change"){

                this.setState({
                modal:true,
                modalText: name,
                modalOk: ()=>fn(id)
            })}

        }
        CreateForm(){
            let date = new Date().getTime();
            let length = this.state.todos.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))[this.state.todos.length-1].id;

            // this.setState({
            //     todos: this.state.todos.push({
            //
            //         "id": `${length+1}`,
            //         "title": `${document.getElementById("FormText").value}`,
            //         "completed": false,
            //         "created_at": `${date}`,
            //         "updated_at": `${date}`,
            //
            //     })})
            // console.log(this.state.todos)
            this.postData({

                "id": `${length+1}`,
                "title": `${document.getElementById("NameText").value}`,
                "body" : `${document.getElementById("FormText").value}`,
                "completed": false,
                "created_at": `${date}`,
                "updated_at": `${date}`,

            })

            this.setState({
                modal:false,
                modalInput:false
            })

        }
        modalToggle(){
            this.setState({
                modal : !this.state.modal,
                modalInput:false
            })
        }
        getTodos(){
            // fetch('https://testitschool-c0b7.restdb.io/rest/todos',{
            //     "headers": {
            //         // "Content-Type": "application/json",
            //         "apikey": "5fadbc0e8639597288385325",
            //         "Cache-Control": "no-cache"
            //     }})
            //     .then(data => data.json())
            //     .then(todos => this.setState({
            //      todos: [... this.randomDate(todos)]
            //     }))
            //     .catch(error => console.log(error))
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://testitschool-c0b7.restdb.io/rest/todos",
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": "5fadbc0e8639597288385325",
                    "cache-control": "no-cache"
                }
            }
            $.ajax(settings).done(todos => this.setState({
                     todos:todos
                    }));
        }
        getUsers(){
            fetch('https://testitschool-c0b7.restdb.io/rest/userstodos',{
                "headers": {
                    // "Content-Type": "application/json",
                    "apikey": "5fadbc0e8639597288385325",
                    "Cache-Control": "no-cache"
                }})
                .then(data => data.json())
                .then(users => this.setState({
                    users: users
                }))
                .catch(error => console.log(error))
        }
        EditPost(id){

             this.setState({
                 todos: [... this.state.todos.filter((item)=>{
                     if (item.id===id) {
                         item.body = document.getElementById("FormText").value ;
                         item.title = document.getElementById("NameText").value ;
                         this.DoneDate(item)
                         this.putData(item._id,{
                             body :item.body,
                             title :item.title,
                             done_at:item.done_at,
                             updated_at:item.updated_at})
                     }
                     return true
                 })],
             })
             this.setState({
                 modal:false,
                 modalInput:false
             })
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
                this.putData(item._id,{created_at:item.created_at})
                console.log(item._id, {item})
                return item;
            })
        }
        removeItem(id) {

            this.setState({
                todos: [... this.state.todos.filter((item)=> {
                        if (item.id == id) {
                            this.deleteData(item._id)
                            return false
                        } else {
                            return true
                        }
                    }
                )],
            })
            this.setState({
                modal:false,
                modalInput:false
            })

    }
        ChangeDone(id) {
            this.setState({
                todos: [... this.state.todos.filter((item)=>{
                    if (item.id===id) {
                        item.completed = !item.completed;
                        this.DoneDate(item)
                        this.putData(item._id,{completed:item.completed,
                                                        done_at:item.done_at,
                                                        updated_at:item.updated_at})
                    }
                    return true
                })],
            })
            this.setState({
                modal:false
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
        postData(data = {}) {
        var jsondata = data;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://testitschool-c0b7.restdb.io/rest/todos",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5fadbc0e8639597288385325",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(this.ToastShowFn("Добавлено!",
            "Запись добавлена!"), this.getTodos());
    }
        putData(dataID, Changes = {}){
            var jsondata = Changes;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://testitschool-c0b7.restdb.io/rest/todos/${dataID}`,
                "method": "PUT",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": "5fadbc0e8639597288385325",
                    "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
            }

            $.ajax(settings).done(this.ToastShowFn("Изменено!","Изменения Сохранены!"))
            ;
        }
        deleteData(dataID){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://testitschool-c0b7.restdb.io/rest/todos/${dataID}`,
                "method": "DELETE",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": "5fadbc0e8639597288385325",
                    "cache-control": "no-cache"
                }
            }

            $.ajax(settings).done(this.ToastShowFn("Удалено!","Запись Удалена!"));
        }
        sortbydate (date1, date2){
            this.setState({
                todos: [... this.state.todos.filter((item)=>{
                    if (item.date_create>date) {
                        item.body = document.getElementById("FormText").value ;
                        item.title = document.getElementById("NameText").value ;
                        this.DoneDate(item)
                        this.putData(item._id,{
                            body :item.body,
                            title :item.title,
                            done_at:item.done_at,
                            updated_at:item.updated_at})
                    }
                    return true
                })],
        })}
}
