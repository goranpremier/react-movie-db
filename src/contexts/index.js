import { QueryClient, QueryClientProvider } from 'react-query'
import { ApiConfigProvider } from './api-config'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import React from 'react'

const queryClient = new QueryClient()

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiConfigProvider>
        <Router>{children}</Router>
      </ApiConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export { AppProviders }
