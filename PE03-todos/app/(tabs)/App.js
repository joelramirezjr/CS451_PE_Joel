import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import Input from './Input';
import Heading from './Heading';
import SubmitButton from './Button'; //decided to use this funxtion for the submit button

class App extends Component {
  constructor() {
    super();
    this.state = {
        inputValue: '',
        todos: [],
        type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  //THIS IS THE NEW STUFF FOR THE SUBMIT BUTTON!
submitTodo = () => {
  const { inputValue, todos } = this.state;

  if (inputValue.trim() === '') return;

  const newTodo = {
    title: inputValue,
    todoIndex: todos.length,
    complete: false,
  };

  this.setState({
    todos: [...todos, newTodo],
    inputValue: '',
  }, () => {
    console.log('State:', this.state);
  });
};

//END OF THE NEW STUFF FOR THE SUBMIT BUTTON!

  render() {
    const {inputValue} = this.state;
    return (
        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
            <Heading />
            <Input
              inputValue={inputValue}
              inputChange={text => this.inputChange(text)} 
            />
            <SubmitButton //added the submit button here
                title="Submit" onPress={this.submitTodo} 
            />
          </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;