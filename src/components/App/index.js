'use extensible'

import React, {Component} from 'react';
import AppActions from '../../flux/actions/AppActions';

const JSONFile = require('file!../../assets/data.json')

import BackgroundAnimation from '../BackgroundAnimation';

const images = [
  require('../../assets/vid/jpg/img01.jpg'),
]

export default class App extends Component{

  constructor(props){
    super(props)
  }

  componentWillMount(){
    AppActions.requestJSON(JSONFile);
  }

  render(){
    return (
      <div>
      <BackgroundAnimation images={images}/>
      {this.props.children}
      </div>
    )
  }
}
