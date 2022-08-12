import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media (max-width: 720px) {
    margin-top: 100px;
    flex-direction: column;
  }
`
export const PersonalData = styled(motion.section)`
  height: 350px;
  /* width: 100%; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 720px) {
    /* flex: 1; */
    /* width: 100%; */
    align-items: center;
  }
`
export const TabsHeader = styled(motion.div)`
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

  @media (max-width: 720px) {
    width: 90px;
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

export const TabsContainer = styled(motion.div)`
  width: 100%;
  max-width: 700px;
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;

  display: flex;

  @media (max-width: 720px) {
    max-width: calc(100vw - 32px);
    flex: 1;
  }
`

export const TableContent = styled.div`
  flex: none;
  width: 100%;
`

export const PersonalDescription = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  p + p {
    margin-top: 16px;
  }
`

export const TimeLine = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 24px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme['gray-700']};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-800']};
    border-radius: 4px;
  }
`

export const TimeLineContent = styled.div`
  position: relative;
  flex: 1;
  padding: 24px 24px 0 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Row = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
  z-index: 1;
  width: 8px;
  height: 90%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme['gray-800']};
`

export const Study = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 24px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme['gray-700']};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-800']};
    border-radius: 4px;
  }
`

export const StudyOptionsContainer = styled.div`
  margin-bottom: 24px;

  display: flex;
  gap: 24px;
`

export const StudyOptionButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme['gray-700']};
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: 300;
  transition: 300ms;

  display: flex;
  align-items: center;
  gap: 8px;

  &.active {
    color: ${({ theme }) => theme.title};
  }

  &:hover {
    color: ${({ theme }) => theme.title};
  }
`

export const StudyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Skills = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-bottom: 24px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme['gray-700']};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-800']};
    border-radius: 4px;
  }
`

export const SkillOptionsContainer = styled.div`
  margin-bottom: 24px;

  display: flex;
  gap: 24px;
`

export const SkillOptionButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme['gray-700']};
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: 300;
  transition: 300ms;

  display: flex;
  align-items: center;
  gap: 8px;

  &.active {
    color: ${({ theme }) => theme.title};
  }

  &:hover {
    color: ${({ theme }) => theme.title};
  }
`
export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 32px;
    font-weight: 300;
    color: ${({ theme }) => theme.text};

    &.soft-skill {
      margin-top: -168px;
    }
  }
`

export const SkillsCardContainer = styled.div`
  margin-bottom: 56px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  &:not(.soft-skill):last-child {
    margin-bottom: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`
