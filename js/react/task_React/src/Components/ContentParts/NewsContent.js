import React, {Fragment} from "react"
import news from "./../json/news.json"
import {connect} from "react-redux";
import NewsItem from "./contentPart/newsItem";
import {Row} from "reactstrap"

 function NewsContent(props) {

    return      <Row className={"row row-cols-1 row-cols-sm-3 "}>
                    {news.map(item=><NewsItem item={item} key={item.id} className={"m-2"}/>)}
                </Row>

}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(NewsContent);