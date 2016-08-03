'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import styles from './style.scss'
import TypeWriter from '../TypeWriter'

import {Row, Col} from 'react-bootstrap';

export default class Terminal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      finished: 0,
      run: props.run,
      writerRun: false,
      content:props.content,
      currentWriter:0,
    };

    this.start = this.start.bind(this);
    this.triggerNextWriter = this.triggerNextWriter.bind(this);
  }

  start(){
    this.setState({
      run:true,
    })
    setTimeout(()=>{
      this.refs["writer0"].start();
    },1000)
  }

  triggerNextWriter(){
        console.log("nextWRiter");

    const {currentWriter} = this.state;
    const next = currentWriter+1;
    const nextWriter = this.refs[`writer${next}`];
    if(typeof nextWriter != 'undefined'){
      nextWriter.start();
    }
    console.log(next);
    this.setState({
      currentWriter: next,
    })
  }

  componentWillReceiveProps(next) {
  }

  componentDidUpdate(){

  }

  componentDidMount() {
  
  }

  componentWillUnmount() {

  }

 

  render() {
    const {run,content,currentWriter,runWriter} = this.state;
    const terminalClass = classnames(styles.terminal,{run: run});
    const buttonClass = classnames(styles.button,{hide: run});
    return (
      <div className={styles.container}>
        <div className={buttonClass} onMouseDown={()=>{this.start()}} > start </div>
        <div className={terminalClass}>
        <div className="content">
          <Row>
         <Col><h3><TypeWriter ref="writer0" interval={10} content={content[0].text} onFinish={()=>{this.triggerNextWriter()}}/></h3></Col>
         <Col><TypeWriter ref="writer1" interval={10} content={content[1].text} onFinish={()=>{this.triggerNextWriter()}}/></Col>
         <Col><TypeWriter ref="writer2" interval={10} content={content[2].text} onFinish={()=>{this.triggerNextWriter()}}/></Col>
         <Col><TypeWriter ref="writer3" interval={10} content={content[3].text} onFinish={()=>{this.triggerNextWriter()}}/></Col>
         <Col><TypeWriter ref="writer4" interval={10} content={content[4].text}onFinish={()=>{this.triggerNextWriter()}}/></Col>
         <Col><TypeWriter ref="writer5" interval={10} content={content[5].text}onFinish={()=>{this.triggerNextWriter()}}/></Col>
         <Col><TypeWriter ref="writer6" interval={10} content={content[6].text}onFinish={()=>{this.triggerNextWriter()}}/></Col>
         <Col><TypeWriter ref="writer7" interval={10} content={content[7].text}onFinish={()=>{this.triggerNextWriter()}}/></Col>
          <Col><TypeWriter ref="writer8" interval={10} content={content[8].text}onFinish={()=>{this.triggerNextWriter()}}/></Col>
          </Row>
        </div>
        </div>
      </div>
    );
  }
};

Terminal.defaultProps = {

}


