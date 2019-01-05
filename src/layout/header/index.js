import React, {Component} from "react";
import {
    Wrapper,
    HeaderWrapper,
    LogoWrapper,
    TopRightWrapper,
    LevelWrapper,
    PersonalWrapper,
    NameWrapper,
    DepartmentWrapper
} from './style.js'
import logo from '../../assets/logo/Logo.png'
import avatar from '../../assets/topright/avatar.jpg'
import {Avatar} from 'antd';

class Header extends Component {
    render() {
        return (
            <Wrapper>
                <HeaderWrapper>
                    <LogoWrapper>
                        <img src={logo}  alt="logo"/>
                    </LogoWrapper>
                    <TopRightWrapper>
                        <Avatar src={avatar} size={43}/>
                        <LevelWrapper>
                            M
                        </LevelWrapper>

                        <PersonalWrapper>
                            <NameWrapper>李建峰_800P</NameWrapper>
                            <DepartmentWrapper>综合管理部</DepartmentWrapper>
                        </PersonalWrapper>

                    </TopRightWrapper>
                </HeaderWrapper>
            </Wrapper>
        );
    }
}

export default Header;
