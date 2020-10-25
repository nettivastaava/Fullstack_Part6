import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  const action = {
    type: 'GOOD'
  }

  const action2 = {
    type: 'OK'
  }

  const action3 = {
    type: 'BAD'
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('good, ok and bad work correctly', () => {
    const state = initialState
    const state2 = {
      good: 1,
      ok: 1,
      bad: 1
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    const newState2 = counterReducer(newState, action2)
    const newState3 = counterReducer(newState2, action3)
    expect(newState3).toEqual(state2)
  })

  test('state reset works', () => {
    const state = {
      good: 1,
      ok: 0,
      bad: 2
    }
    
    const zero = {
      type: 'ZERO'
    }

    deepFreeze(state)
    const newState = counterReducer(state, zero)
    expect(newState).toEqual(initialState)
  })

})