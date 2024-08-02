import { Text } from "@medusajs/ui"

export default async function Footer() {
  return (
    <footer className="w-full mt-8 py-4 bg-slate-100">
      <Text className="txt-compact-small text-center text-ui-fg-muted">
        © Kaimara {new Date().getFullYear()}
      </Text>
    </footer>
  )
}
