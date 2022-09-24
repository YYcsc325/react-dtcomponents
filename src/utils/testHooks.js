// import { renderHook, cleanup } from '@testing-library/react-hooks';
// import { useDidMount, useUpdate, usePrevious } from './hook';

// describe('hook', () => {
//   test('hook.useDidMount', () => {
//     const callback = jest.fn();
//     const { rerender } = renderHook(() => useDidMount(callback));

//     expect(callback).toBeCalledTimes(1);
//     rerender();
//     rerender();
//     rerender();
//     expect(callback).toBeCalledTimes(1);
//     const { result } = renderHook(() => useDidMount());
//     expect(result.error).toEqual(Error('callback is not function.'));
//   });

//   test('useDidMount 函数返回回调', () => {
//     const deepCallback = jest.fn();
//     const callback = jest.fn(() => {
//       return deepCallback;
//     });
//     renderHook(() => useDidMount(callback));

//     expect(callback).toBeCalledTimes(1);
//     cleanup();
//     expect(deepCallback).toBeCalledTimes(1);
//   });

//   test('hook.useUpdate', () => {
//     const callback = jest.fn();

//     const { rerender } = renderHook(() => useUpdate(callback));
//     expect(callback).not.toBeCalled();
//     rerender();
//     expect(callback).toBeCalled();
//     rerender();
//     expect(callback).toBeCalledTimes(2);
//     const { result } = renderHook(() => useUpdate());
//     expect(result.error).toEqual(Error('callback is not function.'));
//   });

//   test('hook.useUpdate 回调函数', () => {
//     const deepCallback = jest.fn();
//     const callback = jest.fn(() => {
//       return deepCallback;
//     });
//     const { rerender } = renderHook(() => useUpdate(callback));
//     rerender();
//     cleanup();
//     expect(deepCallback).toBeCalledTimes(1);
//   });

//   test('hook.usePrevious', () => {
//     let value = 0;

//     const { rerender, result } = renderHook(() => usePrevious(value));
//     expect(result.current).toBe(undefined);
//     value = 20;
//     rerender();
//     expect(result.current).toBe(0);
//     rerender();
//     expect(result.current).toBe(20);
//     value = 30;
//     expect(result.current).toBe(20);
//   });
// });
