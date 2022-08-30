import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFomatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionContainer, TransactionsTable } from "./styles";


export function Transaction() {
  const transactions = useContextSelector(TransactionsContext, 
    (context) => {
      return context.transactions
    })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHightLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHightLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFomatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              ))}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}