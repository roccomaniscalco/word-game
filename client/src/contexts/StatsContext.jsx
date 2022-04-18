import { useWindowEvent } from "@mantine/hooks"
import { node } from "prop-types"
import { createContext, useContext, useEffect, useReducer } from "react"

const initialStats = {
  roundsWon: 0,
  roundsLost: 0,
  currentStreak: 0,
  highestStreak: 0,
  guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
}

const initStats = (initialStats) =>
  JSON.parse(localStorage.getItem("stats")) || initialStats

const statsReducer = (state, action) => {
  switch (action.type) {
    case "win":
      return {
        ...state,
        roundsWon: state.roundsWon + 1,
        currentStreak: state.currentStreak + 1,
        highestStreak:
          state.currentStreak + 1 > state.highestStreak
            ? state.currentStreak + 1
            : state.highestStreak,
        guessDistribution: {
          ...state.guessDistribution,
          [action.guess]: state.guessDistribution[action.guess] + 1,
        },
      }
    case "lose":
      return { ...state, roundsLost: state.roundsLost + 1, currentStreak: 0 }
    case "reset":
      return initStats(action.stats)
    default:
      throw new Error()
  }
}

const StatsContext = createContext({
  stats: initialStats,
  dispatch: () => {},
})

export const StatsProvider = ({ children }) => {
  const [stats, dispatch] = useReducer(statsReducer, initialStats, initStats)

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats))
  }, [stats])

  useWindowEvent("storage", (event) => {
    if (event.storageArea === window.localStorage && event.key === "stats") {
      dispatch({ type: "reset", stats: event.newValue ?? undefined })
    }
  })

  return (
    <StatsContext.Provider value={{ stats, dispatch }}>
      {children}
    </StatsContext.Provider>
  )
}

StatsProvider.propTypes = {
  children: node,
}

export const useStats = () => useContext(StatsContext)
