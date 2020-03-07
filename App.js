import React from "react";
import { View, Text, TextInput, Button } from "react-native";

class App extends React.Component {
  state = {
    text: "",
    todos: []
  };
  deleteTodo = t => {
    arr = this.state.todos;
    index = arr.indexOf(t);
    arr.splice(index, 1);
    this.setState({ todos: arr });
  };
  addTodo = () => {
    arr = this.state.todos;
    arr.push(this.state.text);
    this.setState({ todos: arr, text: "" });
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
        <Text>Hola React Native</Text>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyles: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1
  }
};

export default App;
