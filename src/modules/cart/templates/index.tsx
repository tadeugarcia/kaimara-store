import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import { CartWithCheckoutStep } from "types/global"
import { Customer } from "@medusajs/medusa"

const CartTemplate = ({
  cart,
}: {
  cart: CartWithCheckoutStep | null
  customer: Omit<Customer, "password_hash"> | null
}) => {
  return (
    <div className="py-12">
      <div className="content-container" data-testid="cart-container">
        {cart?.items.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
            <div className="flex flex-col bg-white py-6 gap-y-6">
              <ItemsTemplate region={cart?.region} items={cart?.items} />
              <div className="flex flex-col items-center">
                <LocalizedClientLink
                  href="/store"
                  className="txt-medium-plus w-auto"
                  data-testid="back-to-cart-link"
                >
                    Continuar comprando
                </LocalizedClientLink>
              </div>              
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && cart.region && (
                  <>
                    <div className="bg-white py-6">
                      <Summary cart={cart} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
