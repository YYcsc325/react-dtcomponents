import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import AverageLabel from './index';

describe('test size', () => {
  test('test size', () => {
    const { container } = render(
      <AverageLabel size={3}>
        <AverageLabel.Item label={'测试1'} value={'1'} key={'1'} />
        <AverageLabel.Item label={'测试2'} value={'2'} key={'2'} />
        <AverageLabel.Item label={'测试3'} value={'3'} key={'3'} />
        <AverageLabel.Item label={'测试4'} value={'4'} key={'4'} />
        <AverageLabel.Item label={'测试5'} value={'5'} key={'5'} />
        <AverageLabel.Item label={'测试6'} value={'6'} key={'6'} />
        <AverageLabel.Item label={'测试7'} value={'7'} key={'7'} />
      </AverageLabel>,
    );
    expect(container.querySelectorAll('.dt-average-warp-col')).toHaveLength(3);
  });
});
