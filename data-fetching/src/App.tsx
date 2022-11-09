import { useEffect, useState } from 'react'
import axios from 'axios'

type ReposType = {
  full_name: string;
  description: string;
}

function App() {
  const [respos, setRepos] = useState<ReposType[]>([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/rianvitor26/repos`)
      .then(response => setRepos(response.data))
  }, [])

  return (
    <>
      <ul>
        {respos.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
        </ul>
    </>   
  )
}

export default App
