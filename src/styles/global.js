import styled from 'styled-components';

export const COLORS = {
  primary: '#4A00CD',
  secondary: '#F5F6F7',
  lightGray: '#EAEAEA',
  darkGray: '#A2A5AE',
  textDarken: '#656974',
  redRose: '#F12B65', 
};

export const AppWrapper = styled.section`
  padding: 25px;
`;

export const ContentWrapper = styled.section`
  margin: auto;
  width: 1040px;
  max-width: 1040px;
  min-width: 460px;
`;

export const AppFooter = styled(AppWrapper)`
  background-color: #fff;
  border-top: 1px solid ${COLORS.lightGray};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
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
