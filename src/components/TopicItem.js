import React from 'react'

export default function TopicItem({ topic, setSelectedcriteria }) {
  return (
    <li className="list-group-item" data-testid={`topic-item-${topic?.node?.resourcePath}`}>
      <div className="d-flex justify-content-between">
        <h5><strong>{topic?.node?.resourcePath}  <i className="fa fa-star" aria-hidden="true" />{Number(topic?.node?.stargazers?.totalCount)?.toLocaleString()}
        </strong></h5>
      </div>
      <div>
        {Boolean(!topic?.node?.repositoryTopics?.nodes?.length) && '❌ No topics found '}
        {Boolean(topic?.node?.repositoryTopics?.nodes?.length) && '💻 Repo topics -> '}

        {topic?.node?.repositoryTopics?.nodes?.map((node, j) => (
          <button key={j}
            onClick={() => setSelectedcriteria(node?.topic?.name)}
            type="button" className="btn  btn-outline-primary btn-sm mx-1 my-1">{node?.topic?.name} <span className="badge badge-light badge-pill"><i className="fa fa-star m1-2" aria-hidden="true" />{node?.topic?.stargazerCount}</span></button>
        )) ?? 'no topics'}
      </div>
    </li>
  )
}