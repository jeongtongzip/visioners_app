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
    backgroundColor: 'transparent', // 배경색을 설정
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5, // 버튼 간의 간격
    borderColor: 'white', // 테두리 색상을 하얀색으로 설정
    backgroundColor: 'transparent', // 버튼 배경색을 투명하게 설정
    width: 120, // 버튼의 너비
    alignItems: 'center', // 버튼 내 텍스트 중앙 정렬
  },
  buttonText: {
    color: 'white', // 텍스트 색상을 하얀색으로 설정
    fontSize: 14, // 폰트 크기 설정
    // fontFamily 속성은 커스텀 폰트를 사용할 경우 설정하며, 사용 가능한 폰트로 설정해야 합니다.
    // React Native에서 기본적으로 제공하는 폰트 또는 앱에 포함된 커스텀 폰트를 사용해야 합니다.
  },
});

export default MainScreen;