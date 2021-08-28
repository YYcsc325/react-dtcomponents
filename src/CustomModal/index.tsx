import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';
import classNames from 'classnames';
import { createPrefixCls } from '@/utils/utils';
import { ModalProps } from 'antd/lib/modal';

import styles from './index.less';

const prefixCls = createPrefixCls('custom-modal', styles);

class CustomModal extends Component<ModalProps> {
  static showModal = (props: any) => {
    const div = document.createElement('div');
    const customModalBody = props.customModalBody;
    document.body.appendChild(div);
    // const ref: any = React.createRef();
    ReactDOM.render(
      <Modal
        {...props}
        visible
        wrapClassName={classNames({
          [prefixCls()]: customModalBody,
        })}
        closable={!customModalBody}
      />,
      div,
    );
    return {
      destroy: () => {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
    };
  };
  render() {
    return <Modal {...this.props} />;
  }
}

export default CustomModal;
