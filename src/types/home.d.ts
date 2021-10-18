export interface ModalProps {
  isOpen: boolean;
  onRequestClose(state: boolean): void;
  onClose: () => void;
  id?: string;
}

export interface ViewDragonProps {
  isOpen: boolean;
  id?: string;
}

export interface Informations {
  avatar?: string;
  name: string;
  type: string;
  id: string;
  createdAt: string;
}

export interface PropsButton {
  children: string;
  onClick?: () => Promise<void>;
  active?: boolean;
  disabled?: boolean;
}