import { create } from 'zustand';

interface SearchModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  // state of the popup - default to open on refresh 
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useSearchModal;