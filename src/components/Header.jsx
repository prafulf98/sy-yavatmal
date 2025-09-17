import { Link } from "react-router-dom"
import { FaAngleDown, FaAngleUp, GrLogin } from "../shared/icons"
import { Logo, Heading, ContactContainer, ToggleLanguage } from '../components';
import navList from '../json/navbar'
import { useState } from "react";

const Header = () => {

  const [togglePopup, setTogglePopup] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNavItems = () => {
    setTogglePopup(!togglePopup);
  }

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu)
  }

  return (
    <>
      <header className="bg-primary pt-3 p-4 xl:p-0">
        <nav className="flex items-center w-full max-w-7xl gap-2 sm:gap-6 mx-auto sm:justify-between flex-wrap md:flex-nowrap justify-center">
          <div className="flex items-center justify-between md:justify-start">
            <Link to="/" className="flex items-center space-x-3 flex-wrap md:flex-nowrap gap-2 justify-center md:justify-start">
              <Logo />
              <div className="flex md:hidden text-primary"><Heading /></div>
            </Link>
          </div>
          <div className="md:w-full">
            <div className="flex items-center justify-between w-full px-5 pb-3">
              <div className="text-primary hidden md:flex"><Heading /></div>
              <div className="gap-5 lg:flex items-center justify-center me-6 hidden">
                <ContactContainer mainContainerStyle={'text-primary'} />
                <ToggleLanguage />
              </div>
              <button data-collapse-toggle="navbar-default" onClick={handleOpenMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pink-50 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex flex-wrap items-center w-full gap-10 mx-auto p-4 bg-primary border-t border-gray-200 text-primary">
              <div className="hidden w-full lg:block lg:w-full" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row space-x-2 lg:mt-0 lg:border-0 lg:justify-between w-full">
                  {
                    navList.map((item, i) =>
                      <div key={i}>
                        <li className="flex items-center">
                          <Link
                            to={item.navRoute}
                            className="block py-2 px-3 relative"
                            onClick={item.aboutItems ? toggleNavItems : undefined}
                          >
                            {item.name}
                          </Link>
                          {
                            item.toggleBtn ?
                              <button className="cursor-pointer" onClick={toggleNavItems}>{!togglePopup ? <FaAngleDown /> : <FaAngleUp />}</button>
                              :
                              null
                          }
                          {
                            item.aboutItems && togglePopup && (
                              <div className="absolute top-32 w-52 bg-pink-100 text-secondary border-primary rounded-sm z-50">
                                {
                                  item.aboutItems.map((aboutI, i) => (
                                    <div key={i}>
                                      <Link to={aboutI.navRoute} onClick={() => setTogglePopup(false)} className="block py-2 px-3">
                                        {aboutI.name}
                                      </Link>
                                    </div>
                                  ))
                                }
                              </div>
                            )
                          }

                        </li>
                      </div>
                    )
                  }
                  <li>
                    {/* <Link
                      to='/login'
                      className=" py-2 px-3 flex items-center gap-2"
                    >
                      Login <GrLogin />
                    </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className={`lg:hidden ${openMenu ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-center gap-2 p-2 bg-primary text-primary">
              {navList.map((item, i) => (
                <li key={i} className="w-full">
                  <Link
                    to={item.navRoute}
                    onClick={() => setOpenMenu(false)}
                    className="block py-2 px-3 relative"
                    >
                    {item.name}
                  </Link>

                  {Array.isArray(item.aboutItems) && item.aboutItems.length > 0 && (
                    <ul className="ml-4 flex flex-col">
                      {item.aboutItems.map((aboutI, j) => (
                        <li key={j}>
                          <Link
                            to={aboutI.navRoute}
                            onClick={() => setOpenMenu(false)}
                            className="block py-2 px-3 relative"
                          >
                            {aboutI.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="gap-5 flex ml-4 flex-col">
              <ContactContainer mainContainerStyle={'text-primary !justify-start'} />
              <ToggleLanguage />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
