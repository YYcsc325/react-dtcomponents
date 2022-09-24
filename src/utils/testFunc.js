// import {
//   isArray,
//   isObject,
//   isPlainObject,
//   isString,
//   isPromise,
//   isFunction,
//   isEmptyObject,
//   isParseJSON,
//   isUndefined,
//   isNull,
// } from './is';

// describe('is', () => {
//   test('is.isArray', () => {
//     expect(isArray([])).toBe(true);
//     expect(isArray({ length: 2, 0: 1, 1: 2 })).toBe(false);
//     expect(isArray(null)).toBe(false);
//     expect(isArray(undefined)).toBe(false);
//     const _originIsArray = Array.isArray;
//     Array.isArray = undefined;
//     expect(isArray([])).toBe(true);
//     expect(isArray({ length: 2, 0: 1, 1: 2 })).toBe(false);
//     expect(isArray(null)).toBe(false);
//     expect(isArray(undefined)).toBe(false);
//     Array.isArray = _originIsArray;
//   });

//   test('is.isObject', () => {
//     expect(isPlainObject({})).toBe(true);
//     expect(isPlainObject([])).toBe(false);
//     expect(isPlainObject(Object.create(null))).toBe(true);
//     expect(isPlainObject(3)).toBe(false);
//     expect(isPlainObject(false)).toBe(false);
//   });

//   test('is.isString', () => {
//     expect(isString(false)).toBe(false);
//     expect(isString({})).toBe(false);
//     expect(isString([])).toBe(false);
//     expect(isString(null)).toBe(false);
//     expect(isString('')).toBe(true);
//   });
//   test('is.isPromise', () => {
//     expect(isPromise({})).toBe(false);
//     expect(isPromise({ then: jest.fn() })).toBe(false);
//     expect(isPromise(2)).toBe(false);
//     expect(isPromise(Promise.resolve())).toBe(true);
//   });
//   test('is.isFunction', () => {
//     expect(isFunction(() => { })).toBe(true);
//     expect(isFunction(1)).toBe(false);
//     expect(isFunction(jest.fn())).toBe(true);
//   });
//   test('is.isEmptyObject', () => {
//     expect(isEmptyObject({})).toBe(true);
//     expect(isEmptyObject([])).toBe(false);
//     expect(isEmptyObject(2)).toBe(false);
//   });
//   test('is.isParseJSON', () => {
//     expect(isParseJSON(2)).toBe(true);
//     expect(isParseJSON('')).toBe(false);
//     expect(isParseJSON('{')).toBe(false);
//     expect(isParseJSON('{}')).toBe(true);
//   });

//   test('is.isUndefined', () => {
//     expect(() => isUndefined()).not.toThrowError();
//     expect(isUndefined()).toEqual(false);
//     expect(isUndefined(undefined)).toEqual(true);
//     expect(isUndefined(32)).toEqual(false);
//   });

//   test('is.isNull', () => {
//     expect(() => isNull()).not.toThrowError();
//     expect(isNull()).toEqual(false);
//     expect(isNull(null)).toEqual(true);
//     expect(isNull('3232')).toEqual(false);
//   });
// });
