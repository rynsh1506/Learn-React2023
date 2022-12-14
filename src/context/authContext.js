import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () => {
        //TODO
        setCurrentUser({
            id: 1,
            name: 'Muhammad Riyansyah',
            profilePic:
                'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/289175301_699852171078625_6726696324010982522_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXnB9hFNVulemNUkjkXB13Ft3zQM50N3wW3fNAznQ3fIv_Ztasj1Z0at3dcx4pQcqVFd72NBYq1XFUFZC4Xxhj&_nc_ohc=Md_IBVEAW8QAX_uW6_o&_nc_ht=scontent-sin6-2.xx&oh=00_AfCho8LM-IT7SsVYE8BlzF96yBm_qRwfmam2nlVZqN9g2Q&oe=639C5370',
        });
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};
