import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.main`
  width: 100wh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 720px) {
    margin-top: 100px;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`

export const Content = styled(motion.section)`
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.title};
    text-transform: uppercase;

    span {
      color: ${({ theme }) => theme.primary};
      font-size: 2.25rem;
    }

    @media (max-width: 720px) {
      text-align: center;
    }
  }

  p {
    margin-top: 12px;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-300']};

    display: inline-flex;
    align-items: flex-end;

    span {
      margin-left: 5px;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.primary};
      overflow: hidden;
      line-height: 32px;
      height: 31px;

      ul {
        li {
          position: relative;
          top: 0;
          left: 0;
          animation: slide 8s steps(2) infinite;

          @keyframes slide {
            100% {
              top: -64px;
            }
          }
          span {
            position: relative;

            &::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              border-left: 2px solid ${({ theme }) => theme.primary};
              animation: typing 4s steps(6) infinite;
              background-color: ${({ theme }) => theme.backgroundColor};
            }
          }
        }
      }

      @keyframes typing {
        50% {
          left: 100%;
          margin: 0 -35px 0 64px;
        }
        100% {
          left: 0;
        }
      }
    }

    @media (max-width: 720px) {
      margin-top: 0;

      span {
        height: 30px;
        @keyframes typing {
          50% {
            left: 100%;
            margin: 0 -36px 0 62px;
          }
          100% {
            left: 0;
          }
        }

        ul {
          li {
            @keyframes slide {
              100% {
                top: -62px;
              }
            }
          }
        }
      }
    }

    @media (max-width: 720px) {
      width: 100%;
      justify-content: center;
    }
  }

  pre {
    margin-top: 40px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    line-height: 150%;

    code {
      span {
        font-family: 'JetBrains Mono', monospace;

        &.tag {
          color: ${({ theme }) => theme.tag};
        }
        &.props {
          color: ${({ theme }) => theme.props};
        }
        &.string {
          color: ${({ theme }) => theme.string};
        }
        &.variable {
          color: ${({ theme }) => theme.variable};
        }
        &.operator {
          color: ${({ theme }) => theme.operator};
        }

        &.dynamic {
          display: flex;
          flex: none;

          overflow: hidden;
          line-height: 18px;
          height: 18px;

          ul {
            li {
              position: relative;
              top: 0;
              left: 0;
              animation: slide-min 8s steps(2) infinite;

              @keyframes slide-min {
                100% {
                  top: -36px;
                }
              }
              span {
                position: relative;

                &::after {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  border-left: 2px solid ${({ theme }) => theme.primary};
                  animation: typing-min 4s steps(10) infinite;
                  background-color: ${({ theme }) => theme.backgroundColor};
                }

                @keyframes typing-min {
                  50% {
                    left: 100%;
                    margin: 0 -16px 0 0;
                  }
                  100% {
                    left: 0;
                  }
                }
              }
            }
          }
        }
      }
    }

    @media (max-width: 720px) {
      font-size: 0.75rem;
    }
  }
`

export const SocialMediaContainer = styled.div`
  display: none;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-family: 'Outfit';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme['gray-400']};
  }

  ul {
    margin-top: 10px;

    display: flex;
    gap: 12px;

    li {
      color: ${({ theme }) => theme['gray-600']};

      &:hover {
        filter: brightness(0.8);
      }
    }
    span {
      color: ${({ theme }) => theme['gray-600']};
    }
  }

  @media (max-width: 720px) {
    display: flex;

    ul {
      margin-top: 0;
      align-items: center;

      span {
        font-size: 6px;
      }
    }
  }
`

export const PictureContainer = styled.section`
  @media (max-width: 720px) {
    img {
      /* padding-top: 100px; */
      /* margin-left: 100px; */
      /* padding-bottom: 50px; */
    }
  }
`
