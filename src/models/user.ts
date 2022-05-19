let User = {
    namespace: "user",
     
    state: {
      name: "这是user的model",
      age: 1,
    },
    reducers: {
      overrideStateProps(state, { payload }) {
        return {
          ...state,
          ...payload,
        };
      },
      updateStateProps(state, { payload }) {
        const { name, value } = payload;
        return {
          ...state,
          ...{ [name]: { ...state[name], ...value } },
        };
      },
    },
    effects: {},
    subscriptions: {},
  };
  export default User;
  
  
  