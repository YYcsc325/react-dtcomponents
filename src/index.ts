import * as util from './utils/utils';
import * as hook from './utils/hooks';
import * as fileTransfor from './utils/fileTransfor';

const hooks = { ...hook };
const utils = { ...util, ...fileTransfor };

export { utils, hooks };

export { default as AverageLabel } from './AverageLabel';
export { default as Steps } from './Steps';
export { default as CustomModal } from './CustomModal';
export { default as CardTabs } from './CardTabs';
export { default as DragForm } from './DragForm';

/*
 浏览文档: dumi的github             https://github.com/umijs/dumi
 浏览文档: dumi的配置                https://d.umijs.org/config
 浏览文档: dumi的打包构建father       https://github.com/umijs/father#config
 浏览文档: father的别名umi-library   https://github.com/umijs/umi
*/
