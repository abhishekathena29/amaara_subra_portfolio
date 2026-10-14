import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Activities from './pages/Activities'
import Home from './pages/Home'
import Honors from './pages/Honors'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Resume from './pages/Resume'
import Training from './pages/Training'
import WorkDetail from './pages/WorkDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="research" element={<Research />} />
          <Route path="projects" element={<Projects />} />
          <Route path="training" element={<Training />} />
          <Route path="honors" element={<Honors />} />
          <Route path="activities" element={<Activities />} />
          <Route path="resume" element={<Resume />} />
          <Route path="work/:slug" element={<WorkDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
