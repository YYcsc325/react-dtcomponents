// import '@testing-library/jest-dom';
// import React from 'react';
// import { waitFor } from '@testing-library/dom';
// import { render, screen, fireEvent, act } from '@testing-library/react';
// import AdSelect from './index';

// describe('Select', () => {
//   test('选择器渲染', () => {
//     const { container } = render(<AdSelect />);
//     expect(container).toMatchSnapshot();
//     fireEvent.click(container.firstChild);
//     expect(screen.getByText('No Data')).toBeInTheDocument();
//     expect(container).toMatchSnapshot();
//   });

//   test('自定义选择器额外下拉框', async () => {
//     const text = '华而不实的内容';
//     const title = '这是标题';
//     const onSyncRefresh = jest.fn();
//     const { container, rerender } = render(
//       <AdSelect>
//         <AdSelect.Button title={title} text={text} onRefresh={onSyncRefresh} />
//       </AdSelect>,
//     );

//     expect(container).toMatchSnapshot();
//     const dom = container.firstChild;
//     fireEvent.click(dom);
//     expect(screen.getByText(text)).toBeInTheDocument();
//     expect(screen.getByText(title)).toBeInTheDocument();
//     fireEvent.click(screen.getByText(/刷新/i));

//     expect(onSyncRefresh).toBeCalledTimes(1);

//     expect(container).toMatchSnapshot();
//     const onAsyncRefresh = jest.fn(() => new Promise((resolve) => setTimeout(resolve, 2000)));
//     rerender(
//       <AdSelect>
//         <AdSelect.Button title={title} text={text} onRefresh={onAsyncRefresh}></AdSelect.Button>
//       </AdSelect>,
//     );
//     const refreshDom = screen.getByText(/刷新/i);
//     expect(refreshDom).toBeInTheDocument();

//     await act(async () => {
//       fireEvent.click(refreshDom);
//     });

//     expect(onAsyncRefresh).toBeCalledTimes(1);
//     expect(container).toMatchSnapshot();
//   });

//   test('自定义下拉框内容区块', async () => {
//     const text = '华而不实的内容';
//     const title = '这是标题';
//     const { container } = render(
//       <AdSelect>
//         <AdSelect.Button title={title} text={text}>
//           Hello
//         </AdSelect.Button>
//       </AdSelect>,
//     );

//     fireEvent.click(container.firstChild);
//     expect(screen.queryByText(text)).not.toBeInTheDocument();
//     expect(screen.getByText(/Hello/i)).toBeInTheDocument();
//     fireEvent.mouseDown(screen.getByRole('listbox'), { bubbles: true });
//     expect(screen.getByText(/Hello/i)).toBeInTheDocument();

//     expect(container).toMatchSnapshot();
//   });

//   test('搜索下拉选项', () => {
//     const { container } = render(
//       <AdSelect
//         options={[
//           { value: 1, title: 'zhangsan' },
//           { value: 2, title: 'lisi' },
//           { value: 3, title: '' },
//           { value: 4, title: 'wangwu' },
//         ]}
//       />,
//     );

//     fireEvent.change(container.querySelector('input'), { target: { value: 'zhangsan' } });
//     expect(screen.getByRole('listbox').children).toHaveLength(1);

//     fireEvent.change(container.querySelector('input'), { target: { value: 's' } });
//     expect(screen.getByRole('listbox').children).toHaveLength(2);

//     expect(container).toMatchSnapshot();
//   });
// });

// import '@testing-library/jest-dom';
// import React from 'react';
// import { render, screen, act } from '@testing-library/react';
// import { createEvent, fireEvent } from '@testing-library/dom';
// import AdTimePicker from './index';

// describe('AdTimePicker', () => {
//   test('render', () => {
//     const { container } = render(<AdTimePicker />);

//     expect(screen.getByText('星期一')).toBeInTheDocument();
//     expect(screen.getByText('星期二')).toBeInTheDocument();
//     expect(screen.getByText('星期三')).toBeInTheDocument();
//     expect(screen.getByText('星期四')).toBeInTheDocument();
//     expect(screen.getByText('星期五')).toBeInTheDocument();
//     expect(screen.getByText('星期六')).toBeInTheDocument();
//     expect(screen.getByText('星期日')).toBeInTheDocument();

//     const ul = screen.queryAllByRole('list');
//     expect(ul.length).toBe(9);
//     expect(container.firstChild).toHaveClass('ad-time-picker');
//     expect(container.firstChild.children).toHaveLength(3);
//     expect(container.firstChild.children[2].children).toHaveLength(8);
//     expect(screen.queryAllByRole('listitem')).toHaveLength(8 * 24 + 2);
//   });

