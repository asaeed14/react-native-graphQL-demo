/**
 *
 * Asynchronously loads the component for SearchScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
