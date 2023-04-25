import { useEffect, useState } from 'react'
import axios from 'axios'
import completedSvg from "../src/assets/completed.svg"
import pendingSvg from "../src/assets/pending.svg"
import "../src/app.scss"

function App() {

  const [list, setList] = useState([])
  const URL = "https://jsonplaceholder.typicode.com/todos/"

  async function getAll() {
    try {
      let result = await axios.get(URL)
      setList(result.data.splice(0, 10))
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getAll()
  }, [])

  return (
    <main className='app-page'>
      <div className="list">
        {list.map((i, j) => {
          return <div className='item flex justify-between gap-12 '>
            <div className="status">
              <img src={i.completed === true ? completedSvg : pendingSvg} alt="" width="24px" height="24px" />
            </div>
            <div className="title">
              {
                i.completed === true ? <del>
                  <h3> {i.title} </h3>
                </del> :
                  <h3> {i.title} </h3>
              }
            </div>
            <div className="user">
              <h3 className="title"> User {i.userID} </h3>
            </div>
          </div>
        })}
      </div>

    </main>
  )
}

export default App
