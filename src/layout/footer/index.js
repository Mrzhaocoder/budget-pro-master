import React, {Component} from "react";
import {Wrapper, FooterWrapper, LeftWrapper,RightWrapper,WordWrapper} from './style'

class Footer extends Component {
    render() {
        return (
            <Wrapper>
                <FooterWrapper>
                    <LeftWrapper>
                        © 山东省城市商业银行合作联盟
                    </LeftWrapper>
                    <RightWrapper>
                        <WordWrapper>价值观 </WordWrapper>安全 开放 共享 <WordWrapper>企业精神</WordWrapper> 专业 创新 敬业 协作
                    </RightWrapper>
                </FooterWrapper>
            </Wrapper>
        );
    }
}

export default Footer;
