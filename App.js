import React from "react";
import { View, Text, TextInput, Button } from "react-native";

class App extends React.Component {
  state = {
    text: "",
    todo: []
  };
  addTodo = () => {
    newTodo = this.state.todo;
    newTodo.push(this.state.text);
    this.setState({ todo: newTodo });
  };
  renderTodos = () => {
    return this.state.todo.map(t => {
      return <Text key={t}>{t}</Text>;
    });
  };
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text>Hola React Native</Text>
        <TextInput
          style={styles.inputStyles}
          onChangeText={newText => this.setState({ text: newText })}
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
