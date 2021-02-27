function mockApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

export default mockApi;
