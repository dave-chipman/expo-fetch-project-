import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [document, setDocument] = useState('');

  useEffect(() => {
    fetch('https://navigatortourism.com:3000/visa/document')
      .then((response) => response.text())
      .then((text) => {
        setDocument(text);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>{document}</Text>
    </View>
  );
}
