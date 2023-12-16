import { Hourglass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Hourglass
        visible={true}
        height="150"
        width="150"
        ariaLabel="hourglass-loading"
        wrapperStyle={{ position: 'absolute', left: '60%' }}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </>
  );
};

export default Loader;
