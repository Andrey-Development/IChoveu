
import React, { useState, useContext } from 'react';
import { ActivityIndicator, Alert, Keyboard, Platform  } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns';

import { createUserSchema } from '../../utils/createUserValidation';
import LogoImg from '../../../assets/Rectangle-1.png';
import Input from '../../components/TextInput';
import { AuthContext } from '../../contexts/auth'

// import DatePicker from "../../components/DatePicker";

import {
  Background,
  Container,
  ContentScroll,
  Content,
  ImgHeader,
  TitleHeader,
  SubtitleHeader,
  AreaInput,
  LabelSmall,
  ViewBottom,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  TextBlue,
  Separator
} from './styles';
import { number } from 'yup';

export default function SignUp() {
  const navigation = useNavigation();
  const { CadastrarUser, loadingAuth } = useContext(AuthContext);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [cep, setCep] = useState(null);
  const [senha, setSenha] = useState(null);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpf: "",
      birth_date: new Date(),
      city: "",
    },
    resolver: yupResolver(createUserSchema),
  });

  const onChangedCep = (val) => {
    setCep(val);
    if (cep.length == 8) {
      console.log("fazer requisicao cep e popular cidade");
    }
  }

  const onSubmit = async (data) => {
    Keyboard.dismiss();
    if(data.password !== senha) {
      setSenha("");
      Alert.alert('As senhas informadas são diferentes!');
      return;
    }
    try {
      const birthDate = format(new Date(data.birth_date), 'yyyy-MM-dd');

      const dataApi = {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
        cpf: data.cpf,
        birth_date: birthDate,
        city: data.city,
        image: data.image,
      };

      // Envie os dados para a API
      CadastrarUser(dataApi);

      // Limpe os campos após o envio bem-sucedido
      reset({
        name: "",
        email: "",
        cpf: "",
        birth_date: new Date(),
        admin: false,
        salary: "",
        city: "",
        image: "teste",
      });
      // navigation.navigate('Home');
    } catch (error) {
      // Lide com erros de envio para a API aqui
      console.error("Erro ao enviar dados:", error.message);
    }
  }

  return (
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <ImgHeader
          source={LogoImg}
        />
        <TitleHeader>Criar Conta</TitleHeader>
        <SubtitleHeader>Insira os seus dados</SubtitleHeader>


        <ContentScroll>
          <Content>

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="NOME"
                  name="name"
                  placeholder="DIGITE SEU NOME"
                  onChange={onChange}
                  value={value}
                  error={errors.name}
                />
              )}
              name="name"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="E-MAIL"
                  name="email"
                  placeholder="DIGITE SEU E-MAIL"
                  onChange={onChange}
                  value={value}
                  error={errors.email}
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="CPF"
                  name="cpf"
                  placeholder="DIGITE SEU CPF"
                  onChange={onChange}
                  value={value}
                  error={errors.cpf}
                />
              )}
              name="cpf"
            />

            {/* <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <LabelSmall>DATA DE NASCIMENTO</LabelSmall>
                  <DatePicker
                    value={value}
                    onChange={onChange}
                    showPicker={showDatePicker}
                    setShowPicker={setShowDatePicker}
                  />
                  {errors.birth_date && <ErrorText>{errors.birth_date.message}</ErrorText>}
                </>
              )}
              name="birth_date"
            /> */}

            <Input
              label="CEP"
              placeholder="DIGITE SEU CEP"
              keyboardType="numeric"
              maxLength={8}
              value={cep}
              onChangeText={(text) => onChangedCep(text)}
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="CIDADE"
                  name="city"
                  placeholder="DIGITE SEU CIDADE"
                  onChange={onChange}
                  value={value}
                  error={errors.city}
                  disabled
                />
              )}
              name="city"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="SENHA"
                  name="password"
                  placeholder="DIGITE SUA SENHA"
                  secureTextEntry={true}
                  onChange={onChange}
                  value={value}
                  error={errors.password}
                />
              )}
              name="password"
            />

            <Input
              label="CONFIRMAR SENHA"
              placeholder="DIGITE NOVAMENTE SUA SENHA"
              secureTextEntry={true}
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
          </Content>

          <ViewBottom>
            <SubmitButton activeOpacity={0.8} onPress={handleSubmit(onSubmit)}>
              {
                loadingAuth ? (
                  <ActivityIndicator size={20} color="#FFF" />
                ) : (
                  <SubmitText>SignUp</SubmitText>
                )
              }
            </SubmitButton>

            <Link onPress={() => navigation.navigate('SignIn')}>
              <LinkText>Já possui uma conta? <TextBlue>Login</TextBlue></LinkText>
            </Link>
          </ViewBottom>
        </ContentScroll>

      </Container>
    </Background>
  )
}