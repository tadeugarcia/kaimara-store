import { Text } from "@medusajs/ui"

export default async function Footer() {
  return (
    <footer className="w-full py-8 bg-slate-100">
      <Text className="txt-compact-small">
        © Kaimara {new Date().getFullYear()}
      </Text>
    </footer>
  )
}
