import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <main className='w-full flex items-center justify-center bg-gray-50 p-4'>
        <div className="w-full max-w-7xl min-h-[70vh]">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout
