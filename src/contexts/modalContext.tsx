import { createContext, ReactNode, useState } from 'react'

interface ModalContextProps {
  modalIsOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
