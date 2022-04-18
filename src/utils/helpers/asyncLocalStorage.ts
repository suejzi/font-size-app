export const asyncLocalStorage = {
  setItem: function (key: string, value: any) {
    return Promise.resolve().then(function () {
      localStorage.setItem(key, value);
    });
  },
};
