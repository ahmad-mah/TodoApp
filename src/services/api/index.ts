export const apiClient = {
  async get<T>(uri: string): Promise<T> {
    const response = await fetch(uri);
    return (await response.json()) as T;
  },
};
