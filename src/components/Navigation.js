import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
  <nav>
    <span className="text-xl">
      <FontAwesomeIcon icon={faBars} />
    </span>
  </nav>
)

export default Navigation;