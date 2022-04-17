import { node } from "prop-types"
import { createContext, useContext, useReducer } from "react"

const initialStats = {
  roundsWon: 0,
  roundsLost: 0,
  currentStreak: 0,
  highestStreak: 0,
}

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
      }
    case "lose":
      return { ...state, roundsLost: state.roundsLost + 1, currentStreak: 0 }
    default:
      throw new Error()
  }
}

const StatsContext = createContext({
  stats: initialStats,
  dispatch: () => {},
})

export const StatsProvider = ({ children }) => {
  const [stats, dispatch] = useReducer(statsReducer, initialStats)

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
