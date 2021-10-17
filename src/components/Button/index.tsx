import * as S from './styles';

interface PropsButton {
  children: string;
}

function Input({children, ...rest}: PropsButton) {
  return (
    <S.Button {...rest}>{children}</S.Button>
  )
}

export default Input;