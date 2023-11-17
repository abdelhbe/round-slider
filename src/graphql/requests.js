import { GraphQLClient } from 'graphql-request'

import { headers } from '../utils/consts'

export const graphClient = new GraphQLClient(
	process.env.REACT_APP_GRAPHQL_API, { headers: { ...headers }},
)
