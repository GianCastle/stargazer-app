import React from 'react'

export default function TopicSearch({ state, onCriteriaChangeHandler }) {
  return (
    <div className="container-fluid my-5" data-testid="topic-search">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor='topic' className='h5'>Write you favorite topic below. <strong>Hint: ⚛️</strong></label>
          <input
            data-testid="topic-search__input"
            name='topic'
            value={state}
            onChange={onCriteriaChangeHandler}
            className="form-control" type="search your topic" placeholder="Search your topic" aria-label="Search github topic" />
        </div>
      </div>
    </div>
  )
}
