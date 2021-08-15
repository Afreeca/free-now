import { fetchFreeVehicles } from 'api';
import { VehicleList } from 'components'
import { Banner } from 'components';
import React, { useState, useEffect } from 'react';
import { company } from 'utils/constants';
import { Container, Content, Loading } from './style';

const FreeNowHome = () => {
    const [vehicles, setVehicles] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        fetchFreeVehicles()
        .then((result) => {
            setVehicles(result.poiList);
            setLoading(false)
        })
        .catch((err) => {
            setError("Someting went wrong! Please try later")
            setLoading(false)
        })
     
    }, []);

    return (
        <Container>
            <Banner type={company.freeNow}/>
            <Content>
                {loading ? <Loading>Loading...</Loading> :
                    error ? <div>{error}</div> :  <VehicleList type={company.freeNow} vehicles={vehicles}/>
                }
            </Content>
        </Container>
    );
  }

export{ FreeNowHome }