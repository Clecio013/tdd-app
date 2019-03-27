jest.mock('@/api')
import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import userFixture from './fixtures/user'

describe('store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('searches for user', async () => {
    const expetedUser = 'kuroski'

    await actions.SEARCH_USER({ commit }, { username: expetedUser })
    await flushPromises()

    expect(api.searchUser).toHaveBeenCalledWith(expetedUser)
    expect(commit).toHaveBeenCalledWith('SET_USER', userFixture)
  })
})