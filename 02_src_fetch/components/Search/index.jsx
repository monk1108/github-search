import React, { Component } from 'react'
import PubSub from "pubsub-js";

export default class Search extends Component {

    search = async() => {
        const {keyWordElement:{value:keyWord}} = this;
        // inform List to update the state before sending the request
        PubSub.publish("search", {isFirst: false, isLoading: true});
        // send the request using fetch
        try {
            const response = await fetch(`/api1/search/users?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish("search", {isLoading: false, users: data.items});
        } catch (error) {
            console.log("Failed to fetch请求出错: ", error);
            PubSub.publish("search", {isLoading: false, err: error.message});
        }


        // #region send the request using axios
        // axios.get(`/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         // inform List to update the state after successfully receiving the response
        //         PubSub.publish("search", {isLoading: false, users: response.data.items});
        //     },
        //     error => {
        //         // inform List to update the state after failing to receive the response
        //         PubSub.publish("search", {isLoading: false, err: error.message});
        //     }
        // )
        // #endregion

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
