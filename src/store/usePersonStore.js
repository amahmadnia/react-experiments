import { create } from 'zustand';

// Create your store, which includes both state and (optionally) actions
const usePersonStore = create((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export default usePersonStore;
