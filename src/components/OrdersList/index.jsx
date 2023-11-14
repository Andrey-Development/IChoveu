import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Botao,
  BotaoTexto,
  Card,
  PerfilImage,
  Titulo,
  ModalBackground,
  ModalButton,
  ModalButtonContainer,
  ModalButtonText,
  ModalContainer,
  ModalContent,
  ModalText
} from './styles';

export default function OrdersList({ data, onDelete }) {
  const navigation = useNavigation();
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

  const openConfirmationModal = () => {
    setConfirmationModalVisible(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalVisible(false);
  };

  const confirmDeletion = () => {
    onDelete(data.id);
    closeConfirmationModal();
  };

  function handleDetails() {
    navigation.navigate("DetailsUser", { id: data.id });
  }

  return (
    <Card>
      <PerfilImage source={{ uri: data.image }} />
      <Titulo>{data.name}</Titulo>

      <Botao onPress={handleDetails}>
        <BotaoTexto>Detalhes</BotaoTexto>
      </Botao>

      <Botao onPress={openConfirmationModal}>
        <BotaoTexto>
          Remover
        </BotaoTexto>
      </Botao>

      <ModalContainer
  visible={isConfirmationModalVisible}
  transparent={true}
  animationType="slide"
>
  <ModalBackground>
    <ModalContent>
      <ModalText>Tem certeza de que deseja excluir este usuário?</ModalText>
      <ModalButtonContainer>
        <ModalButton onPress={confirmDeletion}>
          <ModalButtonText>Confirmar</ModalButtonText>
        </ModalButton>
        <ModalButton onPress={closeConfirmationModal}>
          <ModalButtonText>Cancelar</ModalButtonText>
        </ModalButton>
      </ModalButtonContainer>
    </ModalContent>
  </ModalBackground>
</ModalContainer>

    </Card>
  );
}
