import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between gap-x-4">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Já possui uma conta?
        </Heading>
        <Text className="txt-xlarge-plus text-ui-fg-subtle mb-2">
          Entre para acessar seu endereço de entrega e informações financeiras.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10" data-testid="sign-in-button">
            Entrar
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
