import React ,{Component ,Fragment} from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./pages/main";
import Posts from "./pages/posts";
import Post from "./pages/post";
import Users from "./pages/users";
import { BrowserRouter, Route, Switch } from "react-router-dom";


export default class Index extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <BrowserRouter>
                    <Header />
                        <Switch>
                           <Route exact path="/dist/" component={Main} />
                           <Route exact path="/dist/posts/" component={Posts} />
                           <Route exact path="/dist/users/" component={Users} />
                           <Route exact path="/dist/post/:id" component={Post} />
                        </Switch>
                    <Footer />
                </BrowserRouter>

            </Fragment>
        )
    }

}
