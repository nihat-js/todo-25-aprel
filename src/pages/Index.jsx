import { useEffect, useState } from 'react'
import axios from 'axios'
import completedSvg from "../../src/assets/completed.svg"
import pendingSvg from "../../src/assets/pending.svg"
import "./Index.scss"

import { useNavigate } from 'react-router-dom'

export default function Index() {
  const [input, setInput] = useState("")
  const [status,setStatus] = useState("pending")
  const [list, setList] = useState([])
  const URL = "https://jsonplaceholder.typicode.com/todos/"
  const navigate = useNavigate()
  async function getAll() {
    try {
      let result = await axios.get(URL)
      setList(result.data)
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
        <h2 className='title'>Todo App  </h2>
        <form action="">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Write Title  ' /> <br />
          <input type="radio" name="status" id="" value="pending" onChange={()=> setStatus("pending")  }  />  <span className='pending'>Pending  </span> 
          <input type="radio" name="status" id="" value="completed" onChange={()=> setStatus("completed")  } /> Completed <br />
          <button onClick={(e) => { e.preventDefault(); if (input.value != "") { setList([...list, { id: 100, title: input, completed: status }]) } }} > Add </button>
        </form>
        {list.map((i, j) => {
          return <div className='item flex justify-between gap-12 '           >
            <div className="status" onClick={() => setList(list.map(m => { if (m.id == i.id) { m.completed = !m.completed } return m }))} >
              <img src={i.completed === true ? completedSvg : pendingSvg} alt="" width="24px" height="24px" />
            </div>
            <div className="title">
              {
                (() => {
                  let el = <h3 onClick={() => { console.log("see more"); navigate("todo/" + i.id) }} >   {i.title} </h3>
                  if (i.completed) {
                    return <del> {el} </del>
                  } else {
                    return el
                  }

                })()
              }
            </div>
            <div className="user">
              <h3 className="title"> User {i.userId} </h3>
            </div>
          </div>
        })}
      </div>

    </main>
  )
}

