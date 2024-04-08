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
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 12,
    margin: 5,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});
