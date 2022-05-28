## DragForm

### 功能描述： 简易 From 实现

```jsx
import React from 'react';
import { DragForm } from 'react-dtcomponents';
import { Input, Select } from 'antd';

export default DragForm.create(({ dragForm }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(dragForm.getValues(), '___-');
        }}
      >
        点击获取数据
      </button>
      <button onClick={() => dragForm.setValue('key1', 1)}>设置数据</button>
      <DragForm drag={dragForm}>
        <DragForm.Item name="key1">
          <Input
            onChange={(e) => console.log(e, 'e____')}
            style={{ width: 300 }}
          />
        </DragForm.Item>
        <DragForm.Item name="key2" initailValue={'2'}>
          <Input style={{ width: 300 }} />
        </DragForm.Item>
        <DragForm.Item name="key3" initailValue={'1'}>
          <Select style={{ width: 300 }}>
            <Select.Option value="1" key="1">
              测试数据1
            </Select.Option>
            <Select.Option value="2" key="2">
              测试数据2
            </Select.Option>
          </Select>
        </DragForm.Item>
      </DragForm>
      <DragForm drag={dragForm}>
        <DragForm.Item name="key4">
          <Input
            onChange={(e) => console.log(e, 'e____')}
            style={{ width: 300 }}
          />
        </DragForm.Item>
      </DragForm>
    </div>
  );
});
```
