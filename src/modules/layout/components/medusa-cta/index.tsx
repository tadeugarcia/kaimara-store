import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex w-full my-4 justify-center text-ui-fg-muted">
      © Kaimara {new Date().getFullYear()}
    </Text>
  )
}

export default MedusaCTA
