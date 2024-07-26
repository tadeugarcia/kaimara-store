import { Suspense } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="items-center gap-x-6">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M245.5-268.81q51.77-37.34 109.62-58.46 57.84-21.11 124.88-21.11 67.04 0 124.88 21.11 57.85 21.12 109.85 58.46 38.42-42.11 59.83-95.52 21.4-53.41 21.4-115.68 0-131.68-92.13-223.82-92.14-92.13-223.83-92.13t-223.83 92.13q-92.13 92.14-92.13 223.82 0 62.27 21.4 115.68 21.41 53.41 60.06 95.52Zm234.62-182.81q-54.27 0-91.39-36.99-37.11-36.99-37.11-91.27 0-54.27 36.99-91.39 36.99-37.11 91.27-37.11 54.27 0 91.39 36.99 37.11 36.99 37.11 91.27 0 54.27-36.99 91.39-36.99 37.11-91.27 37.11ZM480-108.08q-77.25 0-145.24-29.22-67.98-29.23-118.12-79.46Q166.5-267 137.29-334.91q-29.21-67.92-29.21-145.19 0-77.34 29.22-145.23 29.23-67.89 79.46-118.03Q267-793.5 334.91-822.71q67.92-29.21 145.19-29.21 77.34 0 145.23 29.22 67.89 29.23 118.03 79.46Q793.5-693 822.71-625.2q29.21 67.8 29.21 145.2 0 77.25-29.22 145.24-29.23 67.98-79.46 118.12Q693-166.5 625.2-137.29q-67.8 29.21-145.2 29.21Zm-.01-55.96q53.36 0 102.57-17.02 49.21-17.02 89.52-48.33-40.31-29.65-88.36-46.34-48.04-16.69-103.65-16.69-55.6 0-104.26 16.15-48.66 16.15-87.89 46.88 40.31 31.31 89.51 48.33t102.56 17.02Zm.01-343.54q30.35 0 51.39-21.03 21.03-21.04 21.03-51.39t-21.03-51.39q-21.04-21.03-51.39-21.03t-51.39 21.03q-21.03 21.04-21.03 51.39t21.03 51.39q21.04 21.03 51.39 21.03Zm0-72.42Zm0 351.77Z"/></svg>
              </LocalizedClientLink>
          </div>
          <div className="items-center">
            <LocalizedClientLink
              href="/store"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              Kaimara
            </LocalizedClientLink>
          </div>
          <div className="items-center h-full">            
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M289.42-105.77q-28.14 0-47.88-19.7-19.73-19.7-19.73-47.84 0-28.15 19.7-47.88 19.7-19.73 47.84-19.73 28.14 0 47.88 19.7 19.73 19.7 19.73 47.84 0 28.14-19.7 47.88-19.7 19.73-47.84 19.73Zm380.42 0q-28.14 0-47.88-19.7-19.73-19.7-19.73-47.84 0-28.15 19.7-47.88 19.7-19.73 47.84-19.73 28.15 0 47.88 19.7 19.73 19.7 19.73 47.84 0 28.14-19.7 47.88-19.7 19.73-47.84 19.73ZM242.23-729.19l101.39 212.31h268.65q3.46 0 6.15-1.74 2.7-1.73 4.62-4.8l107.31-195q2.3-4.23.38-7.5-1.92-3.27-6.54-3.27H242.23Zm-27.05-55.96h544.47q24.35 0 36.52 20.41 12.17 20.42.98 41.51l-124.92 226.5q-9.04 16.81-25.1 26.31-16.06 9.5-34.52 9.5H325.62l-47.12 86.23q-3.08 4.61-.19 10 2.88 5.38 8.65 5.38h450.42v55.96H289.53q-39.07 0-58.67-33.07-19.59-33.07-1.4-66.27l57.08-101.63-143.83-303.26H68.08v-55.96h109.8l37.3 78.39Zm128.44 268.27h275.96-275.96Z"/></svg> (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