//   test('defaultValue/value/onChange', () => {
//     const { container, rerender } = render(<AdTimePicker defaultValue={['20']} />);
//     expect(container.querySelectorAll('.ad-time-picker-li-active')).toHaveLength(1);
//     expect(screen.getByTestId('20')).toBeInTheDocument();
//     rerender(<AdTimePicker defaultValue={['20', '21']} />);
//     expect(container.querySelectorAll('.ad-time-picker-li-active')).toHaveLength(1);
//     expect(screen.getByTestId('20')).toBeInTheDocument();
//     expect(screen.getByTestId('21')).toBeInTheDocument();
//     rerender(<AdTimePicker defaultValue={['20']} value={['20', '21']} />);
//     expect(screen.getByTestId('20')).toBeInTheDocument();
//     expect(screen.getByTestId('21')).toBeInTheDocument();
//     const onChange = jest.fn();
//     rerender(<AdTimePicker onChange={onChange} value={['20', '21']} />);
//     const dom = container.querySelector('.ad-time-picker-body');
//     expect(dom).not.toBeNull();
//     const beginDom = screen.getByTestId('00');
//     const moveDom = screen.getByTestId('01');
//     const endDom = screen.getByTestId('02');
//     expect(beginDom).not.toBeNull();
//     expect(moveDom).not.toBeNull();
//     expect(endDom).not.toBeNull();
//     act(() => {
//       fireEvent(beginDom, createEvent.mouseDown(dom, { bubbles: true }));
//       fireEvent(moveDom, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(endDom, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(endDom, createEvent.mouseUp(dom, { bubbles: true }));
//     });
//     expect(onChange).toBeCalledTimes(3);
//     expect(container.querySelectorAll('.ad-time-picker-li-active')).toHaveLength(5);
//     const b1 = screen.getByTestId('45');
//     const m1 = screen.getByTestId('44');
//     const e1 = screen.getByTestId('43');
//     expect(b1).not.toBeNull();
//     expect(m1).not.toBeNull();
//     expect(e1).not.toBeNull();
//     act(() => {
//       fireEvent(b1, createEvent.mouseDown(dom, { bubbles: true }));
//       fireEvent(m1, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(e1, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(e1, createEvent.mouseUp(dom, { bubbles: true }));
//     });
//     expect(onChange).toBeCalledTimes(6);
//     expect(container.querySelectorAll('.ad-time-picker-li-active')).toHaveLength(8);
//     act(() => {
//       fireEvent(b1, createEvent.mouseDown(dom, { bubbles: true }));
//       fireEvent(m1, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(e1, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(e1, createEvent.mouseUp(dom, { bubbles: true }));
//     });
//     expect(onChange).toBeCalledTimes(9);
//     expect(container.querySelectorAll('.ad-time-picker-li-active')).toHaveLength(5);
//   });

//   test('clear', () => {
//     const { container } = render(<AdTimePicker defaultValue={['20', '21']} />);
//     expect(container.querySelectorAll('.ad-time-picker-li-active')).toHaveLength(2);
//     const btn = screen.getByText('清空选择');
//     act(() => {
//       fireEvent.click(btn, { bubbles: true });
//     });
//     expect(container.querySelectorAll('.ad-time-picker-li-active')).toHaveLength(0);
//   });

//   test('onlyPane', () => {
//     const { container } = render(<AdTimePicker defaultValue={['20', '21']} onlyPane />);

//     expect(screen.queryAllByRole('listitem')).toHaveLength(0);
//     expect(container.firstChild.children).toHaveLength(1);
//   });

//   test('disabled', () => {
//     const { container, rerender } = render(<AdTimePicker disabled />);
//     expect(container.querySelectorAll('.ad-time-picker-li-disabled')).toHaveLength(7 * 24);

//     rerender(<AdTimePicker disabled value={['20', '21']} />);
//     expect(container.querySelectorAll('.ad-time-picker-li-disabled')).toHaveLength(7 * 24 - 2);
//     const onChange = jest.fn();
//     rerender(<AdTimePicker onChange={onChange} disabled />);
//     const dom = container.querySelector('.ad-time-picker-body');
//     const beginDom = screen.getByTestId('00');
//     const moveDom = screen.getByTestId('01');
//     const endDom = screen.getByTestId('02');
//     expect(beginDom).not.toBeNull();
//     expect(moveDom).not.toBeNull();
//     expect(endDom).not.toBeNull();
//     act(() => {
//       fireEvent(beginDom, createEvent.mouseDown(dom, { bubbles: true }));
//       fireEvent(moveDom, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(endDom, createEvent.mouseMove(dom, { bubbles: true }));
//       fireEvent(endDom, createEvent.mouseUp(dom, { bubbles: true }));
//     });
//     expect(onChange).toBeCalledTimes(0);
//   });
// });
