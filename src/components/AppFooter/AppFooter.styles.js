import styled from 'styled-components';
import { AppWrapper, COLORS } from '../../styles/global';

export const AppFooter = styled(AppWrapper)`
  background-color: #fff;
  border-top: 1px solid ${COLORS.lightGray};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  .icon-group {
    display: flex;
    align-items: center;
    span {
      color: ${({ color }) => color};
    }
  }
  .actions__add {
    background-color: ${COLORS.primary};
    border-radius: 6px;
    color: white;
    height: 32px;
    width: 32px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;