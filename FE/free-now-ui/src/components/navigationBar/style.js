import styled from 'styled-components'
import { ProSidebar, SidebarHeader, MenuItem as LibMenuItem} from 'react-pro-sidebar';

export const SideBar = styled(ProSidebar)`
    .pro-sidebar-inner{
        background:  ${({ theme }) => theme.freeNowHeaderBackground} ;
    }
`;

export const Image = styled.img`    
    margin: auto;
    height: 50px;
    margin: 5px;
`;

export const Header = styled(SidebarHeader)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background: red;
`;

export const MenuItem = styled(LibMenuItem)`
    color: white;
`;