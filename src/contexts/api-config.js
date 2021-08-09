import { createContext, useContext } from 'react'
import { useConfiguration } from '../utils/configurations'

const ApiConfigContext = createContext()
ApiConfigContext.displayName = 'ApiConfigContext'

function ApiConfigProvider(props) {
  const { isLoading, isError, data, isSuccess } = useConfiguration()

  if (isLoading) {
    return 'Loading...'
  }

  if (isError) {
    return 'Cannot start app without fetching configurations'
  }

  if (isSuccess) {
    return <ApiConfigContext.Provider value={data} {...props} />
  }
}

function useApiConfig() {
  const context = useContext(ApiConfigContext)
  if (!context) {
    throw new Error(
      'useApiConfig must be used inside a <ApiConfigProvider /> component!',
    )
  }
  return context
}

export { ApiConfigProvider, useApiConfig }
