// src/hooks/recoilState.ts
import { atom } from 'recoil';

export const userFormState = atom({
  key: 'userFormState',
  default: {
    id: null,
    name: '',
    email: '',
  },
});
