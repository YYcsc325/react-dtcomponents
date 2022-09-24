import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import { findChild, createPrefixCls } from '@/utils/utils';

import './index.less';

const prefixClsComposite = createPrefixCls('composite');
const prefixClsCompositeLeft = createPrefixCls('composite-left');
const prefixClsCompositeRight = createPrefixCls('composite-right');

export interface ICompositeProps {
  className?: string;
  style?: React.CSSProperties;
}

const Composite: FC<ICompositeProps> & {
  Left: FC<ICompositeLeftProps>;
  Right: FC<ICompositeRightProps>;
} = ({ className, children, style }) => {
  return (
    <div
      className={classNames(prefixClsComposite(), className)}
      style={{ height: '500px', ...style }}
    >
      <div className={prefixClsComposite('top')}>top</div>
      <div className={prefixClsComposite('left')}>
        {findChild(children, CompositeLeft)}
      </div>
      <div className={prefixClsComposite('right')}>
        {findChild(children, CompositeRight)}
      </div>
      <div className={prefixClsComposite('bottom')}>bottom</div>
    </div>
  );
};

export interface ICompositeLeftProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEventHandler<HTMLDivElement>) => void;
}

const CompositeLeft: FC<ICompositeLeftProps> = ({
  className,
  children,
  onClick,
}) => {
  const handleClick = useCallback(
    (e) => {
      onClick?.(e);
    },
    [onClick],
  );
  return (
    <div
      className={classNames(prefixClsCompositeLeft(), className)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export interface ICompositeRightProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEventHandler<HTMLDivElement>) => void;
}

const CompositeRight: FC<ICompositeRightProps> = ({
  className,
  children,
  onClick,
}) => {
  const handleClick = useCallback(
    (e) => {
      onClick?.(e);
    },
    [onClick],
  );
  return (
    <div
      className={classNames(prefixClsCompositeRight(), className)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

Composite.displayName = 'Composite';
CompositeLeft.displayName = 'CompositeLeft';
CompositeRight.displayName = 'CompositeRight';

Composite.Left = CompositeLeft;
Composite.Right = CompositeRight;

export default Composite;
