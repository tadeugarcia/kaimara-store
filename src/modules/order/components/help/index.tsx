import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">Precisa de ajuda?</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <LocalizedClientLink href="/atendimento">
              Atendimento
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/atendimento">
              Prazo de Entrega
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/atendimento">
              Devoluções e Trocas
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/privacy-policy">
              Política de Privacidade
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/terms-of-use">
              Termos de Uso
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
