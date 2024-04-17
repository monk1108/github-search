import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        // get the input content
        const {keyWordElement:{value:keyWord}} = this;
        console.log(keyWord);
        // inform App to update the state before sending the request
        this.props.updateAppState({isFirst: false, isLoading: true});
        // send the request
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                // inform App to update the state after successfully receiving the response
                this.props.updateAppState({isLoading: false, users: response.data.items});
            },
            error => {
                // inform App to update the state after failing to receive the response
                this.props.updateAppState({isLoading: false, err: error.message});
            }
        )

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="Enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
