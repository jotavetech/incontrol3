import { create } from "zustand";

export type ModalType =
  | "createRegister"
  | "editRegister"
  | "deleteRegister"
  | "registerDetails";

// remove later
interface ModalData {
  id?: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  category?: string;
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
