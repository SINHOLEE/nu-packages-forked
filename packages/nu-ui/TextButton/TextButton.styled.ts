import styled from '@emotion/styled';
import { Color, FontSize, FontWeight } from '../@foundations';

const sizeCSS = {
  large: `
    padding: 10px 12px;
    ${FontSize.p2};
    
  `,
  small: `
    padding: 8px 10px;
    ${FontSize.p3};
  `,
};

type TextButtonProps = {
  $size: 'large' | 'small';
  $isBlock: boolean;
  $disabled: boolean;
};

export const DSTextButtonWrapper = styled.button<TextButtonProps>`
  ${({ $isBlock }) => ($isBlock ? 'width: 100%' : 'width: fit-content')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  white-space: pre;
  color: ${Color.naturalGray7};
  ${FontWeight.regular};
  ${({ $size }) => sizeCSS[$size]};
  background-color: ${({ $disabled }) => $disabled && Color.blueGray1};

  &:hover {
    background-color: ${Color.blueGray0};
    ${({ $disabled }) => $disabled && `cursor: not-allowed;`};
  }
`;
