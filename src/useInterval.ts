import { useEffect } from 'react'

const useInterval = (callback: () => void, ms: number) => {
  useEffect(() => {
    const iv = setInterval(() => {
      callback()
    }, ms)
    return () => {
      clearInterval(iv)
    }
  }, [ms])
}

export default useInterval
