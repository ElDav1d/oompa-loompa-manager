import { PulseLoader as PulseLoader } from 'react-spinners';
import { COLOR_PRIMARY } from '../../utils/constants';

export interface ILoaderProps {
  /**
   * The label for loading state accessibility
   * @param {string} loadingLabel
   */
  loadingLabel: string;
}

const Loader = ({ loadingLabel }: ILoaderProps) => (
  <PulseLoader
    color={COLOR_PRIMARY}
    className='mx-auto my-8'
    role='alert'
    aria-label={loadingLabel}
    aria-busy='true'
    aria-live='polite'
  />
);

export default Loader;
