import { fetchSharedVehicles } from 'api';
import { VehicleList } from 'components'
import { Banner } from 'components';
import React, { useState, useEffect } from 'react';
import { company } from 'utils/constants';
import { Container, Content, Loading} from './style';

const ShareNowHome = () => {
    const [vehicles, setVehicles] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        fetchSharedVehicles()
        .then((result) => {
            setVehicles(result.placemarks);
            setLoading(false)
        })
        .catch((err) => {
            setError("Someting went wrong! Please try later")
            setLoading(false)
        })
    }, []);
    
    return (
        <Container>
            <Banner type={company.shareNow}/>
            <Content>
                {loading ? <Loading>Loading...</Loading> :
                    error ? <div>{error}</div> :  <VehicleList type={company.shareNow} vehicles={vehicles}/>
                }
            </Content>
        </Container>
      );
  }

export{ ShareNowHome }