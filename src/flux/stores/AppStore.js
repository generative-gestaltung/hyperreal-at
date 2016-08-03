import alt from '../alt';
import immutable from 'alt-utils/lib/ImmutableUtil';
import Immutable from 'immutable';

import AppActions from '../actions/AppActions';

class AppStore {

  constructor() {
    this.bindActions(AppActions);
    this.state = Immutable.Map({
      json: null,
      isLoading:false,
    });

    this.exportPublicMethods({

    });
  }

  onRequestJSON(){
    let newState = this.state.withMutations((state)=>{
      state.set("isLoading",true);
    });
    this.setState(newState);
  }

  onReceiveJSONData(json){
    let newState = this.state.withMutations((state)=>{
      state.set("json",json);
      state.set("isLoading",false);
    });
    this.setState(newState);
  }
}



export default alt.createStore(immutable(AppStore));
