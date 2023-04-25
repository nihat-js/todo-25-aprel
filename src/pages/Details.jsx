import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import completedSvg from "../../src/assets/completed.svg"
import pendingSvg from "../../src/assets/pending.svg"
import "./Details.scss"
export default function Details() {
  const { id } = useParams()
  const URL = "https://jsonplaceholder.typicode.com/todos/" + id

  const [item, setItem] = useState({})

  async function getOne() {
    try {
      let result = await axios.get(URL)
      setItem(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getOne()
  }, [])

  return (
    <div className="details-page">


      <section className="start">
        <Link to="/"> <h3 className="back"   > &lt; Back to All  </h3>   </Link>
        <div className="item">
          <div className="status" onClick={() => setItem({ ...item, completed: !item.completed })}>
            <img src={item.completed === true ? completedSvg : pendingSvg} alt="" width="24px" height="24px" />
          </div>
          <div className="title">
            {
              item.completed === true ? <del>
                <h3> {item.title} </h3>
              </del> :
                <h3> {item.title} </h3>
            }
          </div>
          <div className="user">
            <h3 className="title"> User {item.userId} </h3>
          </div>
        </div>



      </section>


    </div>
  )
}

