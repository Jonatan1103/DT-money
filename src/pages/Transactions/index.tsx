import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionContainer, TransactionsTable } from "./styles";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento</td>
              <td>
                <PriceHightLight variant="income">
                  R$ 12.000,00
                </PriceHightLight>
              </td>
              <td>Vendas</td>
              <td>11/03/1994</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <td>
                <PriceHightLight variant="outcome">
                  - R$ 82,00
                </PriceHightLight>
              </td>
              <td>Compras</td>
              <td>10/08/1994</td>
            </tr>
            <tr>
              <td>Alimentação</td>
              <td>
                <PriceHightLight variant="outcome">
                  - R$ 2.000,00
                </PriceHightLight>
              </td>
              <td>Compras</td>
              <td>15/08/1994</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}