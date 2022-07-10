declare module '*.css';
declare module '*.less';

/** 获取对象value类型（转成联合类型） */
declare type ValueOf<T> = T[keyof T];

/** 获取对象key类型（转成联合类型） */
declare type TransforObjectToArray<T = any> = keyof T;

/** 获取函数参数类型 */
declare type GetFucParamsType<T> = T extends (arg: infer P) => void
  ? P
  : string;
