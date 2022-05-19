// import { Component } from 'react'
// import './app.scss'

// class App extends Component {

//   componentDidMount () {}

//   componentDidShow () {}

//   componentDidHide () {}

//   componentDidCatchError () {}

//   // this.props.children 是将要会渲染的页面
//   render () {
//     return this.props.children
//   }
// }

// export default App


import { Component } from "react";
import { Provider } from "react-redux";
import models from "./models";
import dva, { createApp } from "./utils/dva";
import "./app.scss";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    // console.log(dva);
    const dvaApp = dva.createApp({
      initialState: {},
      models,
    });
    const store = dvaApp.getStore();
    // console.log('store',store);
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;


