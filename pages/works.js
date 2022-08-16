import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue,
  Box
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item.js'
import thumbBlueBeatz from '../public/images/bluebeatz.png'
import thumbBioLink from '../public/images/kamalraj.jpeg'
import Layout from '../components/layouts/article.js'
// import Section from '../components/section.js'

const Portfolio = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <Layout>
      <Box
        backgroundImage="url('/images/forest.jpg')"
        // backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius={'lg'}
        backgroundSize="cover"
      >
        <Container
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          pr={10}
          pl={10}
          pt={10}
          pb={10}
          borderRadius="lg"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Heading mb={4} variant="page-title">
            Portfolio
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6} mb={20}>
            <Section>
              <WorkGridItem
                id="bluebeatz"
                title="Blue Beatz"
                thumbnail={thumbBlueBeatz}
              >
                A multi-purpose bot(outdated)
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="biolink"
                title="Bio Link"
                thumbnail={thumbBioLink}
              >
                My social links website
              </WorkGridItem>
            </Section>
          </SimpleGrid>
          <p>&copy; Copyright {year} - Kamal Raj V.N. All rights reserved. </p>
        </Container>
      </Box>
    </Layout>
  )
}

export default Portfolio
