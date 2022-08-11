import { createContext, ReactNode, useState } from 'react'

interface ModalDataProps {
  id: string
  title: string
  type: string
  description: string
  technologies: string[]
  projectLink?: string
  githubLink?: string
  thumbnail: string
  images: string[]
  learnings: string
}

interface ModalContextProps {
  modalIsOpen: boolean
  modalData: ModalDataProps
  openModal: (data: ModalDataProps) => void
  closeModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalDataProps>(
    {} as ModalDataProps,
  )

  function openModal(data: ModalDataProps) {
    setModalIsOpen(true)
    setModalData(data)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, modalData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
