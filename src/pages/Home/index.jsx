import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import {
    Container,
    Message,
    Name,
    NewLink,
    NewText,
    LogoutButton,
    LogoutText
} from './styles';


import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const { user, signOut, loading } = useContext(AuthContext);
    const navigation = useNavigation();

    if (loading) {
        return (
          <ActivityIndicator size={20} color="#000" />
        )
      }

    return (
        <Container>

            <Message>
                Hey, bem vindo de volta!
            </Message>

            {/* <Name numberOfLines={1} >
                {user.email ? user.email : 'default'}
            </Name> */}

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButton onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </Container>
    )
}