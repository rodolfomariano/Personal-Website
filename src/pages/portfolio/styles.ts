import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 720px) {
    height: 100vh;
    margin-top: 100px;
    flex-direction: column;
  }
`
export const PortfolioOptionsContainer = styled.header`
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme['gray-700-transparent']};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const PortfolioTypeButton = styled.button`
  width: 180px;
  background: transparent;
  border: none;
  padding: 8px 16px;
  color: ${({ theme }) => theme['gray-700']};
  font-size: 1.5rem;
  transition: 300ms;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.title};
  }

  &.isActive {
    color: ${({ theme }) => theme.string};
  }
`
export const OptionBar = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50%;
  height: 2px;
  background-color: ${({ theme }) => theme.string};
  transition: 300ms;
`
export const PortfolioContent = styled.section`
  padding: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`
