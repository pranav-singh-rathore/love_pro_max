import { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            The Connection.
            <br /> A Win For My Heart.
          </h2>

          <p className="hiw-subtitle">
           It is here. The only feature that really matters.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Lovliest Memory</p>
          </div>

          <div className="hiw-text-container">
  <div className="flex flex-1 justify-center flex-col">
    <p className="hiw-text g_fadeIn">
      This relationship is an entirely new class of bond that delivers {' '}
      <span className="text-white">
        unmatched emotional support
      </span>.
    </p>

    <p className="hiw-text g_fadeIn">
     Everything {' '}
      <span className="text-white">
        feels so effortless and immersive
      </span>,
       building an environment of total trust and care.
    </p>
  </div>

  <div className="flex-1 flex justify-center flex-col g_fadeIn">
    <p className="hiw-text">True</p>
    <p className="hiw-bigtext">Heart of Gold</p>
    <p className="hiw-text">Infinite kindness</p>
  </div>
</div>
            </div>
    </section>
  )
}

export default HowItWorks