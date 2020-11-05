import React, {Component, Fragment} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal:true
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.items.map((item,i)=>(
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.info}</p>
                        <p>{item.id}</p>
                    </div>
                ))}
            </Fragment>
        )
    }
}
