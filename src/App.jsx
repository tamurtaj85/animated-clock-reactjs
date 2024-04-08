import anime from 'animejs/lib/anime.es.js';
import { useCallback, useEffect } from 'react';
import './App.css';

const calculateDisplacement = (value) => 150 - value * (15 + 8);

function App() {
  const splitDigits = useCallback((value, sliderSectionId) => {
    const digit1 = Math.floor(value / 10);
    const digit2 = value % 10;

    // console.log({ digit1, digit2, sliderSectionId });

    slideBar(sliderSectionId, digit1, digit2);
    highlightDigit(sliderSectionId, digit1, digit2);
  }, []);

  const slideBar = (sliderId, val1, val2) => {
    const element = document.getElementById(sliderId);

    if (!element) return;

    const [sliderCol1, sliderCol2] = element.childNodes;

    anime({
      targets: `#${sliderCol1.id}`,
      translateY: calculateDisplacement(val1),
      duration: 10000,
      easing: 'spring()',
    });

    anime({
      targets: `#${sliderCol2.id}`,
      translateY: calculateDisplacement(val2),
      duration: 10000,
      easing: 'spring()',
    });

    // anime({
    //   targets: '#hour-2nd-digit-container',
    //   keyframes: [
    //     { translateY: 250 },
    //     ...Array.from({ length: container.childNodes.length }).reduce(
    //       (acc, _curr, index) => {
    //         return [
    //           ...acc,
    //           {
    //             // 250 translated value for the divs,
    //             // 60+20 is text size + gap between each number
    //             translateY: 250 - index * (60 + 20),
    //             delay: delay1s,
    //             easing: 'spring()',
    //           },
    //         ];
    //       },
    //       []
    //     ),
    //   ],
    //   duration: 10000,
    //   loop: true,
    // });
  };

  const highlightDigit = (sliderId, val1, val2) => {
    const element = document.getElementById(sliderId);

    if (!element) return;

    const [sliderCol1, sliderCol2] = element.childNodes;

    sliderCol1.childNodes.forEach((digit, index) => {
      digit.classList.toggle('activeDigit', index == val1);
    });

    // anime({
    //   targets: `#${sliderCol1.childNodes[val1].id}`,
    //   width: '120px',
    //   height: '120px',
    //   easing: 'easeInOutQuad',
    //   duration: 400,
    //   direction: 'alternate',
    //   // loop: true,
    // });

    sliderCol2.childNodes.forEach((digit, index) => {
      digit.classList.toggle('activeDigit', index == val2);
    });

    // anime({
    //   targets: `#${sliderCol2.childNodes[val2].id}`,
    //   width: '120px',
    //   height: '120px',
    //   easing: 'easeInOutQuad',
    //   duration: 400,
    //   direction: 'alternate',
    //   // loop: true,
    // });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();

      // console.log({
      //   h: currentDateTime.getHours(),
      //   m: currentDateTime.getMinutes(),
      //   s: currentDateTime.getSeconds(),
      // });

      // setting the time values and formatting them into relevant portions
      splitDigits(currentDateTime.getHours(), 'hour-section');
      splitDigits(currentDateTime.getMinutes(), 'minute-section');
      splitDigits(currentDateTime.getSeconds(), 'second-section');
    }, 1000);

    return () => clearInterval(intervalId);
  }, [splitDigits]);

  return (
    <div className="">
      <div className="mainContainer">
        {/*  */}
        {/* hours section */}
        {/*  */}
        <section id="hour-section" className="digitSections">
          <div id="hour-1st-digit-container" className="digitContainer">
            <div id="hourCol1-0">0</div>
            <div id="hourCol1-1">1</div>
            <div id="hourCol1-2">2</div>
          </div>
          <div id="hour-2nd-digit-container" className="digitContainer">
            <div id="hourCol2-0">0</div>
            <div id="hourCol2-1">1</div>
            <div id="hourCol2-2">2</div>
            <div id="hourCol2-3">3</div>
            <div id="hourCol2-4">4</div>
            <div id="hourCol2-5">5</div>
            <div id="hourCol2-6">6</div>
            <div id="hourCol2-7">7</div>
            <div id="hourCol2-8">8</div>
            <div id="hourCol2-9">9</div>
          </div>
        </section>
        {/*  */}
        {/* minutes section */}
        {/*  */}
        <section id="minute-section" className="digitSections">
          <div id="minute-1st-digit-container" className="digitContainer">
            <div id="minuteCol1-0">0</div>
            <div id="minuteCol1-1">1</div>
            <div id="minuteCol1-2">2</div>
            <div id="minuteCol1-3">3</div>
            <div id="minuteCol1-4">4</div>
            <div id="minuteCol1-5">5</div>
          </div>
          <div id="minute-2nd-digit-container" className="digitContainer">
            <div id="minuteCol2-0">0</div>
            <div id="minuteCol2-1">1</div>
            <div id="minuteCol2-2">2</div>
            <div id="minuteCol2-3">3</div>
            <div id="minuteCol2-4">4</div>
            <div id="minuteCol2-5">5</div>
            <div id="minuteCol2-6">6</div>
            <div id="minuteCol2-7">7</div>
            <div id="minuteCol2-8">8</div>
            <div id="minuteCol2-9">9</div>
          </div>
        </section>
        {/*  */}
        {/* seconds section */}
        {/*  */}
        <section id="second-section" className="digitSections">
          <div id="second-1st-digit-container" className="digitContainer">
            <div id="secondCol1-0">0</div>
            <div id="secondCol1-1">1</div>
            <div id="secondCol1-2">2</div>
            <div id="secondCol1-3">3</div>
            <div id="secondCol1-4">4</div>
            <div id="secondCol1-5">5</div>
          </div>
          <div id="second-2nd-digit-container" className="digitContainer">
            <div id="secondCol2-0">0</div>
            <div id="secondCol2-1">1</div>
            <div id="secondCol2-2">2</div>
            <div id="secondCol2-3">3</div>
            <div id="secondCol2-4">4</div>
            <div id="secondCol2-5">5</div>
            <div id="secondCol2-6">6</div>
            <div id="secondCol2-7">7</div>
            <div id="secondCol2-8">8</div>
            <div id="secondCol2-9">9</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
