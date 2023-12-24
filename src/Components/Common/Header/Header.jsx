import { Fragment, useContext, useEffect, useState } from 'react';
import './Header.css'
import { Dialog, Listbox, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../../public/tasnimul-haque-logo.png'
import { Link, NavLink} from 'react-router-dom';
import TopBanner from '../TopBanner/TopBanner';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { AuthContext } from '../../Providers/AuthProviders';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
]


const colors = [
  { "name": "Electric Ultramarine", "colorCode":  "72 1 255", "hexCol": "#4801FF"},
  { "name": "Neon Blue", "colorCode":  "17 0 154", "hexCol": "#11009E"},
  { "name": "Chocolate", "colorCode":  "135 54 0", "hexCol": "#873600"},
  { "name": "Lincoln Green", "colorCode":  "27 89 14", "hexCol": "#1B590E"},
  { "name": "Violet", "colorCode":  "152 0 163", "hexCol": "#9800A3"},
  { "name": "Blue-Violet", "colorCode":  "126 48 225", "hexCol": "#7E30E1"},
  { "name": "Metallic Violet", "colorCode":  "91 8 136", "hexCol": "#5B0888"},
]

const Header = () => {
  const Tas = "https://i.ibb.co/sKQBwkc/Tasnimul-Haque.jpg"
  const {user, signOutUser} = useContext(AuthContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navBg, setNavBg] = useState(false);
  const [isHidden, setIsHidden] = useState(false)
  const [selectedColor, setSelectedColor] = useState(colors[0])
  
  document.documentElement.style.setProperty("--theme-color", `${selectedColor.colorCode}`)




    const changeNavBg = () => {
        window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
        window.removeEventListener('scroll', changeNavBg);
      }
    }, [])
  const handleClickHidden = () => {
    setIsHidden(!isHidden);
  };

  function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
  }
  const handleSignOut = () => {
        signOutUser()
            .then()
        .catch(error => console.error(error))
    }
  return (
      <>
      {!isHidden && <TopBanner handleClickHidden={handleClickHidden}></TopBanner>}
        <div className={`sticky top-0 z-[1000] bg-white`} onScroll={changeNavBg}>
      <header className={`absolute inset-x-0 top-0 z-50 `}>
        <nav className={`flex items-center justify-between px-6 py-3 lg:px-8 ${navBg ? 'backdrop-blur bg-black/20' : 'bg-themeColor'}`} aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Tasnimul Haque</span>
              <img
                className="h-10 2xl:h-16 w-auto"
                src={Logo}
                alt="Tasnimul Haque Logo"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            </div>
            {/* Menu with DropDown User */}
            <div className='hidden lg:flex items-center gap-x-10'>
                        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
              style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "yellow" : "white",}
                }}
                key={item.name} to={item.href} className={`text-[0.7rem] 2xl:text-[1.1rem] hover:text-themeColor uppercase leading-6 text-white `}>
                {item.name}
              </NavLink>
            ))}
            </div>
            
          <div className="hidden lg:flex lg:justify-end relative gap-3">
            <a href='Tasnimul Haque Resume.pdf' className="flex items-center text-[0.7rem] 2xl:text-base relative leading-6 text-black uppercase bg-white px-5 2xl:px-8 2xl:py-2  py-1 group group-* w-fit rounded" download>
              Resume <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 2xl:h-6 2xl:w-6 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                </a>
                {/* Color Code Select */}

                <Listbox
                  as="div"
                  className=" p-0.5 rounded-full flex items-center"
                  value={selectedColor}
                  onChange={setSelectedColor}>
                  
                  <Listbox.Button className=" flex items-center" title='Color Palette'><div className={`w-5 h-5 rounded-full outline outline-2 outline-offset-2 outline-white bg-themeColor`} ></div></Listbox.Button>
                  
                    <Transition
                      as={Fragment}
                      enter="transition ease-in duration-300"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Listbox.Options className="absolute -left-20 top-10 z-10 mt-3 w-[230px] overflow-hidden rounded-xl bg-white shadow-2xl py-3 px-2">
                        {colors.map((color) => (
                          <Listbox.Option
                            key={color.name}
                            value={color}
                            as={Fragment}>
                            {({ active, selected }) => (
                              <li
                                className={`${
                                  active ? 'bg-themeColor text-white' : 'bg-white text-black'
                                } flex items-center justify-start gap-1 px-2 py-1 rounded-md cursor-pointer`}
                              >
                                {selected && <CheckIcon className="h-4 w-4" />}
                                <div className="w-5 h-5 rounded-full" style={{backgroundColor: `${color.hexCol}`}}></div>{color.name}
                              </li>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                      </Transition>
                    </Listbox>
              {
              user && <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-9 w-9 rounded-full ring-2 ring-[themeColor]"
                        src={Tas}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/addportfolio"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Add Portfolio
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/manageportfolio"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Manage Portfolio
                          </Link>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                      <button
                        onClick={handleSignOut}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
            }
          </div>
              
            </div>

            
          </nav>
          {/* Mobile Menu---- */}
        <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/"  className="-m-1.5 p-1.5">
                <span className="sr-only">Tasnimul Haque</span>
                <img
                  className="h-10 w-auto"
                  src={Logo}
                  alt="Tasnimul Haque Logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root text-center">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "yellow" : "white",}
                      }}
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700 hover:text-themeColor"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href='Tasnimul Haque Resume.pdf'
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-themeColor"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
          
      </header>
       </div>

      </>
        
    );
};

export default Header;

