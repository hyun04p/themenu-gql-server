const rootResolver = {
  hello: () => {
    return 'Hello world!?';
  },
  user: ({ id }) => {
    return {
      name: '',
      age: 20,
      height: ({ unit }) => {
        return 280;
      },
    };
  },
};

export default rootResolver;
