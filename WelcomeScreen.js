import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* ✅ الخلفية */}
      <Image 
     //   source={require('./assets/surface1.jpg')} // ✳️ صورة الخلفية لو تبغى تستخدمها
        style={styles.footerLogo}
        resizeMode="contain"
      />

      {/* ✅ شعار Haya */}
      <Image 
        source={require('./assets/Logo.jpg')} // ✳️ شعار Haya
        style={styles.logo}
        resizeMode="contain"
      />

      {/* ✅ النص الترحيبي */}
      <View style={styles.textContainer}>
        <Text style={styles.title}> hi </Text>
        <Text style={styles.subtitle}>تجربتك المالية الفريدة تبدأ من هنا</Text>
      </View>

      {/* ✅ الزر */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
  <Text style={styles.buttonText}>← البدء</Text>
</TouchableOpacity>

      {/* ✅ شعار البنك */}
      <View style={styles.footer}>
        <Image 
          source={require('./assets/surface1.jpg')} // ✳️ شعار البنك المركزي
          style={styles.footerLogo}
          resizeMode="contain"
        />
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004d5f', // ✳️ لون الخلفية الأساسي
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  logo: {
    width: 200,
    height: 80,
    marginTop: 40,
  },
  textContainer: {
    alignItems: 'center',
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
  },
  button: {
    backgroundColor: '#a5e9e1', // ✳️ لون الزر
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#004d5f',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerLogo: {
    width: 60,
    height: 60,
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
});