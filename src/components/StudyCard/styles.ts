import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.string};
  padding: 12px 24px 20px 24px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      color: ${({ theme }) => theme.string};
    }

    div {
      font-size: 0.875rem;
      opacity: 0.7;
      color: ${({ theme }) => theme.link};
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 4px;

      transition: 300ms;

      &:hover {
        opacity: 1;
      }
    }
  }

  span {
    display: inline-block;
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-600']};
    margin-bottom: 12px;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.title};
  }
`
