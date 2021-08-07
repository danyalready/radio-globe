import { Link } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import { ContentItem } from 'types';

type ContentProps = {
  content: ContentItem;
}

function Content({ content }: ContentProps) {
  function getContent() {
    return content.items.map((item: any, index: number) => {
      let { subtitle, href: path } = item;
      if (item.page) {
        path = item.page.url;
        subtitle = item.page.subtitle;
      }
      
      return (
        <Link key={index} to={path}>
          <Box m="0 -1rem" p=".3rem 1rem" minH="3.5rem" _hover={{ bg: "#000011" }}>
            <Heading as="h4" size="md">{item.title}</Heading>
            <Text>{subtitle}</Text>
          </Box>
        </Link>
      );
    });
  }

  return (
    <Box mb="3rem">
      <Heading as="h3" size="2xl" mb="1rem">{content.title}</Heading>
      {getContent()}
    </Box>
  );
}

export default Content;