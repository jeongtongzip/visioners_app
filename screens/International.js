import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function International() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const switchCamera = () => {
    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('photo', photo);
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={switchCamera}>
            <Text style={styles.buttonText}>카메라 전환</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.buttonText}>촬영하기</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // 하단에 배치
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // 버튼들을 중앙정렬
    marginBottom: 20,
    marginTop: 700, // 화면 하단부와의 여백
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20, // 버튼 사이의 간격 조정
    borderColor: 'white',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});
