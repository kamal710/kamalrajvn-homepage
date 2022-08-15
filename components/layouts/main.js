import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={0}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kamal Raj - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="100%" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
export default Main
