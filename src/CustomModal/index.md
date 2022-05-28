## CustomModal

### 功能描述：可自定义或 api 式调用 modal

```jsx
import React, { useState } from 'react';
import { CustomModal } from 'react-dtcomponents';
import { Button } from 'antd';

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModalClick = () => {
    setIsModalVisible(true);
  };

  const showModalApi = () => {
    const modal = CustomModal.showModal({
      footer: null,
      onCancel: () => {
        modal.destroy();
      },
      onOk: () => {
        modal.destroy();
      },
      children: (
        <div>
          <div>奥术大师多</div>
          <div>按时肯定会啊</div>
        </div>
      ),
    });
  };

  return (
    <div>
      <CustomModal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </CustomModal>
      <Button type="primary" onClick={showModalClick}>
        Open Modal 组件调用
      </Button>

      <div style={{ marginTop: '40px' }}>
        <Button type="primary" onClick={showModalApi}>
          Open Modal api调用
        </Button>
      </div>
    </div>
  );
};
```

参数依照 antd 的 Modal https://ant.design/components/modal-cn/
