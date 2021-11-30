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
