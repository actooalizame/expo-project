import Meteor , {createContainer} from 'react-native-meteor';
import React from 'react';
import CarListViewComponent from '../components/carListView';

Meteor.connect('ws://192.168.0.19:3000/websocket');

/*export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };*/

export default LinksScreen = createContainer(props => {
    const carsHandle = Meteor.subscribe('cars');
    return {
        carsReady: carsHandle.ready()
    };
  }, CarListViewComponent);
