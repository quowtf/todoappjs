import React from "react";
import { View, Text, TextInput, Button } from "react-native";

class App extends React.Component {
  state = {
    text: "",
    todo: ""
  };
  addTodo = () => {
    this.setState({ todo: this.state.text });
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
        <Text>{this.state.todo}</Text>
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
