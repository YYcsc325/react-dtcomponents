## ColorModifier

### 功能描述：颜色拾取器

```jsx
import React from 'react';
import { ColorModifier } from 'react-dtcomponents';

export default () => {
  const [color, setColor] = React.useState('red');
  return (
    <div>
      <ColorModifier value={color} onChange={(val) => setColor(val)} />
      <div
        style={{
          backgroundColor: color,
          width: 100,
          height: 100,
          border: '1px solid #aaa',
        }}
      ></div>
    </div>
  );
};
```
