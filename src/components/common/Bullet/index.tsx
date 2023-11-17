import * as React from 'react'
import classnames from 'classnames'

import styles from './Bullet.module.scss'
import { act } from 'react-dom/test-utils';

type Slide = {
  key: number,
  image: string,
  onClick: () => void,
}

interface IBulletProps {
  dots: Slide[]
  active: number
  offsetRadius: number
}

const Bullet: React.FunctionComponent<IBulletProps> = ({dots, active, offsetRadius}) => {
  // console.debug('active', offsetRadius, active)

  function countActive(i:number) {
    const offsetFromCenter = i - offsetRadius;
    const totalPresentables = 2 * offsetRadius + 1;
    const distanceFactor = 1 - Math.abs(offsetFromCenter / (offsetRadius + 1));
    let res = 0
    // console.debug('offsetRadius', offsetRadius)
    // console.debug('active', active)
    res = offsetRadius - active
    if (res < 0) {
      res = totalPresentables - offsetRadius + 1
    }
    return res
  }
  return (
    <>
      {
        dots.map((curr, index) => (
          <li
            key={curr.key}
            className={classnames(
              styles.bullet,
              index === countActive(index) ? styles.active : null,
            )}
          >
            <span
              onClick={curr.onClick}
            />
          </li>
        ))
      }
    </>
  )
};

export default Bullet;
