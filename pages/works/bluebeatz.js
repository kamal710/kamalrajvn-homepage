import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blue Beatz">
    <Container mt={10}>
      <Title>Blue Beatz</Title>
      <p>
        A multi-purpose bot with all commands to help you in your discord server
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>
            Website <ExternalLinkIcon mx="2px" />
          </Meta>
          <Link textDecoration={'underline'} href="https://bluebeatzbot.tk">
            https://bluebeatzbot.tk
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
