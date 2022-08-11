import { useContext } from 'react'
import { ModalContext } from '../contexts/modalContext'

export function useModal() {
  const context = useContext(ModalContext)

  return context
}
