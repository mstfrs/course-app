import { createContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const values = {
    isModalOpen,
    setIsModalOpen,
  }
  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  )
}

export default ModalContext
