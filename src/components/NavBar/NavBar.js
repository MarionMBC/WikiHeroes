
import { useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import {NavLink, useNavigate} from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './NavBar.css'
import { darkContext } from '../../context/DarkThemeContext'
import {AuthContext} from "../../context/authContext";
import {UserIcon} from "@heroicons/react/20/solid";
import {types} from "../../types/types";

const navigation = [
    { name: 'Home', to: '/dashboard/home' },
    { name: 'Marvel', to: '/dashboard/marvel' },
    { name: 'DC', to: '/dashboard/dc' },
    { name: 'Search', to: '/dashboard/search' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function NavBar() {

    const value =  useContext(AuthContext);
    const {user, dispatch} = value

    const navigate = useNavigate();
    const handleLogout = () => {
        const action = {
            type: types.logout
        }
        dispatch(action)
        //Remove token from local storage
        navigate('/login', {
            replace: true
        })
    }

    const { darkToggle, setDarkToggle } = useContext(darkContext)

    return (
        <Disclosure as="nav" className="bg-white dark:bg-gray-900 dark:text-white">
            {({ open }) => (
                <>
                    <div className="px-2">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black dark:hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                         <XMarkIcon className="block h-6 w-6 dark:text-white" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 dark:text-white" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className='text-black self-center text-2xl font-medium dark:text-white'>Wiki<span className='text-cyan-500 dark:text-cyan-300'>Heroes</span></div>
                                <div className='absolute right-0 sm:hidden'>
                                    <label className="toggleDarkBtn border border-cyan-300 rounded-full">
                                        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                                        <span className="slideBtnTg round"></span>
                                    </label>
                                </div>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 items-center justify-between">
                                        {navigation.map((item) => (
                                            <NavLink

                                                key={item.name}
                                                to={item.to}
                                                className={ ({isActive}) => {
                                                    return classNames(
                                                        isActive ? 'bg-cyan-300 text-gray-900' : 'text-gray-900 hover:bg-cyan-300 dark:text-white dark:hover:bg-cyan-300 dark:hover:text-gray-900',
                                                        'block rounded-md px-3 py-2 text-base font-medium'
                                                    )
                                                }
                                                }
                                                aria-current={item.current ? 'page' : undefined}
                                            
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                        <div className='justify-self-end'>
                                            <label className="toggleDarkBtn">
                                                <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                                                <span className="slideBtnTg round"></span>
                                                <span className='slideBtnMoon'></span>
                                            </label>

                                        </div>


                                        <button onClick={() => { handleLogout() }} className='transition ease-in-out hover:scale-105 hover:bg-cyan-500 hover:text-white cursor-pointer px-3 py-2  text-sm font-medium  rounded bg-cyan-300 text-black justify-self-end absolute right-0'>Logout</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden" >
                        <div className="flex flex-col group space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    as="a"
                                    to={item.to}
                                    className={ ({isActive}) => {
                                        return classNames(
                                            isActive ? 'bg-cyan-300 text-gray-900' : 'text-gray-900 hover:bg-cyan-300 dark:text-white dark:hover:bg-cyan-300 dark:hover:text-gray-900',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )
                                    }
                                    }
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>


                            ))}
                            <div className={'flex justify-center text-center mb-2 group-odd:my-3'}>
                                <UserIcon className={'w-8 h-8 me-2'}></UserIcon>
                                <p className={'text-center dark:text-cyan-300'}>{user.name}</p>
                            </div>
                            <button onClick={() => { handleLogout() }} className='transition ease-in-out hover:scale-105 hover:bg-cyan-500 hover:text-white group-last:space-y-10 w-1/2 self-center my-10 bg-cyan-600  cursor-pointer text-white dark:text-white dark:hover:bg-cyan-300 dark:hover:text-gray-900 block rounded-md px-3 py-2 font-medium'>
                                Logout
                            </button>

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
