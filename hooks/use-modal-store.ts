import { create } from "zustand";

export type ModalType = "createRegister" | "editRegister" | "deleteRegister";

// remove later
interface ModalData {
  id?: string;
  description?: string;
  createdAt?: Date;
  status?: string;
  type?: string;
  amount?: number;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));

export default useModal;
