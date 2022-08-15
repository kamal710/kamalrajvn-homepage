import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/section.js'
import { BioSection, BioYear } from '../components/bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const date = new Date()
const year = date.getFullYear()

const Page = () => {
  return (
    <Box
      backgroundImage="url('/images/forest.jpg')"
      // backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderRadius={'lg'}
      backgroundSize="cover"
      w="100%"
      h="100%"
    >
      <Container>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
          marginBottom={4}
          pt={5}
        >
          <Box
            borderColor="blue.500"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/kamalraj.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>

        <Box
          borderRadius="xl"
          p={3}
          mb={3}
          align="center"
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a full-stack developer and a UI/UX designer
        </Box>

        <Box
          display={{ md: 'flex' }}
          p={3}
          borderRadius="xl"
          mb={3}
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kamal Raj
            </Heading>
            <p>Creative Person (Full-stack developer / Designer / Artist)</p>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Box
            borderRadius="xl"
            p={3}
            mb={4}
            align="left"
            bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <Heading as="h3" mb={2}>
              Biography
            </Heading>
            <BioSection>
              <BioYear textDecoration="underline">16/3/2021</BioYear>Started
              Javascript
            </BioSection>
            <BioSection>
              <BioYear>24/6/2021</BioYear>Discord bots{' '}
            </BioSection>
            <BioSection>
              <BioYear>12/8/2021</BioYear>designing
            </BioSection>
            <BioSection>
              <BioYear>4/12/2021</BioYear>Completed Javascript. Started Python
            </BioSection>
            <BioSection>
              <BioYear>10/1/2022</BioYear>Frameworks
            </BioSection>
            <BioSection pb={1}>
              <BioYear>21/2/2022</BioYear>Started Learning Java
            </BioSection>
            <p>
              &copy; Copyright {year} - Kamal Raj V.N. All rights reserved.{' '}
            </p>
          </Box>
        </Section>
      </Container>
    </Box>
  )
}

export default Page
