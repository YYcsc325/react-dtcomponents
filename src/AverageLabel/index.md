---

title: 一行展示组件
group:
title: AverageLabel

---

- 开发说明
  > [作者@岑世超](xxx) > [git 地址](https://yuyan.antfin-inc.com/admarker/alipay-xlight-dmp-component/sprints)

### 组件基本使用

```tsx
/**
 * background: '#f1f1f1'
 */
import React from 'react';
import { AverageLabel } from 'react-dtcomponents';

export default () => {
  return (
    <AverageLabel size={3}>
      <AverageLabel.Item label={'测试1'} value={'1'} key={'1'} />
      <AverageLabel.Item label={'测试2'} value={'2'} key={'2'} />
      <AverageLabel.Item label={'测试3'} value={'3'} key={'3'} />
      <AverageLabel.Item label={'测试4'} value={'4'} key={'4'} />
      <AverageLabel.Item label={'测试5'} value={'5'} key={'5'} />
      <AverageLabel.Item label={'测试6'} value={'6'} key={'6'} />
      <AverageLabel.Item label={'测试7'} value={'7'} key={'7'} />
    </AverageLabel>
  );
};
```

```ts
interface IAverageLabelProps {
  size: number;
}
```

```js
{
  a: 1;
}
```

```json
{
  "b": 1
}
```

## AverageLabel & 事件）

| 参数 | 说明         | 类型   | 是否必填 | 默认值 |
| :--- | :----------- | :----- | :------- | :----- |
| size | 一行展示几个 | number | 否       | 3      |

## AverageLabel.Item & 事件）

| 参数  | 说明         | 类型   | 是否必填 | 默认值 |
| :---- | :----------- | :----- | :------- | :----- |
| label | 文案         | string | 否       | -      |
| key   | key 唯一标示 | string | 是       | -      |
| value | 值           | string | 是       | -      |

## 组件迭代

- [迭代地址](xxxx)
