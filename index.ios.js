import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class TimerBug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneSec: false,
      oneAndHalfSec: false,
      threeSec: false
    };
  }

  componentWillMount() {
    console.log('Component Will Mount');
    setTimeout(() => {
      console.log('1000 ms Timeout called.');
      this.setState({oneSec: true});
    }, 1000); // CHANGE THIS DELAY TO 3000 TO BREAK IT.
    setTimeout(() => {
      console.log('1500 ms Timeout called.');
      this.setState({oneAndHalfSec: true});
    }, 1500);
    setTimeout(() => {
      console.log('3000 ms Timeout called.');
      this.setState({threeSec: true});
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          1000ms timeout fired:  {this.state.oneSec.toString()}
        </Text>
        <Text>
          1500ms timeout fired:  {this.state.oneAndHalfSec.toString()}
        </Text>
        <Text>
          3000ms timeout fired:  {this.state.threeSec.toString()}
        </Text>
        <Button
          title='Push to fire a 1000ms Timeout.'
          onPress={()=>{
            setTimeout(() => {
              console.log('1000 ms Timeout called from button.');
            }, 1000);
          }}
        />
        <Button
          title='Push to fire a 3000ms Timeout.'
          onPress={()=>{
            setTimeout(() => {
              console.log('3000 ms Timeout called from button.');
            }, 3000);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('TimerBug', () => TimerBug);
