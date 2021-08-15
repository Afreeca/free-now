import styled from 'styled-components'
import { company } from 'utils/constants';

export const Container = styled.header`
    height: 80px;
    right:0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:  ${({ theme, type }) => type===company.freeNow?`${theme.freeNowHeaderBackground}`:`${theme.shareNowHeaderBackground}`};
`;

export const LeftHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const RightHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Company = styled.div`
    display: flex;
    align-items: center;
    width:200px;
`;

export const Image = styled.img`
    height: 80px;
    margin: 5px;
`;
