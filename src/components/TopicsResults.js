import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react'
import TopicItem from './TopicItem';
import { GET_GITHUB_TOPICS } from '../graphql/queries';

export default function TopicsResults(props) {

  const { criteria, setSelectedcriteria } = props;
  const searchQuery = useMemo(() => `${criteria} stars:>1000`, [criteria])
  const { loading, error, data } = useQuery(GET_GITHUB_TOPICS, { variables: { search: searchQuery } });

  const topics = data?.search?.edges?.map((edge) => edge) ?? [];

  if (error) return (
    <div className='topic-item--error' data-testid="topic-item-error">
      <i className="fa-solid  fa-x"></i>
      <h6>There was a error while loading your topics!</h6>
      <code>
        {JSON.stringify(error)}
      </code>
    </div>
  )

  if (loading) return (
    <div className='topic-item--loading' data-testid="topic-item-loading">
      <i className="fa fa-spinner fa-spin mr-4" />
      <span>Looking for your favorite topic!</span>
    </div>
  )

  return (
    <>
      {!Boolean(topics).length && (
        <div className='topic-item--empty ' data-testid="topic-item-empty">
          <i className="fa-solid fa-x"></i>
          <span>No topics found!</span>
        </div>

      )}
      {!loading && !error && topics.map((topic) => (
        <ul className="list-group topic-item" key={topic?.node?.resourcePath}>
          <TopicItem topic={topic} setSelectedcriteria={setSelectedcriteria} />
        </ul>
      ))}
    </>
  )
}
