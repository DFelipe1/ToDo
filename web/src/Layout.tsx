import { Outlet } from "react-router-dom"

export function Layout() {

  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = userPrefersDark ? 'dark' : 'light';

  return (
    <div className={`${theme} w-screen h-screen flex justify-center items-center`}>
      <Outlet/>
    </div>
  )
}
