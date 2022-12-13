import { ComponentProps } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export function TextInput(props: TextInputProps) {
  return (
    <TextInputContainer>
      {!!props.prefix && <Prefix>{props.prefix} </Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
}

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}
