"use client"

import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  variant = "primary",
  'data-testid': dataTestId
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | null
  className?: string
  'data-testid'?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      size="large"
      className="btn-primary"
      type="submit"
      isLoading={pending}
      variant={variant}
      data-testid={dataTestId}
    >
      {children}
    </Button>
  )
}
