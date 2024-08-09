export const setItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting localStorage item:", error);
  }
};

export const getItem = (key: string, defaultValue: any) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Error getting localStorage item:", error);
    return defaultValue;
  }
};
