import Meteor, {createContainer} from 'react-native-meteor';
import React from 'react';
import MeteorListViewComponent from '../components/meteorListView';

Meteor.connect('ws://192.168.0.19:3000/websocket');

export default ListScreen = createContainer(props => {
  const itemsHandle = Meteor.subscribe('items');
  return {
      itemsReady: itemsHandle.ready()
  };
}, MeteorListViewComponent);