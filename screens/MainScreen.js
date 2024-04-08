import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

function MainScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/plane.jpeg')}
      style={styles.background}
    >

    <View style={styles.container}>
      {/* 작품 소개 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Introduce')}
      >
        <Text style={styles.buttonText}>작품소개</Text>
      </TouchableOpacity>

      {/* 팀원 소개 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Person')}
      >
        <Text style={styles.buttonText}>팀원소개</Text>
      </TouchableOpacity>

      {/* 찾아보기 버튼 - CameraMain 화면으로 이동 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CameraMain')}
      >
        <Text style={styles.buttonText}>찾아보기</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderColor: 'white',
    backgroundColor: 'transparent',
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default MainScreen;