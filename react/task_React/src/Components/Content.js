import  React from "react"
import { BrowserRouter as Router,
        Switch,
        Route,
        Link} from "react-router-dom"
import HomeContent from "./ContentParts/HomeContent";
import NewsContent from "./ContentParts/NewsContent";
import {connect} from "react-redux";
import Article from "./ContentParts/Article";
import Profile from "./ContentParts/profile";
import FullNews from "./ContentParts/contentPart/fullNewS";




function Content(props) {

    return <Switch>
                <Route exact path={"/"} component = {HomeContent} />
                <Route exact path={"/news"} component = {NewsContent} />
                <Route exact path={"/article"} component = {Article} />
                 <Route exact path={"/profile"} component = {Profile} />
                <Route exact path={"/news/:id"}  component = {FullNews} />
            </Switch>



}





const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(Content);