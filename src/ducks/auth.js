
const action = name => `/auth/${name}`;

export const FETCH = action('FETCH');

export const fetchUser = (user) => ({ type: FETCH, user });

const auth = (state = null, action) => {
  switch (action.type) {
    default:
      console.log('Hello World')
      return state;
  }
};

export default auth;
