import styled, { css } from 'styled-components'
import { ImageProps } from 'next/image'
import { motion } from 'framer-motion'

interface PictureProps extends ImageProps {
  size: 'small' | 'medium' | 'large'
}

export const Picture = styled(motion.img)<PictureProps>`
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 195px;
          height: 260px;
        `
      case 'medium':
        return css`
          width: 300px;
          height: 400px;
        `
      case 'large':
        return css`
          width: 498px;
          height: 664px;
        `
      default:
        break
    }

    return css``
  }}
`
