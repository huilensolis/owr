import { ReactNode } from 'react'

const defaultStyles =
  'border-2 border-transparent font-bold rounded-xl hover:brightness-75 transition-all delay-75 hover:scale-105 disabled:brightness-[65%] shadow-xl dark:shadow-none'

interface ColorInput {
  children: ReactNode
  disabled?: boolean
  color: 'green' | 'blue' | 'white' | 'red'
}

interface Btn {
  children: ReactNode
  disabled: boolean
}

export function PrimaryBtn({ children, color, disabled = false }: ColorInput) {
  const btnOptions = {
    green: <GreenBtn disabled={disabled}>{children}</GreenBtn>,
    blue: <BlueBtn disabled={disabled}>{children}</BlueBtn>,
    white: <WhiteBtn disabled={disabled}>{children}</WhiteBtn>,
    red: <RedBtn disabled={disabled}>{children}</RedBtn>
  }

  return btnOptions[color]
}

function GreenBtn({ children, disabled }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-green w-full py-3 text-cm-black`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
function BlueBtn({ children, disabled }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-dark-blue  w-full py-3 text-cm-white`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
function WhiteBtn({ children, disabled }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-gray text-cm-white dark:bg-white w-full py-3 dark:text-cm-black dark:hover:bg-cm-white`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
function RedBtn({ children, disabled }: Btn) {
  return (
    <button
      className={`${defaultStyles} bg-cm-red  w-full py-3 text-cm-white`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
