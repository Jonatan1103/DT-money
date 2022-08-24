import * as Dialog from '@radix-ui/react-dialog'
import { Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Dialog.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <Dialog.Close />
      </Dialog.Content>

    </Dialog.Portal>
  )
}