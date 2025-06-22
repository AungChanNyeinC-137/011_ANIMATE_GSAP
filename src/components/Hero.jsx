import React, { useRef } from 'react'
import { subtitle } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
import ScrollTrigger from 'gsap/ScrollTrigger' // <-- Add this line

gsap.registerPlugin(ScrollTrigger, SplitText) // <-- Register plugins

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 })
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 0.8,
            ease: 'expo.out',
            stagger: 0.06,
        });
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 80,
            duration: 0.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                //ease:'expo.inOut',
                scrub: true,
            }
        }).to('.right-leaf', { y: 400 }, 0)
            .to('.left-leaf', { y: -400 }, 0)

        // Animate video playback with scroll
        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        });
        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
        }

    }, [isMobile])

    return (
        <>
            <section className='noisy' id='hero'>
                <h1 className='title'>MOJITO</h1>
                <img src="/images/hero-left-leaf.png"
                    alt="left-leaf"
                    className='left-leaf' />
                <img src="/images/hero-right-leaf.png"
                    alt="right-leaf"
                    className='right-leaf' />
                <div className='body'>
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic</p>
                            <p className="subtitle">Sip the Spirit <br />of Summer</p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                {subtitle.paragraph}
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video src="/videos/output.mp4"
                    ref={videoRef}
                    muted
                    playsInline
                    preload='auto'
                />
            </div>
        </>
    )
}

export default Hero