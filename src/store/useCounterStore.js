import { produce } from 'immer';
import { create } from 'zustand';

const useCountStore = create((set) => ({
  count: 0,
  nested: { count: 0 },
  deep: {
    nested: {
      obj: { count: 0 },
    },
  },

  incCount: () => set((state) => ({ count: state.count + 1 })),
  inc: () =>
    set((state) => ({
      nested: { ...state.nested, count: state.nested.count + 1 },
    })),
  normalInc: () =>
    set((state) => ({
      deep: {
        ...state.deep,
        nested: {
          ...state.deep.nested,
          obj: {
            ...state.deep.nested.obj,
            count: state.deep.nested.obj.count + 1,
          },
        },
      },
    })),
  immerInc: () =>
    set(
      produce((state) => {
        ++state.deep.nested.obj.count;
      })
    ),
}));

export default useCountStore;
