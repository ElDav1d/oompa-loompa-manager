const isDataExpired = (lastFetch: string, cacheTime: number) => {
  if (!lastFetch) {
    return true;
  }

  const now = new Date().getTime();
  const lastFetchDate = new Date(lastFetch).getTime();

  return now - lastFetchDate > cacheTime;
};

export default isDataExpired;
