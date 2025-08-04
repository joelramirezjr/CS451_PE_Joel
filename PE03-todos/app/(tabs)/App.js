import React, { Component } from 'react';
// Add Button for the submit Button feature we are adding to the mobile App
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TodoList from '../../components/TodoList';
import TabBar from '../../components/TabBar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };

    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  setType(type) {
    this.setState({ type });
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    const { inputValue, todos } = this.state;

    if (inputValue.trim() === '') return;

    const newTodo = {
      title: inputValue,
      todoIndex: todoIndex++,
      complete: false,
    };

    this.setState(
      {
        todos: [...todos, newTodo],
        inputValue: '',
      },
      () => {
        console.log('New Todo Added:', newTodo.title);
        console.log('State:', this.state);
      }
    );
  }

  toggleComplete(todoIndex) {
    const todos = this.state.todos.map((todo) =>
      todo.todoIndex === todoIndex
        ? { ...todo, complete: !todo.complete }
        : todo
    );
    this.setState({ todos }, () => {
      console.log(`Toggled complete for todoIndex: ${todoIndex}`);
      console.log('State:', this.state);
    });
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos }, () => {
      console.log(`Deleted todo with index: ${todoIndex}`);
      console.log('State:', this.state);
    });
  }

  render() {
    const { inputValue, todos, type } = this.state;

    let filteredTodos = todos;
    if (type === 'Active') {
      filteredTodos = todos.filter((todo) => !todo.complete);
    } else if (type === 'Complete') {
      filteredTodos = todos.filter((todo) => todo.complete);
    }

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.content}
        >
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={filteredTodos}
          />
          <Button
            title="Submit"
            onPress={this.submitTodo}
          />
        </ScrollView>

        <View style={styles.tabBar}>
          {['All', 'Active', 'Complete'].map((tab) => (
            <Text
              key={tab}
              style={[
                styles.tab,
                this.state.type === tab && styles.selectedTab,
              ]}
              onPress={() => this.setType(tab)}
            >
              {tab}
            </Text>
          ))}
        </View>
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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#fff',
  },
  tab: {
    color: '#888',
    fontSize: 16,
  },
  selectedTab: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
