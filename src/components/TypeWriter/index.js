'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.scss'

export default class TypeWriter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      finished: 0,
      run: props.run,
      content:"",
    };

    this.type = this.type.bind(this);
    this.start = this.start.bind(this);
  }

  start(){
    let thisDOMNode = ReactDOM.findDOMNode(this);
    let text = this.props.content;
    this.setState({
      run:true,
    })
    this.type(text,0);
  }

  componentWillReceiveProps(next) {
  }

  componentDidUpdate(){

  }

  componentDidMount() {
    let thisDOMNode = ReactDOM.findDOMNode(this);
    let text = this.props.content;
    const dummy = this.refs.dummy;
    const content = this.refs.content;
    content.style.width = `${dummy.clientWidth + 20}px`;
    const {run} = this.state;
    if(run){
      this.type(text,0);
    }
  }

  componentWillUnmount() {

  }

  type(text, n) {
    if (n < (text.length)) {
      let currentText = text.substring(0, n+1);
      let currentLetter = currentText[n];

      if(currentLetter == "<"){
        TypeWriter.interval = 0;
      }

      if(TypeWriter.interval == 0 && currentLetter == ">"){
        TypeWriter.interval = 50;
      }

      const content = this.refs.content;
      this.setState({
        content: currentText,
      })
      //content.innerHTML = currentText
      n++;
      setTimeout(function() {
        this.type(text, n)
      }.bind(this), TypeWriter.interval);
    }
    else{
      this.props.onFinish();
      this.setState({finished: 1})
    }
  }

  render() {
    let cursor,dummy;
    const {content} = this.props
    if(!this.state.finished && this.state.run){
      cursor = <span className={styles.cursor}>|</span>
    }
    if(!this.state.finished){
      dummy = <span ref="dummy" className={styles.dummy}>{content}</span>
    }

    return (
      <span className={styles.writer}>
        {dummy}
        <span ref="content" className={styles.content}>{this.state.content}</span>
      </span>
    );
  }
};

TypeWriter.defaultProps = {
  run: false,
}

TypeWriter.interval = 50;  
