import { Link } from 'react-router-dom'
import { ContactContainer, Heading, Logo } from './'
import navList from '../json/navbar'
import { SubTitle } from '../shared'

const Footer = () => {
  return (
    <>

      <div className="bg-primary w-full items-center justify-center">
        <footer className="bg-primary rounded-lg mx-auto shadow-sm dark:bg-gray-900 max-w-7xl">
          <div className="w-full mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between w-full">
              <div className='w-full'>
                <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 flex-wrap justify-center lg:justify-start gap-2">
                  <Logo />
                  <div className="!text-white">
                    <Heading />
                  </div>
                </Link>
              </div>
              <div className="w-full flex gap-3 flex-wrap justify-center md:justify-start">
                <ul className="flex flex-col flex-wrap gap-3 mb-6 text-sm font-medium text-primary sm:mb-0">
                  {navList
                    .filter(item => item.isEverware)
                    .map(item => (
                      <li key={item.id}>
                        <Link to={item.navRoute} className="hover:underline me-4 md:me-6">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
                <div className="flex flex-col gap-3">
                  {/* <SubTitle subTitleName={'Contact'} customStyle={'!text-start text-primary'}/> */}
                  <ContactContainer mainContainerStyle={'text-primary'} />
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <p className="block text-sm sm:text-center text-primary">© 2025
              <a href="/" className="hover:underline">
                Sahajyoga yavatmal™</a>.
              All Rights Reserved. <br />Designed Developed by Sahajayoga Yavatmal Yuvashakti Team
            </p>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Footer
