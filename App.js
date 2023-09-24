import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [showFlashlight, setShowFlashlight] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showImage1, setShowImage1] = useState(true);
  const [isToggled, setIsToggled] = useState(false);
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#fff'); // Initialize background color

  const toggleFlashlight = () => {
    setShowFlashlight(!showFlashlight);
    setButtonDisabled(true);
  };

  const toggleCounter = () => {
    setShowCount(!showCount);
    setButtonDisabled(true);
  };

  const toggleImage = () => {
    setShowImage1(!showImage1);
    setIsToggled(!isToggled);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const toggleComponentVisibility = () => {
    setShowFlashlight(false);
    setShowCount(false);
    setButtonDisabled(false);
    setBackgroundColor('#fff');
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      
      <StatusBar style="auto" />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.toggleBtn}>
          <Button title="Flashlight" onPress={toggleFlashlight} disabled={buttonDisabled} />
          <Button title="Counter" onPress={toggleCounter} disabled={buttonDisabled} />
        </View>
        {showFlashlight && (
          <View style={{ width: 320 }}>
            <View style={{ marginBottom: 80 }}>
              {showImage1 ? (
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=160&id=110429&format=png',
                  }}
                  style={{ width: 320, height: 320, marginBottom: 50 }}
                />
              ) : (
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=160&id=65436&format=png',
                  }}
                  style={{ width: 320, height: 320, marginBottom: 50 }}
                />
              )}
              {isToggled ? (
                <Button title="Off" color={'red'} onPress={() => {toggleImage();}} />
              ) : (
                <Button title="On" color={'green'} onPress={() => {toggleImage();}} />
              )}
            </View>
            <Button
              title={showFlashlight ? 'Back' : 'Show Component'}
              onPress={toggleComponentVisibility}
            />
          </View>
        )}

        {showCount && (
          <View style={{ width: 320 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.text}>{count}</Text>
            </View>
            <View style={styles.crementBtn}>
              <Button title="Increment"  onPress={increment} />
              <Button title="Decrement"  onPress={decrement} />
            </View>
            <View style={{ width: 320, marginTop: 125 }}>
              <Button title={showCount ? 'Back' : ''} onPress={toggleComponentVisibility} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
     fontSize: 200, 
     fontWeight: 'bold' 
  },

  toggleBtn : {
      flexDirection: 'row',
      marginTop: 40,
      marginBottom: 80,
      justifyContent: 'space-evenly',
      width: 390,   
  },

  crementBtn: { 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    marginTop: 60 }
});
