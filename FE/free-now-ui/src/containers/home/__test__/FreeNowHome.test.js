import { waitFor, render, screen, act } from '@testing-library/react'
import { freeVehiclesData } from 'api/__mock__/freeVehicleData';
import { FreeNowHome } from 'containers';

describe("Render App", () => {

  test('Should display Error message', async () => {
    /* Arrange */
    global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.reject())

    /* Act */
    act(() => {
      render(<FreeNowHome />)
    })

    /* Assert */
    await waitFor(() =>
       expect(screen.getByText(/Someting went wrong! Please try later/i)).toBeTruthy()
    )

    expect(screen.queryAllByRole("grid")).toHaveLength(0);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })

  test('Should display Loading message', async () => {  

    /* Arrange */
    act(() => {
      render(<FreeNowHome />)
    })

    /* Assert */
    await waitFor(() =>
      expect(screen.getByText(/Loading.../i)).toBeTruthy()
    )

    expect(screen.queryAllByRole("grid")).toHaveLength(0);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })

  test('Should display free vehicle Table', async () => {  
    global.fetch = jest
    .fn()
    .mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        status: 200,
        json: () => Promise.resolve(freeVehiclesData )
      });
    }) 
  
  act(() => {
    render(<FreeNowHome />)
  })
    
  await waitFor(() =>
    screen.getAllByRole("grid")
  )

    expect(screen.getByText(/Free Vehicles/i)).toBeTruthy();
    expect(screen.queryByText(/Loading.../i)).toBeNull();
    expect(screen.queryByText(/Someting went wrong! Please try later/i)).toBeNull();
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })
})
