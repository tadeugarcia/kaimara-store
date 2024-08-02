import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import CartTotals from "@modules/common/components/cart-totals"
import { cookies } from "next/headers"
import { getCart } from "@lib/data"

const CheckoutSummary = async () => {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) {
    return null
  }

  const cart = await getCart(cartId).then((cart) => cart)

  if (!cart) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-12 small:py-0 ">
      <div className="w-full bg-white flex flex-col">
        <Heading
          level="h2"
          className="text-xl mb-6"
        >
          Resumo do pedido
        </Heading>
        <CartTotals data={cart} />
        <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />
      </div>
    </div>
  )
}

export default CheckoutSummary
