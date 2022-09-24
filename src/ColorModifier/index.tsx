import React, { FC, useState } from 'react';
import ColorGroup from './ColorGroup';
import { Popover } from 'antd';

import './index.less';

interface ColorModifierProps {
  [x: string]: any;
  value: string;
  onChange: (value: string) => void;
}

const ColorModifier: FC<ColorModifierProps> = ({ value, onChange }) => {
  const [isShowCom, setIsShowCom] = useState(false);

  const handleVisibleChange = (visible: boolean) => {
    setIsShowCom(visible);
  };

  const popoverData = {
    hiddenFunc: handleVisibleChange,
    value,
    onChange,
  };

  return (
    <Popover
      overlayClassName={'colorModifierBox'}
      content={<ColorGroup {...popoverData} />}
      placement="leftTop"
      trigger="click"
      visible={isShowCom}
      onVisibleChange={handleVisibleChange}
    >
      <span
        className={'colorModifierBox-content'}
        style={{ background: value }}
      />
    </Popover>
  );
};

export default ColorModifier;
