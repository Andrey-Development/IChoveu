import React from "react";
import { Error, Input, AreaInput, LabelSmall, Separator } from './styles';

const TextInputField = ({ label, name, value, onChange, placeholder, error, keyboardType, secureTextEntry }) => {
  return (
    <AreaInput>
      <LabelSmall>{label}</LabelSmall>
      <Input
        name={name}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      <Separator />
      {error && <Error>{error.message}</Error>}
    </AreaInput>
  );
};

export default TextInputField;
