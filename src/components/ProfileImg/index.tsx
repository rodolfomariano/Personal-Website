import { Picture } from './styles'

const myLoader = () => {
  return 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/eu-big.svg?alt=media&token=ea143bf7-47b4-432f-b63f-12ebd92e0879'
}

interface ProfileImgProps {
  size?: 'small' | 'medium' | 'large'
}

export function ProfileImg({ size = 'small' }: ProfileImgProps) {
  return (
    <Picture
      loader={myLoader}
      src="https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/eu-big.svg?alt=media&token=ea143bf7-47b4-432f-b63f-12ebd92e0879"
      alt="Foto do Rodolfo com os braços cruzados, vestindo uma camiseta preta e um gorro cinza"
      size={size}
      layoutId="profile-picture"
      transition={{ duration: 0.8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  )
}
