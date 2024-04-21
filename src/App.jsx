import './App.css'

export default function App() {
  return (
  <>
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-red-600 to-red-400 p-6 rounded-md">
        <div className="flex items-center flex-shrink-0 text-gray-100 mr-6">
          {/* TODO: Personalize logo */}
          {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
          <span className="font-semibold text-2xl tracking-tight">Scott & Devin</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded-md text-red-100 border-red-300 hover:text-gray-100 hover:border-gray-100">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-base lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-100 hover:text-gray-100 mr-4">
              Details
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-100 hover:text-gray-100 mr-4">
              Hotel
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-100 hover:text-gray-100">
              Map
            </a>
          </div>
          <div>
            <a href="#" className="inline-block text-base px-4 py-2 leading-none border rounded-md text-gray-100 border-gray-100 hover:border-transparent hover:text-red-500 hover:bg-gray-100 mt-4 lg:mt-0">
              RSVP
              </a>
          </div>
        </div>
      </nav>
    </header>
    <main className='bg-red-400 rounded-md'>
      <div>
        <img className="object-cover" src="src/assets/pngtree-gray-network-placeholder-png-image_3416659.jpg" alt="Image Placeholder"/>
      </div>
      <h1 className="text-3xl">
        Scott Amason & Devin Shade
      </h1>
    </main>
    <footer>
      <div className='bg-gradient-to-r from-red-600 to-red-400'>
        Foot
      </div>
    </footer>
  </>  
  )
}