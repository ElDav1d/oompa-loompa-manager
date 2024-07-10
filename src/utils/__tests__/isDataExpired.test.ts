import { it as test, expect } from 'vitest';
import isDataExpired from '../isDataExpired';

const CACHE_TIME = 1000 * 60 * 60; // 1 hour

test('should return false if the data is not expired', () => {
  const oneMinuteAgo = new Date(Date.now() - 1000 * 60).toISOString();
  expect(isDataExpired(oneMinuteAgo, CACHE_TIME)).toBe(false);
});

test('should return true if the data is expired', () => {
  const twoHoursAgo = new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString();
  expect(isDataExpired(twoHoursAgo, CACHE_TIME)).toBe(true);
});

test('should return true if the last fetch time is invalid', () => {
  const invalidLastFetch = '';
  expect(isDataExpired(invalidLastFetch, CACHE_TIME)).toBe(true);
});

test('should handle the edge case where the last fetch time is exactly the cache time ago', () => {
  const exactlyOneHourAgo = new Date(Date.now() - CACHE_TIME).toISOString();
  expect(isDataExpired(exactlyOneHourAgo, CACHE_TIME)).toBe(false);
});
