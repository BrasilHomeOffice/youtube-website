import { gql, useQuery } from '@apollo/client';
import PoolWidgetLayout from './PoolWidget.layout'

const POOL_BY_SLUG = gql`
  query Pool($slug: String!) {
    poolBySlug(slug: $slug) {
      id
      slug
      title
      description
      poolStatus
    }
  }
`;

export default function PoolWidget({ poolSlug }) {

  const { loading, error, data } = useQuery(POOL_BY_SLUG, {
    variables: {
      slug: poolSlug,
    },
  })

  return (
    <PoolWidgetLayout
      loading={loading}
      error={error}
      pool={data && data.poolBySlug}
    />
  )
}
