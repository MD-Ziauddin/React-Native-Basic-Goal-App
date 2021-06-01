import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const getInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={getInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={props.onCancle} />
          </View>
          <View style={styles.btn}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  btnContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: "40%",
  },
});

export default GoalInput;
