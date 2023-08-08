import { LinkToRouteWrapper } from './link-to-route.styles.jsx';

const LinkToRoute = ({ to }) => {
  return <LinkToRouteWrapper to={to}>{to}</LinkToRouteWrapper>;
};

export default LinkToRoute;
