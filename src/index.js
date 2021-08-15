import * as React from 'react'

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState()
  const [error, setError] = React.useState()

  React.useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setData(data)
      setIsLoading(false)
    }).catch(e => {
      setError(e)
      setIsLoading(false)
    })
  }, [url])

  return [data, isLoading, error]
}
