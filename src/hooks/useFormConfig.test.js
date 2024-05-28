import { renderHook, waitFor } from '@testing-library/react';
import useFormConfig from './useFormConfig';

global.fetch = jest.fn();

describe('useFormConfig', () => {
  describe('when data is fetched successfully', () => {
    let mockConfig;

    beforeEach(() => {
      mockConfig = {
        "pages": [
          {
            "fields": [
              {"name":"Name", "type":"string"},
              {"name":"Age", "type":"number"},
              {"name":"Date", "type":"date"}
            ]
          }
        ]
      };
  
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockConfig)
      });
    });

    it('should return config data', async () => {
      const { result } = renderHook(() => useFormConfig());

      await waitFor(() => {
        expect(result.current).toEqual({
          config: mockConfig,
          loading: false
        })
      })
    });
  });

  describe('when data is not fetched successfully', () => {
    const mockError = new Error();

    beforeEach(() => {
      fetch.mockRejectedValue(mockError);
    });

    it('should console log the error', async () => {
      renderHook(() => useFormConfig());
      console.log = jest.fn();

      await waitFor(() => {
        expect(console.log.mock.calls[0][0]).toBe('Problem loading config: ');
      });
    });
  });
});
