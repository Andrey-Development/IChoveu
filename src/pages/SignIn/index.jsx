import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import LogoImg from '../../../assets/logo.png';

import {
  Background,
  Container,
  Content,
  Logo,
  AreaInput,
  LabelSmall,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  Separator
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={LogoImg}
        />

        <AreaInput>
          <LabelSmall>E-MAIL</LabelSmall>
          <Input
            placeholder="DIGITE SEU E-MAIL"
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
          <Separator />
        </AreaInput>

        <AreaInput>
          <LabelSmall>SENHA</LabelSmall>
          <Input
            placeholder="DIGITE SUA SENHA"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Separator />
        </AreaInput>

        <Content>
          <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
            {
              loadingAuth ? (
                <ActivityIndicator size={20} color="#FFF" />
              ) : (
                <SubmitText>LogIn</SubmitText>
              )
            }
          </SubmitButton>

          <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta</LinkText>
          </Link>
        </Content>

      </Container>

    </Background>
  )
}