## CardTabs

### 功能描述：自定义 tab

```jsx
import React from 'react';
import { CardTabs } from 'react-dtcomponents';

export default () => {
  return (
    <CardTabs onChange={() => {}} defaultValue="1">
      <CardTabs.Tab title="测试数据1" value="1" />
      <CardTabs.Tab title="测试数据2" value="2" />
    </CardTabs>
  );
};
```
