'use extensible'

import React, {Component} from 'react';
import AppActions from '../../flux/actions/AppActions';

const JSONFile = require('file!../../assets/data.json')

import BackgroundAnimation from '../BackgroundAnimation';

const images = [
  require('../../assets/vid/jpg/img01.jpg'),
  require('../../assets/vid/jpg/img02.jpg'),
  require('../../assets/vid/jpg/img03.jpg'),
  require('../../assets/vid/jpg/img04.jpg'),
  require('../../assets/vid/jpg/img05.jpg'),
  require('../../assets/vid/jpg/img06.jpg'),
  require('../../assets/vid/jpg/img07.jpg'),
  require('../../assets/vid/jpg/img08.jpg'),
  require('../../assets/vid/jpg/img09.jpg'),
  require('../../assets/vid/jpg/img10.jpg'),
  require('../../assets/vid/jpg/img11.jpg'),
  require('../../assets/vid/jpg/img12.jpg'),
  require('../../assets/vid/jpg/img13.jpg'),
  require('../../assets/vid/jpg/img14.jpg'),
  require('../../assets/vid/jpg/img15.jpg'),
  require('../../assets/vid/jpg/img16.jpg'),
  require('../../assets/vid/jpg/img17.jpg'),
  require('../../assets/vid/jpg/img18.jpg'),
  require('../../assets/vid/jpg/img19.jpg'),
  require('../../assets/vid/jpg/img20.jpg'),

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
      <BackgroundAnimation run images={images}/>
      {this.props.children}
      </div>
    )
  }
}
