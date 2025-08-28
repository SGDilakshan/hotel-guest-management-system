import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import GuestList from "./pages/GuestList"
import AddGuest from "./pages/AddGuest"
import GuestDetail from "./pages/GuestDetail"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<GuestList />} />
        <Route path="/guests" element={<GuestList />} />
        <Route path="/guests/new" element={<AddGuest />} />
        <Route path="/guests/:id" element={<GuestDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
