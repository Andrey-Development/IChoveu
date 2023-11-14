import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #fff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 50px 0px;
`;

export const Logo = styled.Image`
  margin-top: 60px;
  margin-bottom: 70px;
  width: 237px;
  height: 266px;
`;

export const AreaInput = styled.View`
  gap: 4px;
  width: 80%;
  height: 52px;
  margin-bottom: 35px;
`;

export const LabelSmall = styled.Text`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 100%;
  font-size: 17px;
  padding: 10px 10px 0px 10px;
  color: rgba(0, 0, 0, 0.40);
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.40);
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 61px;
  border-radius: 8px;
  border-radius: 5px;
  background: rgba(104, 178, 248, 0.85);
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: rgba(2, 2, 2, 0.79);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
