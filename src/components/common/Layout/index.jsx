import React from 'react'

import styles from './Layout.module.scss'

/**
 * @author zilahir
 * @function Layout
 * */

const Layout = ({
	children,
}) => (
	<div className={styles.layout}>
		{children && children}
	</div>
)

export default Layout
