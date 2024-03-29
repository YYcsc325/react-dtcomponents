import React, { FC, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { childrenToArray, childrenClone } from '@/utils/utils';

import './index.less';

interface IStepsProps {
  current: number;
}

interface IStepProps {
  readonly index?: number;
  readonly current?: number;
  readonly grow?: number;
  title: React.ReactNode;
}

const Steps: FC<IStepsProps> & {
  Step: FC<IStepProps>;
} = ({ children, current }) => {
  const childList = childrenToArray(children);
  return (
    <div className={'steps'}>
      {childList.map((child: any, index: number) => {
        const targetIndex = index + 1;
        return childrenClone(child, {
          index: targetIndex,
          current,
          grow: childList.length === targetIndex ? 0 : 1,
        });
      })}
    </div>
  );
};

const Step: FC<IStepProps> = ({ index, title, current, grow }) => {
  const stepRef: any = useRef(null);
  const [computedWidth, setComputedWidth] = useState(0);

  useEffect(() => {
    const firstChildNode = stepRef.current.childNodes?.[0];
    const data = getComputedStyle(firstChildNode);
    const width = data.width.replace(/px/g, '');
    setComputedWidth(parseInt(width));
  }, []);

  return (
    <div className={'step'} style={{ flexGrow: grow }} ref={stepRef}>
      <div className={'step-warp'}>
        <span
          className={classNames('step-index', {
            ['step-active']: current === index,
          })}
        >
          {index}
        </span>
        <span className={'step-title'}>{title}</span>
      </div>
      {Boolean(grow) && (
        <div
          className={'step-line'}
          style={{
            width: `calc(100% - ${computedWidth + 20}px)`,
            left: `${computedWidth + 10}px`,
          }}
        />
      )}
    </div>
  );
};

Steps.displayName = 'Steps';
Step.displayName = 'Step';

Steps.Step = Step;

export { IStepsProps, IStepProps };

export default Steps;
