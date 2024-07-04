import { PulseLoader as PulseLoader } from 'react-spinners';

export interface ILoaderProps {
  /**
   * The label for loading state accessibility
   * @param {string} loadingLabel
   */
  loadingLabel: string;
}

const Loader = ({ loadingLabel }: ILoaderProps) => (
  <PulseLoader
    color={'#25B7B6'}
    className='mx-auto my-8'
    role='alert'
    aria-label={loadingLabel}
    aria-busy='true'
    aria-live='polite'
  />
);

export default Loader;
