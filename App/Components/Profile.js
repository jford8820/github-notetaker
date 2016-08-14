import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Badge from './Badge';
import Separator from '../Helpers/Separator';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});

class Profile extends React.Component {
  getRowTitle(user, item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    var userInfo = this.props.userInfo;
    var topicArray = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArray.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index} />
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
            <Separator />
          </View>
        )
      }
    });

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
};

module.exports = Profile;
