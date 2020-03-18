import styled from 'styled-components';

export const Icon = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: ${props => props.marginRight || 0};
  margin-left: ${props => props.marginLeft || 0};
  padding-right: ${props => props.paddingRight || 0};
  padding-left: ${props => props.paddingLeft || 0};
  img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;