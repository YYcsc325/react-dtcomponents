## RadioGroups

### 功能描述：不同选项出现不同的内容

```jsx
import React from 'react';
import { Input, Select } from 'antd';
import { RadioGroups } from 'react-dtcomponents';

export default () => {
  const [value, setValue] = React.useState('a');

  return (
    <div>
      <RadioGroups value={value} onChange={(val) => setValue(val)}>
        <RadioGroups.Item label="不限" value="a" />
        <RadioGroups.Item label="测试数据1" value="b">
          <Input style={{ width: 300, marginTop: 10 }} placeholder="请输入" />
        </RadioGroups.Item>
        <RadioGroups.Item label="测试数据2" value="c">
          <Select style={{ width: 300, marginTop: 10 }} placeholder="请选择">
            <Select.Option value="1">选择数据1</Select.Option>
          </Select>
        </RadioGroups.Item>
      </RadioGroups>
    </div>
  );
};
```
