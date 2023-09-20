import { ReactNode } from 'react'

const defaultStyles =
  'border-2 border-b-8 sm:w-max w-full px-10 py-2 border-transparent font-bold rounded-xl hover:brightness-105 transition-all delay-75 disabled:brightness-[65%] text-sm'

interface ColorInput {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  color: 'green' | 'blue' | 'white' | 'red'
}

interface Btn {
  children: ReactNode
  disabled: boolean
  onClick?: () => void
}

export function PrimaryBtn({
  children,
  color,
  disabled = false,
  onClick
}: ColorInput) {
  const btnOptions = {
    green: (
      <GreenBtn disabled={disabled} onClick={onClick}>
        {children}
      </GreenBtn>
    ),
    blue: (
      <BlueBtn disabled={disabled} onClick={onClick}>
        {children}
      </BlueBtn>
    ),
    white: (
      <WhiteBtn disabled={disabled} onClick={onClick}>
        {children}
      </WhiteBtn>
    ),
    red: (
      <RedBtn disabled={disabled} onClick={onClick}>
        {children}
      </RedBtn>
    )
  }

  return btnOptions[color]
}

function GreenBtn({ children, disabled, onClick }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-green border-cm-dark-green text-cm-white dark:text-cm-black`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
function BlueBtn({ children, disabled, onClick }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-dark-blue text-cm-white`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
function WhiteBtn({ children, disabled, onClick }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-gray border-2 border-b-8 border-cm-dark-white dark:border-cm-light-gray text-cm-text-gray dark:bg-white dark:text-cm-black dark:hover:bg-cm-white`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
function RedBtn({ children, disabled, onClick }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-red text-cm-white`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
