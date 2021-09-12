import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { useTransition, animated } from 'react-spring';
import Menu from './Menu'

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu
  let menuMask

  if (showMenu) {
    menu =
    <div className="fixed bg-white top-0 left-0 w-4/5 h-full shadow">
      <Menu closeMenu={() => setShowMenu(false)}/>
    </div>
    menuMask =
    <div className="fixed top-0 left-0 w-full h-full bg-black-t-50 "
      onClick={() => setShowMenu(false)}></div>
  }

  // const maskTransitions = useTransition(showMenu, {
  //   from: {position: 'absolute', opacity: 0},
  //   enter: {opacity: 1},
  //   leave: {opacity: 0},
  // })

  // const transitions = useTransition(showMenu, {
  //   from: {opacity: 0, transform: 'translateX(-100%)'},
  //   enter: {opacity: 1, transform: 'translateX(0)'},
  //   leave: {opacity: 0, transform: 'translateX(-100%)'},
  // })


  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShowMenu(!showMenu) }/>
      </span>
      {menuMask}
      {menu}
      {/* {maskTransitions( // for the menu mask
        (styles, item) => item && 
        <animated.div
        style={styles}
        className="fixed top-0 left-0 w-full h-full bg-black-t-50"
        onClick={() => setShowMenu(false)}
        >
        </animated.div>
      )}
      {transitions( // for the menu
        (styles, item) => item && 
        <animated.div
        style={styles}
        className="fixed bg-white top-0 left-0 w-4/5 h-full shadow p-3"
        >
          <Menu closeMenu={() => setShowMenu(false)}/>
        </animated.div>
      )} */}
      {/* {transitions.map(({item, key, props}) =>
        item && <animated.div style={props} key=>✌️</animated.div>
      )} */}
    </nav>
  )

}


export default Navigation;