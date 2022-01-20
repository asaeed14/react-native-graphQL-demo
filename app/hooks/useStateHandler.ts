/**
 *
 * useStateHandler
 *
 */
import get from 'lodash/get';

interface useStateHandlerProps {
  state: any;
  stateIdentifier?: string;
}

const useStateHandler = ({
  state = {},
  stateIdentifier = 'data.length',
}: useStateHandlerProps) => get(state, stateIdentifier, 0) && !state.fetching;

export default useStateHandler;
