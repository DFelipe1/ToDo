import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Outlet/>
    </div>
  )
}
