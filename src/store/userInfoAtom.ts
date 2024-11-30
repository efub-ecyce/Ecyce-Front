import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface userStateType {
  userId: number | null;
  name?: string | null;
  nickname?: string | null;
  profileImageUrl?: string;
}

export const userState = atom<userStateType>({
  key: 'userState',
  default: {
    userId: 0,
    name: '',
    nickname: '',
    profileImageUrl: '',
  },
  effects_UNSTABLE: [persistAtom],
});
