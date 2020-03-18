import styled from 'styled-components';
import { COLORS } from '../../../styles/global';

export const ContentHeading = styled.section`
  .H3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.3px;
    color: #000;
    margin-bottom: 7px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: ${COLORS.textDarken};
    width: 60%;
    margin-bottom: 40px;
    @media (max-width: 1024px) {
      width: 100%;
    }
    .tag {
      background: rgba(86,86,86,0.1);
      mix-blend-mode: normal;
      border-radius: 6px;
      font-size: 13px;
      line-height: 18px;
      padding: 4px;
      letter-spacing: 0.35px;
      color: ${COLORS.textDarken};
    } 
  }
`;