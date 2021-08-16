// app.test.js
import {act, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { freeVehiclesData, shareVehiclesData } from 'api/__mock__/freeVehicleData';
import React from 'react'
import {createMemoryHistory} from 'history'
import Router from './routes/router'

import '@testing-library/jest-dom'

describe("Render App  with navigation", () => {
        
    test('Should display error message', async() => {
        /* Arrange */
        global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.reject())

        /* Act */
        act(() => {
            render(<Router />)
        })

        await waitFor(() =>
            screen.getByText(/Someting went wrong! Please try later/i)
        )
    
        /* Assert */
        expect(screen.queryAllByRole("grid")).toHaveLength(0);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    })

    test('Should display Loading message', async () => {  
        /* Arrange */
        act(() => {
          render(<Router />)
        })
    
        /* Act */
        await waitFor(() =>
          expect(screen.getByText(/Loading.../i)).toBeTruthy()
        )
    
        /* Assert */
        expect(screen.queryAllByRole("grid")).toHaveLength(0);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    })

    test('Should display free vehicle Table', async () => {  
        /* Arrange */
        global.fetch = jest
        .fn()
        .mockImplementation(() => {
          return Promise.resolve({
            ok:true,
            status: 200,
            json: () => Promise.resolve(freeVehiclesData )
          });
        }) 
      
        /* Act */
        act(() => {
            render(<Router />)
        })
        
        await waitFor(() =>
            screen.getAllByRole("grid")
        )
    
        /* Assert */
        expect(screen.getByText(/Free Vehicles/i)).toBeTruthy();
        expect(screen.queryByText(/Loading.../i)).toBeNull();
        expect(screen.queryByText(/Someting went wrong! Please try later/i)).toBeNull();
        expect(global.fetch).toHaveBeenCalledTimes(1);
    })    
});