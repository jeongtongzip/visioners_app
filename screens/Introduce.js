import React from 'react';
import { ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';

function Introduce() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/plane.jpeg')}
        style={styles.background}
      >
        <Text style={styles.title}>항공기 반입 금지 물품{'\n'}체크 서비스</Text>
        <Text style={styles.description}>
          이 서비스는{'\n'}
          AI 객체 인식 모델을 활용한{'\n'}항공기 반입 물품 체크 서비스 입니다.
        </Text>

        <Text style={styles.description2}>
        [ YOLO v5 ]{'\n'}
        </Text>
        <Text style={styles.description3}>
        객체인식 AI 모델입니다.{'\n'}
        </Text>

        <Text style={styles.description2}>
        [ SPRING-BOOT ]{'\n'}
        </Text>
        <Text style={styles.description3}>
        백엔드를 구성합니다.{'\n'}
        </Text>

        <Text style={styles.description2}>
        [ HTML+CSS+JAVASCRIPT ]{'\n'}
        </Text>
        <Text style={styles.description3}>
        웹 어플리케이션{'\n'}프론트엔드를 구성합니다.{'\n'}
        </Text>

        <Text style={styles.description2}>
        [ REACT-NATIVE ]{'\n'}
        </Text>
        <Text style={styles.description3}>
        모바일 어플리케이션{'\n'}프론트엔드를 구성합니다.{'\n'}
        </Text>
        
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    marginTop: 40,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  description2: {
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  description3: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
});

export default Introduce;