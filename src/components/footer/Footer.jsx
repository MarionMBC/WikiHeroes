import React from 'react';
import {SocialIcon} from "react-social-icons";

const Footer = () => {
    return (

        <footer className="relative bottom-0 flex justify-center md:block w-full shadow dark:bg-gray-900">
            <div className="py-10 px-10 md:flex md:items-center md:justify-between">
                <div className={'flex sm:block flex-col items-center'}><span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Marion Bustamante. </span>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved.
    </span>
                </div>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className={'flex items-center'}>
                        <SocialIcon style={{height:20, width:20}} url="https://www.linkedin.com/in/melchisedec-bustamante/" />
                        <p className={'ms-1'}>Marion Bustamante</p>
                    </li>
                    <li className={'flex items-center ms-2'}>
                        <SocialIcon bgColor={'cyan'} style={{height:20, width:20}} url="https://github.com/MarionMBC" />
                        <p className={'ms-1'}>MarionMBC</p>
                    </li>

                </ul>
            </div>
        </footer>

    );
}

export default Footer;