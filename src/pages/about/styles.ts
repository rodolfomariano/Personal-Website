import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`
export const PersonalData = styled.section`
  flex: 1;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`
export const TabsHeader = styled.div`
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme['gray-700-transparent']};

  display: flex;
`

export const TabesHeaderButton = styled.button`
  width: 120px;
  border: none;
  padding: 4px 0;
  color: ${({ theme }) => theme['gray-700']};
  background: transparent;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 300ms;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    color: ${({ theme }) => theme.title};
  }

  &.active {
    color: ${({ theme }) => theme.title};
  }
`

export const TableSelected = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0%;
  width: 25%;
  height: 1px;
  background-color: ${({ theme }) => theme.title};
  transition: 300ms;
`

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;

  display: flex;
`

export const TableContent = styled.div`
  flex: none;
  width: 100%;
`

export const PersonalDescription = styled.div`
  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.text};
    /* font-size: 0.875rem; */
  }

  p + p {
    margin-top: 16px;
  }
`

export const TimeLine = styled.div``

export const Study = styled.div``

export const Skills = styled.div``
