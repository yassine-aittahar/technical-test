import { useFetch } from './'
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useFetch', () => {

  describe('fetching data', () => {

    it('fetch users sample api', async () => {
      const url = 'https://jsonplaceholder.typicode.com/users';

      // mock fetch 
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve( [
              {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
              }]
          ),
        })
      );
      await act(async () => renderHook(() => useFetch(url)))
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toBeCalledWith(url)


    })
  })

  describe('while fetching data', () => {

    it.todo('test isLoading')
  })

  describe('Error during fetching', () => {

    it.todo('test fetch Error')
  })
})
