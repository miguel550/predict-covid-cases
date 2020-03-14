import makeDb from './makeDb'

describe('db', () => {
  it('fetch data',  async () => {
    expect.assertions(1);
    const db = makeDb()
    const data = await db.fetchData()
    // console.log(data)
    expect(data).toBeTruthy()
  })
  it('cache data',  async () => {
    expect.assertions(2);
    const db = makeDb()
    const data = await db.fetchData()
    expect(data).toBeTruthy()
    const data2 = await db.fetchData()
    expect(data2).toBeTruthy()
  })
})