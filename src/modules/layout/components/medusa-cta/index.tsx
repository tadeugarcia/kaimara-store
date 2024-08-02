import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  return (
    <Text className="flex w-full my-4 justify-center text-ui-fg-muted">
      © Kaimara {new Date().getFullYear()}
    </Text>
  )
}

export default MedusaCTA
