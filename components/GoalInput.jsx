import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { useState } from 'react';

const GoalInput=(props) => {
    const [enteredGoal, setEnteredGoal]= useState('');
    
    const goalInputHandler=(enteredText) => {
        setEnteredGoal(enteredText);
      };

      const addGoalHandler=() =>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      };
    
    return (
        <Modal 
            visible={props.visible} 
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <Image source={require('../assets/target.png')} style={styles.image}/>
                <TextInput
                style={styles.textInput}
                placeholder='Your course goal!'
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} 
                        color={'#f31282'}
                        />
                    </View>
                    <View  style={styles.button}>
                        <Button title='Add Goal'  onPress={addGoalHandler}/>
                    </View>
                </View>

            </View>
        </Modal>
    );

  }
  
  export default GoalInput;

  const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'pink'      
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    textInput: {
        borderWidth: 2,
        borderColor: 'skyblue',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
  });

  