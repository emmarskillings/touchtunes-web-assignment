import axios from 'axios';

export const getHashParams = () => {
  let hashParams = {};
  let e: RegExp | RegExpExecArray | null = /([^&;=]+)=?([^&;]*)/g;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);

  while ( e = r.exec(q)) {
    // @ts-ignore
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export const setAuthHeader = () => {
  try {
    const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};
