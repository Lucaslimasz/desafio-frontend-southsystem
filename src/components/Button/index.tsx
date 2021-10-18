import { PropsButton } from '../../types/home';
import * as S from './styles';

function Input({active, children, ...rest}: PropsButton) {
  return (
    <S.Button {...rest} active={active}>{children}</S.Button>
  )
}

export default Input;