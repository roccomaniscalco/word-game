import { useLocalStorage } from "@mantine/hooks"
import { useEffect } from "react"

const useHasVisited = () => {
  const [hasVisited, setHasVisited] = useLocalStorage({
    key: "hasVisited",
    defaultValue: false,
  })

  useEffect(() => {
    setHasVisited(true)
  }, [setHasVisited])

  return hasVisited
}

export default useHasVisited
