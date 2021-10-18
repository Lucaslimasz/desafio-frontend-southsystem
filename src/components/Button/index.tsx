import * as S from './styles';

interface PropsButton {
  children: string;
  onClick?: () => Promise<void>;
  active?: boolean;
  disabled?: boolean;
}

function Input({active, children, ...rest}: PropsButton) {
  return (
    <S.Button {...rest} active={active}>{children}</S.Button>
  )
}

export default Input;