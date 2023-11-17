import * as React from 'react';

import logo from '../../../assets/img/logo.svg'
import styles from './Logo.module.scss'

interface ILogoProps {
}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
    <div className={styles.logoContainer}>
      <img
        alt="difference"
        src={logo}
      />
    </div>
  );
};

export default Logo;
