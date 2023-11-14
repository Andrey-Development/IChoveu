import styled from 'styled-components/native';

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
  background-color: #fff;
  width: 100%;
  font-size: 17px;
  padding: 10px 10px 0px 10px;
  color: rgba(0, 0, 0, 0.4);
`;


export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.4);
`;

export const Error = styled.Text`
  color: red;
  font-size: 12px;
  padding-top: 6px;
`;
