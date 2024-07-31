import { LayoutPreferencesProvider } from "./components/LayoutPreferencesContext"
import LayoutSwitcher from "./components/LayoutSwitcher"
import StyledComponent from "./components/StyledComponent"

function App() {

  return (
    <>
      <LayoutPreferencesProvider>
        <LayoutSwitcher />
        <StyledComponent />
      </LayoutPreferencesProvider>
    </>
  )
}

export default App