import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './TopMenuItem.module.scss'

/**
 * @author zilahir
 * @function TopMenuItem
 * */

const TopMenuItem = props => {
	const { target, label } = props

	const history = useHistory()
	return (
		<li className={styles.singleMenuItem}>
			<button
				onClick={() => history.push(`/${target}`)}
				type="button"
			>
				{label}
			</button>
		</li>
	)
}

TopMenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired,
}

export default TopMenuItem
