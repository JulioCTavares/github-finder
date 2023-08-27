import { useState } from "react"
import { Search, User, Error, Loader } from "../components"
import { UserProps } from "../types"


const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)
  const [removeLoader, setRemoveLoader] = useState(true)

  const loadUser = async (username: string) => {
    setError(false)
    setRemoveLoader(false)
    setTimeout( async () => {
      const res = await fetch(`https://api.github.com/users/${username}`)

    if (res.status === 404 ) {
      setError(true);
    }

    const data = await res.json();


    const { avatar_url, login, location, following, followers} = data;

    const userData: UserProps = {
      avatar_url, login, location, following, followers
    }

    setRemoveLoader(true)
    setUser(userData);
    }, 3000)

  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {!removeLoader && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
}

export default Home