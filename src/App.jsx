import anime from 'animejs/lib/anime.es.js';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

const calculateDisplacement = (value) => {
  /**
   *
   * 150 is the translated value 150px
   * 15 is the font size i.e. 15px
   * 8 is the gap value i.e. 4px top and bottom, so 8px
   * adjust these values accordingly
   *
   * */
  return 150 - value * (15 + 8);
};

function App() {
  const [is12hFormatChecked, setis12hFormatChecked] = useState(false);

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
  };

  const highlightDigit = (sliderId, val1, val2) => {
    const element = document.getElementById(sliderId);

    if (!element) return;

    const [sliderCol1, sliderCol2] = element.childNodes;

    sliderCol1.childNodes.forEach((digit, index) => {
      digit.classList.toggle('activeDigit', index == val1);
    });

    sliderCol2.childNodes.forEach((digit, index) => {
      digit.classList.toggle('activeDigit', index == val2);
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();

      // console.log({
      //   h: currentDateTime.getHours(),
      //   m: currentDateTime.getMinutes(),
      //   s: currentDateTime.getSeconds(),
      // });

      const hours = currentDateTime.getHours();
      const formattedHours =
        is12hFormatChecked && hours >= 13 ? hours - 12 : hours;

      // setting the time values and formatting them into relevant portions
      splitDigits(formattedHours, 'hour-section');
      splitDigits(currentDateTime.getMinutes(), 'minute-section');
      splitDigits(currentDateTime.getSeconds(), 'second-section');
    }, 1000);

    return () => clearInterval(intervalId);
  }, [splitDigits, is12hFormatChecked]);

  const handleOnChangeFormat = (event) => {
    setis12hFormatChecked(event.target.checked);
  };

  return (
    <div className="">
      <div className="mainContainer">
        <div>
          <p>Time format: HH:MM:SS</p>
          <div>
            <input
              type="checkbox"
              name="timeFormat"
              checked={is12hFormatChecked}
              onChange={handleOnChangeFormat}
            />
            <label htmlFor="timeFormat">12H Format?</label>
          </div>
        </div>
        <div className="digitContainer">
          {/*  */}
          {/* hours section */}
          {/*  */}
          <section id="hour-section" className="digitSections">
            <div id="hour-1st-digit-container" className="digitSliders">
              <div id="hourCol1-0">0</div>
              <div id="hourCol1-1">1</div>
              <div id="hourCol1-2">2</div>
            </div>
            <div id="hour-2nd-digit-container" className="digitSliders">
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
            <div id="minute-1st-digit-container" className="digitSliders">
              <div id="minuteCol1-0">0</div>
              <div id="minuteCol1-1">1</div>
              <div id="minuteCol1-2">2</div>
              <div id="minuteCol1-3">3</div>
              <div id="minuteCol1-4">4</div>
              <div id="minuteCol1-5">5</div>
            </div>
            <div id="minute-2nd-digit-container" className="digitSliders">
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
            <div id="second-1st-digit-container" className="digitSliders">
              <div id="secondCol1-0">0</div>
              <div id="secondCol1-1">1</div>
              <div id="secondCol1-2">2</div>
              <div id="secondCol1-3">3</div>
              <div id="secondCol1-4">4</div>
              <div id="secondCol1-5">5</div>
            </div>
            <div id="second-2nd-digit-container" className="digitSliders">
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
    </div>
  );
}

export default App;
