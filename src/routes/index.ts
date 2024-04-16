import { RouteObject } from 'react-router-dom';
import { AppRoutes } from './appRoutes';

type RouteType = RouteObject & {
  path: string;
  element: JSX.Element | undefined;
};

const CombinedRoutes: Array<RouteType> = [...AppRoutes];

export default CombinedRoutes;
