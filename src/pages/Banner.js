// import React from 'react';
// import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
// import Icon from '@ant-design/icons';
// import QueueAnim from 'rc-queue-anim';
// import BannerImage from '../assets/img/banner1.jpg';
// import './Banner.css';

// function typeFunc(a) {
//   if (a.key === 'line') {
//     return 'right';
//   } else if (a.key === 'button') {
//     return 'bottom';
//   }
//   return 'left';
// }

// export default function Banner({ onEnterChange }) {
//   return (
//     <section
//       className="page banner-wrapper"
//       style={{ backgroundImage: `url(${BannerImage})` }}
//     >
//       <div className="overlay"></div>
//       <ScrollElement
//         className="page"
//         id="banner"
//         onChange={({ mode }) => onEnterChange(mode)}
//         playScale={0.9}
//       >
//         <QueueAnim
//           className="banner-text-wrapper"
//           type={typeFunc}
//           delay={300}
//           key="banner"
//         >
//           <h2 key="h2">
//             ANT <p>DESIGN</p>
//           </h2>
//           {/* <p key="content">一个 UI 设计语言</p>
//           <span className="line" key="line" />
//           <div key="button1" className="start-button clearfix">
//             <a>设计规范</a>
//             <a>开发指引</a>
//           </div> */}
//         </QueueAnim>
//         <Icon type="down" className="down" />
//       </ScrollElement>
//     </section>
//   );
// }

import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <section key="home" className="banner">
      <div className="banner__text">
        <p className="banner__verse">
          Come to me, all you who are weary and burdened, and I will give you
          rest
        </p>
        <h3 className="banner__quote">Matthew 11:28</h3>
      </div>
    </section>
  );
};

export default Banner;
