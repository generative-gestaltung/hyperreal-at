'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.scss'

export default class TypeWriter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      current:0,
      img: props.images[0],
      fps: 30,
    };
  }


  componentWillReceiveProps(next) {
  }

  componentDidUpdate(){
  }

  componentDidMount() {
    const {run,fps} = this.state;
    const {images} = this.props;
    if(run){
      const interval = 1000/fps;
      setInterval(()=>{
        const current = this.state.current;
        let next = current+1;
        if(next > images.length-1){
          next = 0;
        }
        this.setState({
          current:next,
          img:images[next],
        })
      },interval)
    }
  }

  componentWillUnmount() {
  }


  render() {
    const {img} = this.state;
    return(
      <div className={styles.img} style={{backgroundImage:`url(${img})`}}/>
    )
  }
};

TypeWriter.defaultProps = {
  run: false,
}

TypeWriter.interval = 50;  
