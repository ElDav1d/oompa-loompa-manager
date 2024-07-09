import { test, expect } from 'vitest';
import { useFilterList } from '../hooks';
import { renderHook } from '@testing-library/react';
import mockList from '../mocks/mockList';

test('should filter with empty string', () => {
  //ARRANGE
  const items = mockList;
  const filterString = '';
  const filterProperties = ['first_name', 'last_name', 'profession'];

  //ACT
  const { result } = renderHook(() => useFilterList({ items, filterString, filterProperties }));

  //ASSERT
  expect(result.current).toEqual(mockList);
});

test('should filter if the filter string only contains whitespaces', () => {
  //ARRANGE
  const items = mockList;
  const filterString = '';
  const filterProperties = ['first_name', 'last_name', 'profession'];

  //ACT
  const { result } = renderHook(() => useFilterList({ items, filterString, filterProperties }));

  //ASSERT
  expect(result.current).toEqual(mockList);
});

test('should filter with a string preceeded by several whitespaces', () => {
  //ARRANGE
  const items = mockList;
  const filterString = '  dev';
  const filterProperties = ['profession'];

  //ACT
  const { result } = renderHook(() => useFilterList({ items, filterString, filterProperties }));

  //ASSERT
  expect(result.current).toEqual([
    { first_name: 'John', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'John', last_name: 'Smith', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Smith', profession: 'Developer' },
  ]);
});

test('should filter with a string followed by several whitespaces', () => {
  //ARRANGE
  const items = mockList;
  const filterString = 'dev  ';
  const filterProperties = ['profession'];

  //ACT
  const { result } = renderHook(() => useFilterList({ items, filterString, filterProperties }));

  //ASSERT
  expect(result.current).toEqual([
    { first_name: 'John', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'John', last_name: 'Smith', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Smith', profession: 'Developer' },
  ]);
});

test('should filter with one incomplete word and one property', () => {
  //ARRANGE
  const items = mockList;
  const filterString = 'dev';
  const filterProperties = ['profession'];

  //ACT
  const { result } = renderHook(() => useFilterList({ items, filterString, filterProperties }));

  //ASSERT
  expect(result.current).toEqual([
    { first_name: 'John', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'John', last_name: 'Smith', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Smith', profession: 'Developer' },
  ]);
});

test('should filter with one incomplete word and three properties', () => {
  //ARRANGE
  const items = mockList;
  const filterString = 'e';
  const filterProperties = ['first_name', 'last_name', 'profession'];

  //ACT
  const { result } = renderHook(() => useFilterList({ items, filterString, filterProperties }));

  //ASSERT
  expect(result.current).toEqual(mockList);
});

test('should be case insensitive', () => {
  //ARRANGE
  const items = mockList;
  const filterString = 'dEvElOpEr';
  const filterProperties = ['profession'];

  //ACT
  const { result } = renderHook(() => useFilterList({ items, filterString, filterProperties }));

  //ASSERT
  expect(result.current).toEqual([
    { first_name: 'John', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Doe', profession: 'Developer' },
    { first_name: 'John', last_name: 'Smith', profession: 'Developer' },
    { first_name: 'Jane', last_name: 'Smith', profession: 'Developer' },
  ]);
});
