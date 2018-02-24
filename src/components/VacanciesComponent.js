import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'

import RubricList from '../containers/RubricListContainer'
import WordsList from '../containers/WordsListContainer'
import TableButton from '../containers/TableButtonContainer'
import { FetchData, LoadMore } from '../actions'


class Vacancy extends Component {

  componentDidMount() {
    this.props.FetchData()
  }

  render() {
    const { initialized, switchTable: { switchTable }, loading, data: { offset, count, categories, vacancies }} = this.props.store
    if (loading && !initialized) return <Loader active />
    else if (!categories && !vacancies) return <span />
    return (
      <div>
        <Dimmer active={loading} inverted><Loader /></Dimmer>
        <TableButton
          oneTable={this.props.switchTableOne}
          twoTable={this.props.switchTableTwo}
          active={switchTable}
        />
        {!switchTable ?
          <RubricList
            rubric={categories}
          /> :
          <WordsList
            count={count}
            words={vacancies}
            loadword={this.props.LoadMore}
            offset={offset}
          />}
      </div>
    )
  }
}

export default connect(
  state => ({
    store: state,
    offset:state.data.offset
  }),
  dispatch => ({
    FetchData: () => {
      dispatch(FetchData())
    },
    LoadMore: async () => {
      dispatch(LoadMore())
    },
    switchTableOne: () => {
      dispatch({ type: "SWITCH_TABLE", switchTable: false })
    },
    switchTableTwo: () => {
      dispatch({ type: "SWITCH_TABLE", switchTable: true })
    },
  })
)(Vacancy)