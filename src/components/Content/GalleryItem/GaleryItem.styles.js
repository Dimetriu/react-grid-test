import styled from 'styled-components';
import { COLORS } from '../../../styles/global';

export const Card = styled.div`
  background-color: ${COLORS.secondary};
  width: 100%;
  height: auto;
  box-sizing: content-box;
  border-radius: 6px;
  .card-picture {
    display: block;
    max-width: 100%;
    border-radius: 10px 10px 0 0;
  }
  .icon-group {
    display: flex;
    align-items: center;
    span:last-of-type {
      margin-left: 8px;
    }
    span, div {
      color: ${({ color }) => color};
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 23px;
      margin-left: 4px;
    }
  }
`;

const Wrapper = styled.div`
  margin: 0 16px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 8px;
  }
  p {
    color: ${COLORS.textDarken};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: 0.3px;
    text-overflow: ellipsis;
  }
`;

export const CardBody = styled(Wrapper)`
  background-color: ${COLORS.secondary};
  border-radius: 6px;
  margin-top: 9px;
  img {
    max-width: 100%;
  }
  .H5 {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 0.3px;
    color: #000;
  }
`;

export const CardFooter = styled(Wrapper)`
  padding-bottom: 10px;
`;
