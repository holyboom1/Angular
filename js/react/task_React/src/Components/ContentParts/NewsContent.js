import React, {Fragment, useState} from "react"
import news from "./../json/news.json"
import {connect} from "react-redux";
import NewsItem from "./contentPart/newsItem";
import {Row, Spinner, ButtonGroup, Button} from "reactstrap"
import {Col} from "reactstrap/es";

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
         <Fragment>
             <Row>

                 <Col className={"text-right"}>
                    Фильтр по категориям
                 </Col>

                 <Button  className={"m-1"} size="sm" color="secondary" onClick={()=>{setFilter("people", props)}}>
                     people
                 </Button>

                 <Button className={"m-1"} size="sm" color="secondary" onClick={()=>{setFilter("tech", props)}}>
                     tech
                 </Button>


                 <Button className={"m-1"} size="sm" color="secondary" onClick={()=>{setFilter("auto", props)}}>
                     auto
                 </Button>

                 <Button className={"m-1"} size="sm" color="secondary" onClick={()=>{setFilter(0 ,props)}}>
                     no filter
                 </Button>

             </Row>
     <Row className={"row row-cols-1 row-cols-sm-3 "}>
         {props.GlobalStore.FilterState.SetFilter===0 ? data.map(item => <NewsItem item={item} key={item.id} className={"m-2"}/>) :
                 filterItems(data, props.GlobalStore.FilterState.SetFilter).map(item =><NewsItem item={item} key={item.id} className={"m-2"}/>)
             }


     </Row>
         </Fragment>
        :
         <Row className={"justify-content-center p-2"}>
             {getNews()}

             <Spinner color={"secondary"} className={"align-self-center"}/>
         </Row>


     }
    </Fragment>
 }

function filterItems(data, filterCat) {
     data=[].concat(data);
    let x = data.filter((item) => {
        if (item.category === filterCat) {
            return true
        }

    })

    return x;
}

function setFilter (filter, props){
    props.dispatch({type : "SetFilter", set_filter: filter })
}


const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(NewsContent);