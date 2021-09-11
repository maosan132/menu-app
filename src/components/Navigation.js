import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring'

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  // let menu
  // let menuMask

  // if (showMenu) {
  //   menu =
  //   <div className="fixed bg-white top-0 left-0 w-4/5 h-full shadow">
  //     menu here
  //   </div>
  //   menuMask =
  //   <div className="fixed top-0 left-0 w-full h-full bg-black-t-50 z-"
  //     onClick={() => setShowMenu(false)}></div>
  // }

  const transitions = useTransition(showMenu, {
    from: {position: 'absolute', opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  })
  

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShowMenu(!showMenu) }/>
      </span>
      {/* {menuMask}
      {menu} */}
      {transitions(
        (styles, item) => item && <animated.div style={styles}>✌️</animated.div>
      )}
      {/* {transitions.map(({item, key, props}) =>
        item && <animated.div style={props} key=>✌️</animated.div>
      )} */}
    </nav>
  )

}


export default Navigation;