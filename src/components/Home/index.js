'use strict'
'use extensible'

import React from 'react';

import connectToStores from '../../utils/connectToStores';
import AppStore from '../../flux/stores/AppStore';

// see below for how these local styles can be used in your app
import styles from './style.scss';
import JSONPretty from 'react-json-pretty';

import {Grid, Row, Col} from 'react-bootstrap';

import TypeWriter from '../TypeWriter';


export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      current:0,
    }
  }

  next(){
    const {current} = this.state;
    const next = current+1;
    const nextWriter = this.refs[`writer${next}`];
    if(typeof nextWriter != 'undefined'){
      nextWriter.start();
    }
    this.setState({
      current: next,
    })
  }
  
  render() {
    const {json,isLoading} = this.props;    
    if(isLoading){
      return (
        <div>
          <Grid>
            <Row>
              <Col xs={12}>
              loading
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }else{
    return (
        <div>
          <Grid>
            <Row>
              <Col xs={4}>
                <TypeWriter ref="writer0" 
                            run 
                            onFinish={()=>{this.next()}}
                            content={json.page1[0].text}/>
                  
              </Col>
              <Col xs={8} className="right">
                <TypeWriter ref="writer1" 
                            onFinish={()=>{this.next()}}
                            content={json.page1[1].text}/>          
              </Col>
            </Row>
            <Row>
              <Col xs={4}> 
                <TypeWriter ref="writer2" 
                            onFinish={()=>{this.next()}}
                            content={json.page1[2].text}/>   
              </Col>
              <Col xs={8} className="right">
                  <TypeWriter ref="writer3" 
                            onFinish={()=>{this.next()}}
                            content={json.page1[3].text}/>   
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="center">
                <h1>
                  <TypeWriter ref="writer4" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[4].text}/>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
              <TypeWriter ref="writer5" 
                            onFinish={()=>{this.next()}}
                            content={json.page1[5].text}/>   
              </Col>
              <Col xs={8} className="right">
                <TypeWriter ref="writer6" 
                            onFinish={()=>{this.next()}}
                            content={json.page1[6].text}/>   
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <TypeWriter ref="writer7" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[7].text}/>   
              </Col>
              <Col xs={12}>
                <TypeWriter ref="writer8" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[8].text}/>   
              </Col>
              <Col xs={12}>
                  <TypeWriter ref="writer9" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[9].text}/>  
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                  <TypeWriter ref="writer10" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[10].text}/>  
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="center">
                <h2>
                  <TypeWriter ref="writer11"  
                              onFinish={()=>{this.next()}}
                              content={json.page1[11].text}/> 
                </h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <TypeWriter ref="writer12" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[12].text}/>  
              </Col>
              <Col xs={12}>
                  <TypeWriter ref="writer13" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[13].text}/>  
              </Col>
              <Col xs={12}>
                  <TypeWriter ref="writer14" 
                              onFinish={()=>{this.next()}}
                              content={json.page1[14].text}/>  
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }
};

function getState(props){
  const {json,isLoading} = AppStore.getState()
  return {
    json,
    isLoading
  };
}

export default connectToStores(Home,[AppStore], getState);