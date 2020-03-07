import React from "react";
import { View, Text, TextInput, Button } from "react-native";

class App extends React.Component {
  state = {
    text: "",
    todos: []
  };
  deleteTodo = t => {
    todos = this.state.todos;
    index = todos.indexOf(t);
    todos.splice(index, 1);
    this.setState({ todos });
  };
  addTodo = () => {
    todos = this.state.todos;
    todos.push(this.state.text);
    this.setState({ todos, text: "" });
  };
  renderTodos = () => {
    return this.state.todos.map(todo => {
      return (
        <Text
          key={todo}
          onPress={() => {
            this.deleteTodo(todo);
          }}
        >
          {todo}
        </Text>
      );
    });
  };
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.header}>Todo App</Text>
        <TextInput
          style={styles.inputStyles}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button title="Add Todo" color="grey" onPress={this.addTodo} />
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 50
  },
  inputStyles: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1
  },
  header: {
    fontSize: 30,
    color: "grey",
    fontWeight: "bold"
  }
};

export default App;
