import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Meteor, { connectMeteor, MeteorListView } from 'react-native-meteor';

class CarListViewComponent extends Component {
	renderRow(car) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{car.name}</Text>
      </View>
    );
  }

  render() {
    const { carsReady } = this.props;
    if (!carsReady) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        

        <MeteorListView
          collection="cars"
          style={styles.container}
          /*selector={{status:'iddlee'}}*/
          options={{sort: {createdAt: -1}}}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

}

export default CarListViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC'
  },
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowText: {
    fontSize: 16
  },
  deleteText: {
    color: 'red',
    fontWeight: '700'
  }
});