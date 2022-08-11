import Image from 'next/image'
import { CaretLeft, CaretRight, X } from 'phosphor-react'
import {
  CloseModalButton,
  Header,
  ImageContainer,
  ModalBackdrop,
  ModalContent,
  ProjectDetails,
} from './styles'

import { useModal } from '../../hooks/useModal'

export function Modal() {
  const { modalData, closeModal } = useModal()

  return (
    <>
      <ModalContent>
        <CloseModalButton onClick={closeModal}>
          <X />
        </CloseModalButton>
        <ImageContainer>
          <button>
            <CaretLeft />
          </button>

          <Image src={modalData.thumbnail} alt="" />

          <button>
            <CaretRight />
          </button>
        </ImageContainer>

        <Header>
          <h1 style={{ fontSize: modalData.title.length > 17 ? 20 : 24 }}>
            {modalData.title}
          </h1>

          {modalData.projectLink && (
            <p>
              Visite o projeto:{' '}
              <a href={modalData.projectLink} target="_blank" rel="noreferrer">
                {modalData.title}
              </a>
            </p>
          )}
          <p>
            GitHub:{' '}
            <a href={modalData.githubLink} target="_blank" rel="noreferrer">
              {modalData.title}
            </a>
          </p>
        </Header>

        <ProjectDetails>
          <h2>Tecnologias utilizadas</h2>

          <ul>
            {modalData.technologies.map((technology) => (
              <li key={technology}>
                <span>
                  <span>&#9679;</span> {technology}
                </span>
              </li>
            ))}
          </ul>

          <h2>Aprendizados</h2>

          <p>{modalData.learnings}</p>
        </ProjectDetails>
      </ModalContent>

      <ModalBackdrop onClick={closeModal} />
    </>
  )
}
