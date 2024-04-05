import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const teamMembers = {
  선애: 'AI 모델 개발을 담당하고 있습니다.',
  효진: '백엔드 개발을 담당하고 있습니다.',
  유빈: '프론트엔드 개발을 담당하고 있습니다.',
  홍민: '프론트엔드 개발을 담당하고 있습니다.'
};

export default function Person() {
  const [selectedMember, setSelectedMember] = useState('');

  return (
    <ImageBackground
      source={require('../assets/images/plane.jpeg')}
      style={styles.background}
    >
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        {Object.keys(teamMembers).map((member) => (
          <TouchableOpacity
            key={member}
            style={styles.button}
            onPress={() => setSelectedMember(teamMembers[member])}
          >
            <Text style={styles.buttonText}>{member}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedMember && <Text style={styles.description}>{selectedMember}</Text>}
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
    padding: 20,
    marginBottom: 100,
  },
  buttonRow: {
    flexDirection: 'row', // 버튼을 가로로 정렬합니다.
    flexWrap: 'wrap', // 내용이 넘칠 경우 다음 줄로 넘깁니다.
    marginBottom: 20, // 설명 텍스트와의 간격
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 12,
    margin: 5, // 버튼 간의 간격
    backgroundColor: 'transparent', // 버튼 배경색을 투명하게 설정
  },
  buttonText: {
    color: 'white', // 텍스트 색상을 하얀색으로 설정
    fontSize: 15, // 폰트 크기 설정
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});
