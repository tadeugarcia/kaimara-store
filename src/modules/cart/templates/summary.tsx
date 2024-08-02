"use client"

import { Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import { CartWithCheckoutStep } from "types/global"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-xl mb-6">
        Resumo do pedido
      </Heading>
      <CartTotals data={cart} />
      <LocalizedClientLink href={"/checkout?step=" + cart.checkout_step} data-testid="checkout-button">
        <Button className="w-full h-10 btn-primary">Ir para o pagamento</Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
