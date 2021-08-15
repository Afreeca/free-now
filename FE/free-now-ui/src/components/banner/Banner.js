import React from 'react';
import freeNowLogo from 'assets/free-now-logo.png'
import shareNowLogo from 'assets/share-now-logo.png'
import freeDriverImage from 'assets/free-driver.png'
import shareDriverImage from 'assets/share-driver.jpeg'

import { Container, LeftHeader, Company, Image, RightHeader } from './style'
import { company } from 'utils/constants';

const Banner = ({type = company.freeNow}) => {

  return (  
    <Container type={type}>
      <LeftHeader>
        <Company>
          <Image src={type===company.freeNow?freeNowLogo:shareNowLogo}/>
        </Company>
      </LeftHeader>
      <RightHeader>
        <Image src={type===company.freeNow?freeDriverImage:shareDriverImage}/>
      </RightHeader>
      
    </Container>
  )
}

export { Banner };