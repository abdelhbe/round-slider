import React from 'react'

import Navigation from '../../components/common/Navigation'
import { graphClient } from '../../graphql/requests'

/**
 * @author zilahir
 * @function Home
 * */

const Home = () => {
	const query = `
	{
		menus {
			url
			updatedAt
			label
			id
			navigatorPicture {
				fileName
				url
			}
		}
	}
	`

	graphClient.request(query).then(data => data)
	return (
		<div>
			<Navigation />
		</div>
	)
}

export default Home
