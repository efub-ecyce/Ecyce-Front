import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './NavBar.style';
import { ReactComponent as Home } from "../../assets/common/NavBar/home.svg";
import { ReactComponent as Bookmark } from "../../assets/common/NavBar/bookmark.svg";
import { ReactComponent as Post } from "../../assets/common/NavBar/edit.svg";
import { ReactComponent as Chat } from "../../assets/common/NavBar/chat.svg";
import { ReactComponent as Profile } from "../../assets/common/NavBar/profile.svg";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);
    
    const onBtnClick = (path: string) => {
        setActivePath(path);
        navigate(path);
    }

    return (
        <S.NavBarContainer>
            <S.NavButton isActive={activePath === "/"} onClick={() => onBtnClick("/")}>
                <Home style={S.IconStyle(activePath === "/")} /> 홈
            </S.NavButton>
            <S.NavButton isActive={activePath === "/bookmark"} onClick={() => onBtnClick("/bookmark")}>
                <Bookmark style={S.IconStyle(activePath === "/bookmark")} /> 북마크
            </S.NavButton>
            <S.NavButton isActive={activePath === "/post"} onClick={() => onBtnClick("/post")}>
                <Post style={S.IconStyle(activePath === "/post")} /> 글쓰기
            </S.NavButton>
            <S.NavButton isActive={activePath === "/chatlist"} onClick={() => onBtnClick("/chatlist")}>
                <Chat style={S.IconStyle(activePath === "/chatlist")} /> 채팅
            </S.NavButton>
            <S.NavButton isActive={activePath === "/my"} onClick={() => onBtnClick("/my")}>
                <Profile style={S.IconStyle(activePath === "/my")} /> 내 프로필
            </S.NavButton>
        </S.NavBarContainer>
    );
}

export default NavBar;
