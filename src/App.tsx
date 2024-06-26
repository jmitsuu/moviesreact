import './index.css'
import { Route } from './routes/Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient({})
  return (
    <QueryClientProvider client={queryClient}>
      <Route />
    </QueryClientProvider>
  )
}

export default App
