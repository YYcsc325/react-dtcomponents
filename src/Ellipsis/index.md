## Ellipsis

### 功能描述：多行省略

```jsx
import React from 'react';
import { Ellipsis } from 'react-dtcomponents';

export default () => {
  return (
    <div style={{ width: '200px', height: '50px' }}>
      <Ellipsis
        text="这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据"
        isShowTips={true}
        lineClamps={3}
      ></Ellipsis>
    </div>
  );
};
```
