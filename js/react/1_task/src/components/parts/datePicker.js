import DatePicker from "react-datepicker";
import React , {useState}from "react";
import {Button, Row} from "reactstrap";

export default function DatePick(props) {
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    return (
        <Button color="secondary" className={"btn-sm m-1"}>

        <DatePicker
            selected={startDate1}
            closeOnScroll={true}
            onChange={(date)=>{setStartDate1(date), console.log(date.getTime()) }}
            className="red-border"
        />

        <DatePicker
            selected={startDate2}
            closeOnScroll={true}
            onChange={(date)=>{setStartDate2(date), console.log(date.getTime()) }}
            className="red-border"
        />
        </Button>
    );

};