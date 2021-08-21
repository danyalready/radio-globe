import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { getStored } from 'utils/store';
import { IMMORTAL_FAVORITES } from 'utils/constants';
import { getFavorites } from 'services/service';
import { useInterfaceContext, setLoading } from 'services/interface';
import { Content } from 'components';

function FavoritesPage() {
  const [, interfaceDispatch] = useInterfaceContext();
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const storedFavorites = getStored(IMMORTAL_FAVORITES);
    if (!storedFavorites) return;
    setLoading(interfaceDispatch, true);
    getFavorites(storedFavorites).then(res => {
      setFavorites(res);
      setLoading(interfaceDispatch, false);
    });
  }, [interfaceDispatch]);
  
  return (
    <Box color="white" padding="1rem">
      <Content
        content={{
          title: 'Favorites',
          type: 'list',
          items: favorites,
        }} />
      {!favorites.length && <Text>Here will be appeared stations you've liked</Text>}
    </Box>
  );
}

export default FavoritesPage;
