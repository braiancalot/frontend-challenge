import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>capputeeno</h1>
      <input type="search" placeholder="Procurando por algo específico?" />
      <div>Cart (1)</div>
    </HeaderContainer>
  );
}
