import { Spinner } from '@chakra-ui/react';
import './loadingPage.css';

const LoadingPage = () => {
  return (
    <div className='loading-wrapper'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='pink.500'
        size='xl'
      />
      <h2 className='loading-h2'>
        Now Loading...
      </h2>
    </div>
  )
}

export default LoadingPage