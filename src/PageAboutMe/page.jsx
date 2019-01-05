import React, {Component} from 'react';

import './page.css';

export default class MyPage extends Component {
    render = () => {
        return (
            <div className="mypage_container">
                <div className="navbar">
                    <ul>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <div className="my_block">
                    <div className="avatar"/>
                    <span className="name">Anosov Konstantin</span>
                    <div className="border_below_name"/>
                    <div className="description">
                        <span className="descriptor1">developer</span>
                        <span className="descriptor2">front/back - end</span>
                    </div>
                </div>
                <span className="social_title">contact with me</span>
                <div className="social_links">
                    <a href="https://vk.com/kubitre"><div className="vk_button btn"/></a>
                    <a href="#"><div className="discord_button btn"/></a>
                    <a href="#"><div className="telegram_button btn"/></a>
                    <a href="https://github.com/kubitre"><div className="github_button btn"/></a>
                </div>
                <div className="resend_to_blog">
                    <span className="blog_send">Go to blog</span>
                    <polygon className="arrow" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </div>
            </div>
        )
    }
}