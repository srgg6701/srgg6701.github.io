import { lazy, Suspense } from "react";
import { Routes, Route, useLocation/* , Link, NavLink */ } from "react-router-dom";
import Header from "./components/header";

const Home = lazy(() => import("./views/default"));
const About = lazy(() => import("./views/about"));
const NotFound = lazy(() => import("./views/notFound"));

export default function App() {
  const location = useLocation();
  return (
    <div className='min-h-dvh mx-auto px-4 max-w-6xl'>
      <Header pathname={location.pathname} />
      <main>
        <Suspense fallback={<p>Загрузка…</p>}>
          <Routes location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
            {/* <Route path="/project/:id" element={<Project />} /> */}
          </Routes>
        </Suspense>
      </main>
      <footer className='mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600'>
        © {new Date().getFullYear()} Sergey Cleftsow aka{" "}
        <a href='https://t.me/srgg6701' target='_blank'>
          <strong>srgg6701</strong>
        </a>
        . Powered by Vercel.
      </footer>
    </div>
  );
}
