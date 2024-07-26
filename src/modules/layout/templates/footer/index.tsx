import { Text } from "@medusajs/ui"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="flex w-full mb-16 justify-center text-ui-fg-muted">
        <Text className="txt-compact-small">
          © Kaimara {new Date().getFullYear()}
        </Text>
      </div>
    </footer>
  )
}
