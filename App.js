import React from "react";
import { View, Text, TextInput } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hola React Native</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "grey",
            borderWidth: 1
          }}
        />
      </View>
    );
  }
}

export default App;
