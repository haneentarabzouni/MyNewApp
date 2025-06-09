import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function LoginOtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [secondsLeft, setSecondsLeft] = useState(60);

  // استلام رقم الجوال من الشاشة السابقة
  const route = useRoute();
  const { phone } = route.params || {};
  const last3 = phone?.slice(-3);

  // تايمر تنازلي
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      {/* الشعار */}
      <Image source={require('./assets/Logo.jpg')} style={styles.logo} resizeMode="contain" />

      {/* العنوان */}
      <Text style={styles.title}>التحقق من البيانات</Text>
      <Text style={styles.subtitle}>
        تم إرسال رسالة تحتوي على رمز سري إلى جوالك المنتهي بـ ******{last3}
      </Text>

      {/* مربعات OTP */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handleOtpChange(index, value)}
          />
        ))}
      </View>

      {/* زر التحقق */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>التحقق</Text>
      </TouchableOpacity>

      {/* التايمر */}
      <Text style={styles.resendText}>
        {secondsLeft === 0
          ? 'إرسال الرمز مرة أخرى'
          : `إعادة إرسال الرمز بعد 00:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`}
      </Text>

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
    paddingTop: 50,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 30,
  },
  otpBox: {
    width: 45,
    height: 50,
    backgroundColor: '#d2e0e0',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#a5e9e1',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#004d5f',
    textAlign: 'center',
  },
  resendText: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 30,
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