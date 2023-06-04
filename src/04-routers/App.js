import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import MyNavLink from "./MyNavLink";


export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 原生html中，靠<a>跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在React中靠路由链接实现切换组件--编写路由链接(引起路径变化) */}
                            {/*<NavLink activeClassName='stonebridgeClass' className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink activeClassName='stonebridgeClass' className="list-group-item" to="/home">Home</NavLink>*/}

                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/* 注册路由 */}
                                    <Route path="/about" component={About}/>
                                    <Route exact path="/home" component={Home}/>
                                    <Redirect to="/home"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
