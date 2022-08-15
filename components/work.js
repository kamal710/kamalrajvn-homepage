import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>
        <ChevronLeftIcon />{' '}
      </Link>
    </NextLink>
    {/* <span href="/works">
      {' '}
      <ChevronLeftIcon />{' '}
    </span> */}
    <Heading display="inline-block" as="h2" fontSize={30} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="blue" mr={2}>
    {children}
  </Badge>
)
