import React, {useEffect, useState} from "react";

import classes from "./Header.module.scss";
import {Link, useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const ctaClickHandler = () => {
        history.push("/page-cta");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    glotr4
                </Link>
                <nav className={classes.header__content__nav}>
                    <ul>
                        <li>
                            <Link to="/page-one">
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M13.01 20.305c-5.105.586-9.51-3.37-9.51-8.442A8.507 8.507 0 018.788 3.99a5.453 5.453 0 005.288 4.123h.299a1 1 0 100-2h-.3a3.45 3.45 0 01-3.45-3.45v-1.29l-1.25.32A10.503 10.503 0 001.5 11.864c0 6.264 5.443 11.151 11.737 10.43 4.675-.537 8.503-4.26 9.156-8.913.505-3.6-.819-7.072-3.448-9.392a10.473 10.473 0 00-4.32-2.294 1 1 0 10-.5 1.937 8.473 8.473 0 013.496 1.857c2.132 1.88 3.202 4.687 2.791 7.613-.526 3.75-3.632 6.771-7.403 7.204zm-6.72-8.497c.19.181.45.292.71.292.26 0 .52-.11.71-.292.18-.191.29-.453.29-.714 0-.262-.11-.524-.29-.715a1.042 1.042 0 00-1.42 0c-.18.191-.29.453-.29.715 0 .261.11.523.29.714zm10 .002c.19.18.45.29.71.29.26 0 .52-.11.71-.29.09-.1.16-.21.21-.331.05-.12.08-.25.08-.38s-.03-.261-.08-.381-.12-.23-.21-.33c-.1-.091-.2-.161-.33-.211-.37-.16-.81-.06-1.09.21-.09.1-.16.21-.21.33-.05.12-.08.251-.08.381s.03.26.08.381c.05.12.12.23.21.33zm-7.497 4.995a1 1 0 111.414-1.415c.99.99 2.596.99 3.586 0a1 1 0 011.414 1.415 4.537 4.537 0 01-6.414 0z"
                                          fill="currentColor"></path>
                                </svg>
                                Кабинет
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two">
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.486 1.626L20.97 6.34A2 2 0 0122 8.088v7.824a2 2 0 01-1.029 1.748l-8.485 4.714a1 1 0 01-.972 0L3.03 17.66A2 2 0 012 15.912V8.088A2 2 0 013.029 6.34l8.485-4.714a1 1 0 01.972 0zM4 9.176v6.736l7 3.888v-6.711L4 9.176zm16 .022l-7 3.887V19.8l7-3.888V9.198zm-3.5-3.055L9.566 9.996l2.431 1.36 6.943-3.857-2.44-1.356zM12 3.644L5.079 7.488l2.433 1.36 6.929-3.849L12 3.644z"
                                        fill="currentColor"></path>
                                </svg>
                                Заказы
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-three">
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M23 8.5C23 4.8 20.861 2 17.282 2 15.115 2 13.136 3.069 12 4.742 10.864 3.069 8.884 2 6.718 2 3.138 2 1 4.8 1 8.5c0 3.817 2.886 7.664 10.4 13.3l.6.45.6-.45C20.115 16.164 23 12.316 23 8.5zM17.282 4C19.622 4 21 5.805 21 8.5c0 2.93-2.398 6.211-9 11.246C5.398 14.712 3 11.43 3 8.5 3 5.805 4.379 4 6.718 4 9.03 4 11 5.743 11 8h2c0-2.257 1.969-4 4.282-4z"
                                          fill="currentColor"></path>
                                </svg>
                                Избранное
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-four">
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M10 2a4 4 0 00-4 4v2H.867L2.18 18.496A4 4 0 006.15 22h11.703a4 4 0 003.969-3.504L23.133 8H18V6a4 4 0 00-4-4h-4zm3 7a1 1 0 00-1-1H8V6a2 2 0 012-2h4a2 2 0 012 2v4h4.867l-1.03 8.248A2 2 0 0117.851 20H6.148a2 2 0 01-1.984-1.752L3.133 10H12a1 1 0 001-1z"
                                          fill="currentColor"></path>
                                </svg>
                                Корзина
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>CTA Page</button>
                </nav>
            </div>
            <div className={classes.header__mobile}>
                <div className={classes.header__mobile__list}>
                    <Link to="/page-zero">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 20v-5a4 4 0 018 0v1a1 1 0 11-2 0v-1a2 2 0 10-4 0v7H2V10.032l10-8.334 10 8.334V22h-7a1 1 0 110-2h5v-9.032l-8-6.666-8 6.666V20h4z"
                                fill="currentColor"></path>
                        </svg>
                        Главная
                    </Link>
                    <Link to="/page-one">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8.33 6.809a7.5 7.5 0 009.779 9.226l2.85 5.36a1 1 0 101.766-.939l-3.758-7.067-.883.469a5.5 5.5 0 112.678-3.248 1 1 0 101.912.585A7.5 7.5 0 108.329 6.808zM1 10a1 1 0 110-2h3a1 1 0 010 2H1zm-1 4a1 1 0 001 1h4.335a1 1 0 100-2H1a1 1 0 00-1 1zm0 5a1 1 0 001 1h9.034a1 1 0 100-2H1a1 1 0 00-1 1z"
                                  fill="currentColor"></path>
                        </svg>
                        Кабинет
                    </Link>
                    <Link to="/page-two">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.486 1.626L20.97 6.34A2 2 0 0122 8.088v7.824a2 2 0 01-1.029 1.748l-8.485 4.714a1 1 0 01-.972 0L3.03 17.66A2 2 0 012 15.912V8.088A2 2 0 013.029 6.34l8.485-4.714a1 1 0 01.972 0zM4 9.176v6.736l7 3.888v-6.711L4 9.176zm16 .022l-7 3.887V19.8l7-3.888V9.198zm-3.5-3.055L9.566 9.996l2.431 1.36 6.943-3.857-2.44-1.356zM12 3.644L5.079 7.488l2.433 1.36 6.929-3.849L12 3.644z"
                                fill="currentColor"></path>
                        </svg>
                        Заказы
                    </Link>
                    <Link to="/page-three">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M23 8.5C23 4.8 20.861 2 17.282 2 15.115 2 13.136 3.069 12 4.742 10.864 3.069 8.884 2 6.718 2 3.138 2 1 4.8 1 8.5c0 3.817 2.886 7.664 10.4 13.3l.6.45.6-.45C20.115 16.164 23 12.316 23 8.5zM17.282 4C19.622 4 21 5.805 21 8.5c0 2.93-2.398 6.211-9 11.246C5.398 14.712 3 11.43 3 8.5 3 5.805 4.379 4 6.718 4 9.03 4 11 5.743 11 8h2c0-2.257 1.969-4 4.282-4z"
                                  fill="currentColor"></path>
                        </svg>
                        Избранное
                    </Link>
                    <Link to="/page-four">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10 2a4 4 0 00-4 4v2H.867L2.18 18.496A4 4 0 006.15 22h11.703a4 4 0 003.969-3.504L23.133 8H18V6a4 4 0 00-4-4h-4zm3 7a1 1 0 00-1-1H8V6a2 2 0 012-2h4a2 2 0 012 2v4h4.867l-1.03 8.248A2 2 0 0117.851 20H6.148a2 2 0 01-1.984-1.752L3.133 10H12a1 1 0 001-1z"
                                  fill="currentColor"></path>
                        </svg>
                        Корзина
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
