import * as React from 'react';
import { StyleSheet, Button, View, TextInput, Linking } from 'react-native';

function WhatsApp({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={styles.input} value={number} onChangeText={onChangeNumber} />
      <Button
        onPress={() => Linking.openURL(`whatsapp://send?text=hello&phone=+91${number}`)}
        title="Go" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default WhatsApp;