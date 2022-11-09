import { useEffect, useState } from 'react'

type ReposType = {
  full_name: string;
  description: string;
}

function App() {
  const [respos, setRepos] = useState<ReposType[]>([])

  useEffect(() => {
    fetch(`https://api.github.com/users/rianvitor26/repos`)
      .then(res => res.json())
      .then(data => setRepos(data))
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
