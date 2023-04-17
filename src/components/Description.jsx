import React from 'react'
import {motion} from "framer-motion";
import '../App.css'

const Description = () => {
    return (
        <div>
            <div>Описание</div>
            <div>
                {/*<motion.img*/}
                {/*    src='/img/icon.png'*/}
                {/*    alt=''*/}
                {/*    width={'25%'}*/}
                {/*    animate={{rotate: 360}}*/}
                {/*    transition={{*/}
                {/*        delay: 2,*/}
                {/*        duration: 5,*/}
                {/*        repeat: Infinity,*/}
                {/*        repeatDelay: 0.5,*/}
                {/*        repeatType: "reverse",*/}
                {/*        type: "inertia",*/}
                {/*    }}*/}
                {/*>*/}
                {/*</motion.img>*/}

                {/*<motion.p*/}
                {/*    initial={{*/}
                {/*        x: -1000,*/}
                {/*        opacity: 0*/}
                {/*    }}*/}
                {/*    animate={{*/}
                {/*        x: 500,*/}
                {/*        opacity: 1,*/}
                {/*    }}*/}
                {/*    transition={{*/}
                {/*        delay:1,*/}
                {/*        duration:2,*/}
                {/*        type:'tween'*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Текст с анимацией*/}
                {/*</motion.p>*/}
            </div>

            <motion.div
                id='div1'
                initial={{
                    x: -1000,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 2,
                }}
            >
                Motion powers Framer, the web builder for creative pros. Design and ship your dream site. Zero code,
                maximum speed.
            </motion.div>

            <motion.div
                id='div2'
                initial={{
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 2,
                }}
            >
                <motion.img
                    src='/img/banner-new.jpeg'
                    alt=''
                    className='banner'
                    width={850}
                    initial={{
                        opacity: 0.6,
                    }}
                    transition={{
                        duration: 5
                    }}
                    whileTap={{
                        rotate: 360
                    }}
                >
                </motion.img>
            </motion.div>

            <div id='divImg'>
                <motion.div
                    id='div3'
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <motion.img
                        src='/img/ball.jpg'
                        alt=''
                        className='ball'
                        width={150}
                        initial={{
                            opacity: 0.6,
                        }}
                        transition={{
                            duration: 5,
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: {
                                duration: 2,
                            }
                        }}
                    >
                    </motion.img>
                </motion.div>

                <motion.div
                    id='div4'
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <motion.img
                        drag='x'
                        src='/img/ball.jpg'
                        alt=''
                        className='ball'
                        width={150}
                        initial={{
                            opacity: 0.6,
                        }}
                        transition={{
                            duration: 5,
                        }}
                        whileDrag={{
                            scale: 1.5,
                        }}
                    >
                    </motion.img>
                </motion.div>

                <motion.button
                    className='btn btn-primary'
                    whileHover={{
                        scale: 1.2,
                    }}
                >
                    Нажми
                </motion.button>
            </div>
        </div>
    )
}

export default Description