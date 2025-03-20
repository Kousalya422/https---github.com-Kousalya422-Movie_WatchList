import { MovieInput } from './components/movieInput'
import { MovieList } from './components/movieList'

function App() {
  return (
    <div className="bg-white grid py-4 h-screen">
    <div className='bg-transparent shadow-lg place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px]'>
    <MovieInput/>
      <MovieList/>
    </div>
    </div>
  )
}

export default App
