import {useAuth} from './contexts/AuthContext'
import Header from './components/Header'

export default function App() {
  const {isLoggedIn} = useAuth()

  return (
    <div className='App'>
      <Header />

    </div>
  )
}

