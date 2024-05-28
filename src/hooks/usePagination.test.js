import { renderHook, act } from '@testing-library/react';
import usePagination from './usePagination';

describe('usePagination', () => {
    // The first page loaded should always be the first data Input Page
    it('should initiate with a default pageNum of 0', () => {
      const { result } = renderHook(() => usePagination());

      expect(result.current).toMatchObject({
        pageNum: 0
      });
    });

    it('should update the pageNum when setPageNum is called', () => {
        const { result } = renderHook(() => usePagination());
        act(() => result.current.setPageNum(1));

        expect(result.current).toMatchObject({
            pageNum: 1
        });
    });
});
