import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoHeader from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoHeader} alt=""/>
        <NewTransactionButton>
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}