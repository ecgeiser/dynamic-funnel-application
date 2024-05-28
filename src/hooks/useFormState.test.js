import { renderHook, act } from '@testing-library/react';
import useFormState from './useFormState';

describe('useFormState', () => {
    it('should initiate with a default empty form', () => {
      const { result } = renderHook(() => useFormState());

      expect(result.current).toMatchObject({
        fieldValues: {}
      });
    });

    it('should update the fieldValues when handleFormChange is called', () => {
        const mockFormValues = { 'age': 22 };
        const { result } = renderHook(() => useFormState());
        act(() => result.current.handleFormChange({ target: { name: 'age', value: 22 } }));

        expect(result.current).toMatchObject({
          fieldValues: mockFormValues
        });
    });
});
