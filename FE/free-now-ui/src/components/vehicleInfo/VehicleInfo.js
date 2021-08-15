import React from 'react';
import { company } from 'utils/constants';

const VehicleInfo = ({type, vehicle}) => {
    return (
        <>
            {type === company.freeNow ? 
                <>
                    <h4>{vehicle.state}</h4>
                    <p>{vehicle.type}</p>
                </>
                :
                <>
                    <h4>{vehicle.name}</h4>
                    <p>{vehicle.address}</p>
                </>
            }
        </>
    );
  }

export{ VehicleInfo }