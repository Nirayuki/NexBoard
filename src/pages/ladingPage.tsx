import React, { useEffect, useRef } from "react";
import Lottie from 'lottie-react';
import { motion } from "framer-motion";


import { DefaultLayout } from "../components/DefaultLayout";
import { ReavelDiv } from "../components/RevealDiv";

import { Content } from "../styles/LadingPage/content";
import { WhatIsNexboard } from "../styles/LadingPage/whatisnexboard";
import { WhyShouldUse } from "../styles/LadingPage/whyshoulduse";
import { Footer } from "../styles/LadingPage/footer";

import teste from '../assets/teste.svg';
import dataAnimation from '../assets/desktop-animation.json';
import animation_2 from '../assets/animation-2.json';



function LadingPage() {
   

    return (
        <DefaultLayout>
            <Content>
                <div className="home" >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            durantion: 0.5,
                            delay: 0.25,

                        }}
                        className="title"
                    >
                        NexBoard
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            durantion: 0.5,
                            delay: 0.25,

                        }}
                        className="subtitle"
                    >
                        Um organizador de projetos para você.
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            durantion: 0.5,
                            delay: 0.25,

                        }}
                        className="button"
                        >
                        <button>Fazer Login</button>
                    </motion.div>
                    <div className="wave">
                        <img src={teste} />
                    </div>
                </div>
                <WhatIsNexboard>
                    <div className="container">
                        <ReavelDiv className="title">
                            <p className="title-p">O que é NexBoard?</p>
                            <div className="line"></div>
                        </ReavelDiv>
                        <div className="content">
                            <div className="row">
                                <ReavelDiv className="container-svg">
                                    <Lottie animationData={dataAnimation} />
                                </ReavelDiv>
                                <ReavelDiv className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatum error reiciendis debitis architecto molestias sed illo commodi! Ea dolore nobis veritatis error quo neque sunt eum placeat culpa?
                                    </p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime magni inventore quaerat unde quisquam atque quod pariatur exercitationem necessitatibus tempora, sunt rem quis aperiam error molestiae assumenda consequuntur deserunt?</p>
                                </ReavelDiv>
                            </div>
                        </div>
                    </div>
                </WhatIsNexboard>
                <WhyShouldUse>
                    <div className="container">
                        <ReavelDiv className="title">
                            <p className="title-p">Por que devo usar?</p>
                            <div className="line"></div>
                        </ReavelDiv>
                        <div className="content">
                            <div className="row">
                                <ReavelDiv className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore voluptatum error reiciendis debitis architecto molestias sed illo commodi! Ea dolore nobis veritatis error quo neque sunt eum placeat culpa?
                                    </p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime magni inventore quaerat unde quisquam atque quod pariatur exercitationem necessitatibus tempora, sunt rem quis aperiam error molestiae assumenda consequuntur deserunt?</p>
                                </ReavelDiv>
                                <ReavelDiv
                                    className="container-svg">
                                    <Lottie animationData={animation_2} />
                                </ReavelDiv>
                            </div>
                        </div>
                    </div>
                </WhyShouldUse>
                <Footer>
                    <div className="container">
                        <p>© NexBoard 2023, All Rights Reserved. Powered By <a href="https://nirayuki.netlify.app/" target="_blank">Nirayuki</a></p>
                    </div>
                </Footer>
            </Content>
        </DefaultLayout>
    )
}

export default LadingPage;