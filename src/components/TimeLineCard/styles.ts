import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  z-index: 200;
  display: flex;
  gap: 24px;
`

export const Circle = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.string};
    font-size: 0.625rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`

export const Card = styled.div`
  position: relative;
  flex: 1;
  padding: 8px 16px 20px 16px;
  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 4px;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    color: ${({ theme }) => theme.string};
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 0.875rem;
  }
`

export const Triangle = styled.div`
  position: absolute;
  top: 8px;
  left: -16px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid ${({ theme }) => theme['gray-800']};
  transform: rotate(-90deg);
`
