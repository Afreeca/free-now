import { Table, Map } from 'components'
import React from 'react';
import { company } from 'utils/constants';
import { Title } from './style';

const VehicleList = ({type, vehicles}) => {
    return (
        <>
            <Map type={type} items={vehicles}/>
            <Title>{type===company.freeNow?"Free Vehicles":"Share Vehicles" }</Title>
            <Table type={type} items={vehicles}/>
        </>
    );
  }

export{ VehicleList }