import clsx from 'clsx'
import { Suspense, useEffect, useState } from 'react'
import NearLogo from './assets/logo-white.svg'
import { login, logout } from './near-utils'

type Candidates = Record<string, number>

const api = {
  async get_candidates() {
    // @ts-expect-error
    const res = (await window.contract.get_candidates()) as any[]
    const candidates: Candidates = {}
    for (let x of res) candidates[x[0]] = x[1].votes
    return candidates
  },

  async vote(candidate: string) {
    // @ts-expect-error
    return window.contract.vote({ candidate }).then(
      (d: undefined) => d,
      (d: string) => d
    )
  },

  async add_candidate(candidate: string) {
    // @ts-expect-error
    return window.contract.add_candidate({ candidate }).then(
      (d: undefined) => d,
      (d: string) => d
    )
  },
}

const Login: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to
            <br />
            <a
              href="https://twitter.com/hashtag/NEARvember"
              target="_blank"
              className="text-red-400 rounded px-1 hover:underline"
            >
              #NEARvember
            </a>
            !
          </h1>
          <p className="mb-5 text-2xl">
            This is Challenge 8 app.
            <br />
            You can suggest & vote for the next US President!
          </p>
          <button className="btn btn-primary" onClick={login}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

type AddCandidateProps = { onClick: (name: string) => void }

const AddCandidate: React.FC<AddCandidateProps> = ({ onClick }) => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  const click = async () => {
    setLoading(true)
    await onClick(value)
    setValue('')
    setLoading(false)
  }

  return (
    <div className="form-control">
      <div className="relative">
        <input
          type="text"
          placeholder="Add Candidate"
          className="w-full pr-16 input input-primary input-bordered"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className={clsx(
            'absolute top-0 right-0 rounded-l-none btn btn-primary',
            loading ? 'loading' : ''
          )}
          onClick={click}
        >
          add
        </button>
      </div>
    </div>
  )
}

type LoadingButtonProps = { onClick: () => void }

const LoadingButton: React.FC<LoadingButtonProps> = ({ children, onClick }) => {
  const [laoding, setLoading] = useState(false)

  const click = async () => {
    setLoading(true)
    await onClick()
    setLoading(false)
  }

  return (
    <button
      className={clsx('btn btn-accent btn-sm', laoding ? 'loading' : '')}
      onClick={click}
    >
      {children}
    </button>
  )
}

const Main: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidates>({})

  useEffect(() => {
    api.get_candidates().then(setCandidates)
  }, [])

  const vote = async (candidate: string) => {
    const res = await api.vote(candidate)
    console.log(res)
    api.get_candidates().then(setCandidates)
  }

  const addCandidate = async (candidate: string) => {
    const res = await api.add_candidate(candidate)
    console.log(res)
    api.get_candidates().then(setCandidates)
  }

  const candidatesList = Object.entries(candidates)
    .map((x) => ({
      name: x[0],
      votes: x[1],
    }))
    .sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <div
        className="navbar mb-2 shadow-lg bg-neutral text-neutral-content
    flex justify-between items-center text-lg"
      >
        <div>
          <div className="w-12 h-12 mr-2">
            <NearLogo />
          </div>
          Hi,&nbsp;
          <span className="font-bold">{window.accountId}</span>!
        </div>
        <div className="">
          <button className="btn btn-link text-white ml-2" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-2xl">
          <div className="mb-4 w-full">
            <AddCandidate onClick={addCandidate} />
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Candidate</th>
                <th className="text-center">Votes</th>
                <th className="w-48"></th>
              </tr>
            </thead>
            <tbody>
              {candidatesList.map((x, idx) => (
                <tr key={x.name}>
                  <th>{idx + 1}</th>
                  <td className="text-center">{x.name}</td>
                  <td className="text-center">{x.votes}</td>
                  <td className="flex justify-center w-48">
                    <LoadingButton onClick={() => vote(x.name)}>
                      Vote!
                    </LoadingButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      {!window.walletConnection.isSignedIn() ? <Login /> : <Main />}
    </Suspense>
  )
}

export default App
