## LazyLoadingImg

### 功能描述：可懒加载 CDN 链接图片。

```jsx
import React from 'react';
import { LazyLoadingImg } from 'react-dtcomponents';

export default () => {
  return (
    <LazyLoadingImg url="https://infogram-thumbs-200.s3-eu-west-1.amazonaws.com/2fadc5a9-2c1f-4899-9749-da58b82a340b.jpg?v=1618138121000">
      <div>可自定义渲染</div>
    </LazyLoadingImg>
  );
};
```

## API

| 参数      | 说明                 | 类型    | 默认值 |
| --------- | -------------------- | ------- | ------ |
| url       | 需要懒加载的图片地址 | string  | -      |
| className | className 类名       | styring | -      |
