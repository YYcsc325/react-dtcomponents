import React, { ForwardRefRenderFunction, forwardRef, useMemo } from 'react';
import classNames from 'classnames';
import { createPrefixCls } from '@/utils/utils';
import { Popover } from 'antd';

import './index.less';

const prefixCls = createPrefixCls('ellipsis');

export interface IEllipsisProps {
  lineClamps?: number;
  className?: string;
  isShowTips?: boolean;
  style?: React.CSSProperties;
  text: React.ReactNode;
}
const Ellipsis: ForwardRefRenderFunction<HTMLDivElement, IEllipsisProps> = (
  { text, style = {}, className, lineClamps = 1, isShowTips = false },
  ref,
) => {
  const styleLineClamp: any = {
    ...style,
    WebkitLineClamp: lineClamps,
  };

  const render = useMemo(() => {
    return isShowTips ? (
      <Popover
        content={text}
        mouseEnterDelay={0.5}
        placement="topLeft"
        overlayClassName={prefixCls('popover')}
      >
        <div>{text}</div>
      </Popover>
    ) : (
      <div>{text}</div>
    );
  }, [isShowTips, text]);

  return (
    <div
      ref={ref}
      style={styleLineClamp}
      className={classNames(prefixCls(), className)}
    >
      {render}
    </div>
  );
};

export default forwardRef(Ellipsis);
