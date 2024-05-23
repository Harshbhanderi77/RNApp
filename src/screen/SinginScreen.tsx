import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from '../style/color';
import {InputLogin} from '../component/categoryslider/InputLogin';
import {replace, Routes} from '../screennavigation/Navigation';
import {Loginbutton} from '../component/Button/loginbutton';
import {Logoscreen} from '../component/logoscreen';
import { LoginScreentext } from "../component/LoginScreentext";

export const SinginScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputArrar = [
    {
      key: 0,
      // type: 'Name',
      // value: name,
      placeholder: 'Enter your Name',
      onchange: setName,
      errorText: nameError,
      keyboardType: 'default',
      maxLength: 30,
    },
    {
      key: 1,
      placeholder: 'Enter your Email',
      onchange: setEmail,
      errorText: emailError,
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      // value: email,
    },
    {
      key: 2,
      placeholder: '+91 7985426412',
      onchange: setPhoneNumber,
      errorText: phoneError,
      keyboardType: 'phone-pad',
      maxLength: 10,
    },
    {
      key: 3,
      placeholder: 'Enter your Password',
      onchange: setPassword,
      errorText: passwordError,
      keyboardType: 'default',
      maxLength: 8,
      secureTextEntry: !showPassword,
      autoCapitalize: 'none',
    },
  ];

  //validation
  const handleLogin = () => {
    let isValid = true;

    // names
    if (!name.trim()) {
      setNameError('Name is required ');
      isValid = false;
    } else if (name.length < 4 || name.length > 15) {
      setNameError('Name is required 4 characters');
      isValid = false;
    } else {
      setNameError('');
    }

    //email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    //phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber.trim()) {
      setPhoneError('Phone number is required');
      isValid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
      setPhoneError('Invalid phone number length');
      isValid = false;
    } else {
      setPhoneError('');
    }

    //password
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Invalid password length');
      isValid = false;
    } else {
      setPasswordError('');
    }
    console.log('data:', isValid);

    return isValid;
  };

  const handleLoginPress = () => {
    if (handleLogin()) {
      console.log('Login successful');
      replace({screenName: Routes.Home});
    } else {
      console.log('Login failed');
    }
  };

  return (
    <View
      style={{backgroundColor: color.white, flex: 1, justifyContent: 'center'}}>
      <ScrollView>
        <LoginScreentext />
        <Logoscreen />
        <View style={{justifyContent: 'center', marginTop: 16}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: color.black, fontSize: 30, fontWeight: '600'}}>
              Sing-up
            </Text>
          </View>
          {inputArrar.map(item => (
            <InputLogin
              key={item.key}
              placeholder={item.placeholder}
              keyboardType={item.keyboardType}
              setname={item.onchange}
              errorText={item.errorText}
              maxLength={item.maxLength as number}
              autoCapitalize={item.autoCapitalize}
              secureTextEntry={item.secureTextEntry}
            />
          ))}
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              // position: 'relative',
              marginHorizontal: 40,
            }}>
            <Text
              style={{
                color: color.black,
              }}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </Text>
          </TouchableOpacity>
          <Loginbutton screenName={'Sing-up'} onPress={handleLoginPress} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
