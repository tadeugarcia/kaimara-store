import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Página não encontrada</h1>
      <p className="text-small-regular text-ui-fg-base">
        O carrinho que você tentou acessar não existe. Limpe seus cookies e tente novamente.
      </p>
      <InteractiveLink href="/">Ir para a lista de produtos</InteractiveLink>
    </div>
  )
}
