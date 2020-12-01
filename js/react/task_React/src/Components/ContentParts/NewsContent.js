import React, {Fragment, useState} from "react"
import news from "./../json/news.json"
import {connect} from "react-redux";
import NewsItem from "./contentPart/newsItem";
import {Row, Spinner} from "reactstrap"
import {Col} from "reactstrap";


 function NewsContent(props) {
    const [data,setData] = useState(null);

     let getNews = ()=> {
         var settings = {
             "async": true,
             "crossDomain": true,
             "url": "https://testitschool-c0b7.restdb.io/rest/news-1",
             "method": "GET",
             "headers": {
                 "content-type": "application/json",
                 "x-apikey": "5fadbc0e8639597288385325",
                 "cache-control": "no-cache"
             }
         }
         $.ajax(settings).done(response=>{setData(response)});
     }


    return <Fragment>

     {data!==null ?
     <Row className={"row row-cols-1 row-cols-sm-3 "}>
         {data.map(item => <NewsItem item={item} key={item.id} className={"m-2"}/>)}
     </Row>
        :
         <Row className={"justify-content-center p-2"}>
             {getNews()}
             <Spinner color={"secondary"} className={"align-self-center"}/>
         </Row>


     }
    </Fragment>
 }



const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(NewsContent);