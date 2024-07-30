"use client"

import { Region } from "@medusajs/medusa"
import { Plus } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "@modules/checkout/components/country-select"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { addCustomerShippingAddress } from "@modules/account/actions"

const AddAddress = ({ region }: { region: Region }) => {
  const [successState, setSuccessState] = useState(false)
  const { state, open, close: closeModal } = useToggleState(false)

  const [formState, formAction] = useFormState(addCustomerShippingAddress, {
    success: false,
    error: null,
  })

  const close = () => {
    setSuccessState(false)
    closeModal()
  }

  useEffect(() => {
    if (successState) {
      close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successState])

  useEffect(() => {
    if (formState.success) {
      setSuccessState(true)
    }
  }, [formState])

  return (
    <>
      <button
        className="border border-ui-border-base rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between"
        onClick={open}
        data-testid="add-address-button"
      >
        <span className="text-base-semi">Novo endereço Brasil</span>
        <Plus />
      </button>

      <Modal isOpen={state} close={close} data-testid="add-address-modal">
        <Modal.Title>
          <Heading className="mb-2">Adicionar endereço</Heading>
        </Modal.Title>
        <form action={formAction}>
          <Modal.Body>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Nome"
                name="first_name"
                autoComplete="given-name"
                data-testid="first-name-input"
              />
              <Input
                label="Sobrenome"
                name="last_name"
                autoComplete="family-name"
                data-testid="last-name-input"
              />
              <Input
                label="Telefone"
                name="phone" 
                type="tel"
                autoComplete="tel" 
                data-testid="phone-input"
              />
              <Input
                label="Endereço"
                name="address_1"
                required
                autoComplete="address-line1"
                data-testid="address-1-input"
              />
              <Input
                label="Apartamento, suite, etc."
                name="address_2"
                autoComplete="address-line2"
                data-testid="address-2-input"
              />
              <Input
                label="CEP"
                name="postal_code"
                type="tel"
                required
                autoComplete="postal-code"
                data-testid="postal-code-input"
              />
              <Input
                label="Cidade"
                name="city"
                required
                autoComplete="locality"
                data-testid="city-input"
              />
              <Input
                label="Estado"
                name="province"
                required
                autoComplete="address-level1"
                data-testid="state-input"
              />
              <CountrySelect
                label="País"
                region={region}
                name="country_code"
                required
                autoComplete="country"
                data-testid="country-select"
              />
              <Input
                label="Empresa"
                name="company"
                autoComplete="organization"
                data-testid="company-input"
              />
            </div>
            {formState.error && (
              <div className="text-rose-500 text-small-regular py-2" data-testid="address-error">
                {formState.error}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="flex gap-3 mt-6">
              <Button
                type="reset"
                variant="secondary"
                onClick={close}
                className="h-10"
                data-testid="cancel-button"
              >
                Cancelar
              </Button>
              <SubmitButton data-testid="save-button">Salvar</SubmitButton>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddAddress
