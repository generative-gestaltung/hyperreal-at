import React, {Component} from 'react';

export default function connectToStores(Comp,stores,getState){
  return class StoreConnection extends Component{
    constructor(props){
      super(props);
      this.handleStoresChanged = this.handleStoresChanged.bind(this);
      this.state = getState(props);
    }

    componentWillReceiveProps(nextProps){
      this.setState(getState(nextProps));
    }

    componentDidMount(){
      stores.forEach(store => 
        store.listen(this.handleStoresChanged)
      );
    }

    componentWillUnmount(){
      stores.forEach(store =>
        store.unlisten(this.handleStoresChanged)
      );
    }

    handleStoresChanged(){
      let newState = getState(this.props);
      if(this.state != newState && this.state !== undefined){
        this.setState(getState(this.props));
      }
    }

    render(){
      return <Comp {...this.props} {...this.state} />;
    }
  }
}