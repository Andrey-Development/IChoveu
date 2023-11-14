import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #FFF;
  border-radius: 8px;
  margin: 12px;
  padding: 16px;
`;

export const PerfilImage = styled.Image`
  width: 112px;
  height: 110px;
  align-self: center;
  margin-bottom: 12px;
`;

export const Titulo = styled.Text`
  font-size: 32px;
  text-align: center;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #3b3dbf;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const BotaoTexto = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const ModalContainer = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 300px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #3b3dbf;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
