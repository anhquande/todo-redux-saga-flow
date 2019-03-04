import { EMPTY, getIn } from './objectUtils'

describe("ObjectUtils Testcase", ()=>{

  test("test getIn", ()=>{
    const obj = {
      "lineItem": {
        "product": {
          "title": "test",
          "price": 200,
        }
      }
    }
    const product = getIn(obj, ["lineItem","product"])

    const title = getIn(obj, ["lineItem","product", "title"])
    expect(title).toEqual("test")

    const price = getIn(obj, ["lineItem","product", "price"])
    expect(price).toEqual(200)

    const name = getIn(obj, ["lineItem","product", "name"])
    expect(name).toEqual(EMPTY)

  })
})
