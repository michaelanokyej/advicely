import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchRandomAdvice } from "./api"

class App extends Component {
  state = {
    advice: ""
  }
  async componentDidMount() {
    const { data: { slip: { advice } } } = await fetchRandomAdvice();
    this.setState({ advice })
  }
  render(){

    return (<div className={styles.container}>
      <div>
        <blockquote><p>{this.state.advice}</p></blockquote>
      </div>
      <div className={styles.buttons}>
        <button onClick={
          async (e) => {
            e.preventDefault();
            const { data: { slip: { advice } } } = await fetchRandomAdvice();
            this.setState({ advice })
          }
        }>Give me advice!</button>
        <button><a href="https://michaelanokye.com/" target="_target">Developer</a></button>
        </div>
    </div>)
  }
}

export default App;