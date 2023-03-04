export function saveData(data: string) {
  localStorage.setItem('userInfo', data);
}




const OPTIONS_KEY = 'userInfo';

export interface User {
  name: string;
}

export const defaultUser = <User>{
  name: 'Germ',
};

export const isAppReady = () => {
  return null !== localStorage.getItem(OPTIONS_KEY);
};


export function getData() {
  const stored = localStorage.getItem(OPTIONS_KEY);

  try {
    const settings = JSON.parse(stored as string);
    return { ...defaultUser, ...settings };
  } catch (e) {
    return defaultUser;
  }
}


