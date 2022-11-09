import { useReq } from "./hooks/useReq";

type ReposType = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repos, isReq: loadingRepos, error: reposReqError} = useReq<ReposType[]>(
    "https://api.github.com/users/rianvitor26/repos"
  );

  return (
    <>
      {loadingRepos && <p>Loading...</p>}
      {reposReqError ? <p>Erro de requisição</p> : null}
      <ul>
        {repos?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
