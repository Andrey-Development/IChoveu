import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

export const ContentScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const ImgHeader = styled.Image`
  margin: 0px;
  width: 100%;
  height: 300px;
`;

export const TitleHeader = styled.Text`
  position: absolute;
  top: 80px;
  left: 68px;
  color: #fff;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
`;

export const SubtitleHeader = styled.Text`
  position: absolute;
  top: 108px;
  left: 68px;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
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

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.4);
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
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ViewBottom = styled.View`
  position: absolut;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;
  gap: 20px;
`;

export const LinkText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const TextBlue = styled.Text`
  color: #68b2f8;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
