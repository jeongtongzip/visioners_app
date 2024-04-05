import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function CameraMain({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/plane.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>국제/국내를 선택해주세요</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { borderColor: 'white' }]}
            onPress={() => navigation.navigate('International')}
          >
            <Text style={styles.buttonText}>국제선</Text>
          </TouchableOpacity>
          <View style={styles.buttonGap} />
          <TouchableOpacity
            style={[styles.button, { borderColor: 'white' }]}
            onPress={() => navigation.navigate('Domestic')}
          >
            <Text style={styles.buttonText}>국내선</Text>
          </TouchableOpacity>
        </View>
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
  },
  textContainer: {
    marginBottom: 60,
    marginTop: 90, // 텍스트를 아래쪽으로 이동합니다.
  },
  title: {
    fontFamily: 'Abster',
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 130,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'white',
  },
  buttonText: {
    fontFamily: 'Abster',
    color: 'white',
    fontSize: 16,
  },
  buttonGap: {
    width: 10,
  },
});
