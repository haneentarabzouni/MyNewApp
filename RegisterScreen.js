import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import Checkbox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RegisterScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [date, setDate] = useState(null); // تاريخ الميلاد
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      {/* الشعار */}
      <Image source={require('./assets/Logo.jpg')} style={styles.logo} resizeMode="contain" />

      {/* العنوان */}
      <Text style={styles.title}>أهلاً بك في حيا</Text>
      <Text style={styles.subtitle}>تجربتك المالية الفريدة تبدأ من هنا</Text>

      {/* رقم الهوية */}
      <TextInput style={styles.input} placeholder="رقم الهوية" placeholderTextColor="#666" />

      {/* تاريخ الميلاد */}
      <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
        <Text style={{ color: date ? '#000' : '#666', textAlign: 'right' }}>
          {date ? date.toLocaleDateString('ar-EG') : 'تاريخ الميلاد'}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}

      {/* تسجيل الدخول السابق */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>لديك حساب سابق؟ </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>قم بتسجيل الدخول</Text>
        </TouchableOpacity>
      </View>

      {/* الشروط */}
      <View style={styles.policyContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#a5e9e1' : undefined}
          style={styles.checkbox}
        />
        <Text style={styles.policyText}>
          من خلال إنشاء الحساب، فإنك توافق على سياسة الخصوصية والشروط والأحكام.
        </Text>
      </View>

      {/* زر التسجيل */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpOtp')}>
        <Text style={styles.buttonText}>التسجيل</Text>
      </TouchableOpacity>

      {/* شعار البنك */}
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
  loginContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  loginText: {
    color: '#ffffff',
  },
  loginLink: {
    color: '#a5e9e1',
    textDecorationLine: 'underline',
  },
  policyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  policyText: {
    color: '#ffffff',
    flex: 1,
  },
  button: {
    backgroundColor: '#a5e9e1',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#004d5f',
    textAlign: 'center',
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