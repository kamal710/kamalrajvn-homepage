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
  <Layout title="BioLink">
    <Container mt={10}>
      <Title>Biolink</Title>
      <p>All my social links and redirects in one webpage</p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>
            Website <ExternalLinkIcon mx="2px" />
          </Meta>
          <Link textDecoration={'underline'} href="https://kamal710.github.io">
            https://kamal710.github.io
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
//   export { getServerSideProps } from '../../components/chakra'
