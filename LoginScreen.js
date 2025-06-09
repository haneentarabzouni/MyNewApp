import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function LoginScreen({ navigation }) {
  const [nationalId, setNationalId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo.jpg')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>أهلاً بك في حيا</Text>
      <Text style={styles.subtitle}>تجربتك المالية الفريدة تبدأ من هنا</Text>

      <TextInput
        style={styles.input}
        placeholder="رقم الهوية"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={nationalId}
        onChangeText={setNationalId}
      />

      <PhoneInput
        ref={phoneInput}
        defaultValue=""
        defaultCode="SA"
        layout="first"
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.phoneTextContainer}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginOtp', { phone: phoneNumber })}
      >
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>

      <View style={styles.registerRow}>
        <Text style={styles.registerText}>ليس لديك حساب سابق؟ </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>قم بالتسجيل الآن</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Image source={require('./assets/surface1.jpg')} style={styles.footerLogo} resizeMode="contain" />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004d5f',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#d2e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    textAlign: 'right',
  },
  phoneContainer: {
    width: '100%',
    height: 60,
    marginBottom: 20,
    backgroundColor: '#d2e0e0',
    borderRadius: 10,
  },
  phoneTextContainer: {
    backgroundColor: '#d2e0e0',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#a5e9e1',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#004d5f',
    textAlign: 'center',
  },
  registerRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  registerText: {
    color: '#ffffff',
  },
  registerLink: {
    color: '#a5e9e1',
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
  },
  footerLogo: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  footerText: {
    color: '#ffffff',
    fontSize: 13,
    textAlign: 'center',
  },
});