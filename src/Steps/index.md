## Steps

### 功能描述：横向步骤条

```jsx
import React from 'react';
import { Steps } from 'react-dtcomponents';

export default () => {
  return (
    <Steps current={1}>
      <Steps.Step title="测试数据1" />
      <Steps.Step title="测试数据2" />
      <Steps.Step title="测试数据3" />
    </Steps>
  );
};
```
