import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Input, Label, Wrapper } from './styles';

const Input2 = styled.input`
  ${[...Input.componentStyle.rules]}; /* recuprando os estilos do import */

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
      &:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
      }`;
  }
}`;

function FormField({
  label, type, name, value, onChange,
}) {
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <Wrapper>
      <Label>
        <Input2
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </Wrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
