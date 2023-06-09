import React, {Component} from "react";

export default class App extends Component {
    //state变量名是固定的
    // state = {
    //     myText: "收藏",
    //     isCollect: false
    // }
    constructor() {
        super()
        this.state = {
            isCollect: false,
            userName: "stonebridge"
        }
    }

    render() {
        return (
            <div>
                <h1>欢迎来到react开发-{this.state.userName}</h1>
                <button onClick={this.collectFile}>{this.state.isCollect ? "收藏" : '取消收藏'}</button>
            </div>
        )
    }

    collectFile = () => {
        this.setState({
            isCollect: !this.state.isCollect,
            userName: 'zhangsan'
        }, () => {
            console.log('setState内回调', this.state.userName)
        })
        console.log('setState外调用', this.state.userName)
    }
}