'use client'

import { useLayoutEffect, useState } from 'react'

const defaultTheme = 'Dark'

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(defaultTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return { theme, setTheme }
}
