## Composite

### 功能描述： 可自定义组件位置

```tsx
import React from 'react';
import { Composite } from 'react-dtcomponents';

export default () => {
  return (
    <Composite>
      <Composite.Left>left</Composite.Left>
      <Composite.Right>right</Composite.Right>
    </Composite>
  );
};
```
