import { CaretLeft, CaretRight, X } from 'phosphor-react'
import {
  CloseModalButton,
  Header,
  ImageContainer,
  ModalBackdrop,
  ModalContent,
  ProjectDetails,
} from './styles'

import MacroCalcImg from '../../assets/portfolio-images/my-macro-calc.svg'
import { useModal } from '../../hooks/useModal'

export function Modal() {
  const { closeModal } = useModal()

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

          <MacroCalcImg />

          <button>
            <CaretRight />
          </button>
        </ImageContainer>

        <Header>
          <h1>My Macro Calc</h1>

          <p>
            Visite o projeto: <a href="">myMacroCal</a>
          </p>
          <p>
            GitHub: <a href="">myMacroCal</a>
          </p>
        </Header>

        <ProjectDetails>
          <h2>Tecnologias utilizadas</h2>

          <ul>
            <li>
              <span>
                <span>&#9679;</span> React JS / Vite
              </span>
            </li>
            <li>
              <span>
                <span>&#9679;</span> Sass
              </span>
            </li>
            <li>
              <span>
                <span>&#9679;</span> Framer Motion
              </span>
            </li>
          </ul>

          <h2>Aprendizados</h2>

          <p>
            Nesse projeto de e-commerce Fake, pude aprender a lidar com a lib
            React DnD que auxilia na função de Drag and Drop(Arrastar e soltar),
            além de poder usar o hook reducer e também usar a técnica de layouts
            em projetos react.
          </p>
        </ProjectDetails>
      </ModalContent>

      <ModalBackdrop onClick={closeModal} />
    </>
  )
}
