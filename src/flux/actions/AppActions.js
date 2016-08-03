import alt from '../alt';
import api from '../../lib/api.js';
import Immutable from 'immutable';

class AppActions {

  /*
   *
   * actions
   *
   */
  requestJSON(path){
    return (dispatch) =>{
      dispatch();
      api.get(path)
         .then((data)=>{
            setTimeout(()=>{
              this.receiveJSONData(data);
            },1000)
         })
         .catch((error)=>{
           this.receiveJSONDataError(error)
         })
    }
  }
  
  receiveJSONData(data){
    return data; 
  }

  receiveJSONDataError(error){
    return error;
  }



}

export default alt.createActions(AppActions);