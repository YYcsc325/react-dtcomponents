import React from 'react';

import FormTree from '@/FormTree';

const mapUi = {
  Tree: FormTree,
};

type IMapUi = keyof typeof mapUi;

type SingleComponent<T> = React.FC<T>;

type IComponentList<T> = { [P in IMapUi]: SingleComponent<T> };

type ValueOf<T> = T[keyof T];

export { IMapUi, IComponentList };

export default mapUi;
