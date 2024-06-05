'use client'
import createCache from '@emotion/cache'
import { ChakraProvider } from '@chakra-ui/react'
import rtl from 'stylis-plugin-rtl'
import theme from '@/themes/theme'

const options = {
    rtl: { key: 'css-ar', stylisPlugins: [rtl] },
    ltr: { key: 'css-en' },
}


export default function ChakraBox({ children }: { children: React.ReactNode }) {
    const cache = createCache(options['rtl'])
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}