import { Dna } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';
export const Loader = () => (
  <LoaderWraper>
    <Dna
      visible={true}
      height="580"
      width="580"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </LoaderWraper>
);
