import { Menu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import partialLogo from 'assets/partial-logo.png'
import { Header, Image, SideBar, MenuItem } from './style';
import { company } from 'utils/constants';


const NavigationBar = ()  =>{
  return (
    <SideBar width={150}>
      <Header>
        <Image src={partialLogo}/> 
      </Header>
      <Menu>
        <MenuItem>
          Free Now
          <Link to={`/${company.freeNow}`} />
        </MenuItem>
        <MenuItem>
          Share Now
          <Link to={`/${company.shareNow}`} />
        </MenuItem>
      </Menu>
    </SideBar>
  );
}
  
export { NavigationBar};
  