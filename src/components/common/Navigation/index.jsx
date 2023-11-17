import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { config } from 'react-spring'
import styled from 'styled-components'

import Carousel from '../../../Nav/Carousel/index.tsx'
import styles from './Navigation.module.scss'
import { useWindowSize } from '../../../utils/hooks/useWindowSize'
// import Bullet from '../Bullet/index.tsx'

/**
 * @author zilahir
 * @function Navigator
 * */

const SliderContainer = styled.div`
	width: ${props => props.width};
	height: ${props => props.height}px;
	margin: 0 auto;
`

const Navigator = () => {
	const [currSlide, setCurrSlide] = useState(0)
	const history = useHistory()
	/**
	 * @param {number} e the index of the clicked carousel element
	 */
	function handleClick(e) {
		if (e !== currSlide) {
			setCurrSlide(e)
		} else {
			history.push('/about')
		}
	}
	const slides = [
		{ key: 1, image: 'https://picsum.photos/800/801/?random' },
		{ key: 2, image: 'https://picsum.photos/800/801/?random' },
		{ key: 3, image: 'https://picsum.photos/800/801/?random' },
		{ key: 4, image: 'https://picsum.photos/800/801/?random' },
		{ key: 5, image: 'https://picsum.photos/800/801/?random' },
	].map((slide, index) => ({
		...slide, onClick: () => handleClick(index),
	}))
	const windowSize = useWindowSize()
	return (
		<div className={styles.navigationRoot}>
			<SliderContainer
				width="80%"
				height={windowSize.height * 0.5}
			>
				<Carousel
					slides={slides}
					animationConfig={config.gentle}
					goToSlide={currSlide}
					showNavigation
				/>
			</SliderContainer>
		</div>
	)
}

export default Navigator
