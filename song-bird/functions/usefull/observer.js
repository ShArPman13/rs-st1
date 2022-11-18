const observable = () => {
  let language = 'en';
  const listeners = new Set();

  return {
    subscribe: (callback) => {
      listeners.add(callback);
    },
    unsubscribe: (callback) => {
      listeners.delete(callback);
    },
    update: (newValue) => {
      language = newValue;
      listeners.forEach((callback) => callback(language));
    },
    getValue: () => language,
  };
};

export default observable;
