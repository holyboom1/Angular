import React, {Fragment, useState} from 'react';
import {connect} from "react-redux";
import {Alert} from "reactstrap"


class AlertModal extends React.Component{

constructor(props) {
    super(props);
}



    render()
{
    return       <Fragment>
        {this.props.GlobalStore.alertShow.showAlert===true ?

                <Alert color="primary" style={{position: 'fixed', top: 30, right: 30 }} >
                    {this.props.GlobalStore.alertShow.text}
                </Alert>

            : null}
                </Fragment>
}
}


const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(AlertModal);
