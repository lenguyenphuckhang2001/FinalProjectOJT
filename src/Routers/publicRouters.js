import Home from '../Pages/Home/Home';
import JoinUs from '../Pages/JoinIUs/JoinUs';
import LetTalk from '../Pages/LetTalk/LetTalk';
import Portfolio from '../Pages/Portfolio/Portfolio';
import STDigital from '../Pages/WhatWeDo/STDigital/STDigital';
import STIncubation from '../Pages/WhatWeDo/STIncubation/STIncubation';
import STSoftware from '../Pages/WhatWeDo/STSofware/STSoftware';
import WhoWeAre from '../Pages/WhoWeAre/WhoWeAre';

const publicRouters = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'st-software/',
    element: <STSoftware />,
  },
  {
    path: 'st-digital/',
    element: <STDigital />,
  },
  {
    path: 'st-incubation/',
    element: <STIncubation />,
  },
  {
    path: 'who-we-are/',
    element: <WhoWeAre />,
  },
  {
    path: 'portfolio/',
    element: <Portfolio />,
  },
  {
    path: 'join-us/',
    element: <JoinUs />,
  },
  {
    path: 'lets-talk/',
    element: <LetTalk />,
  },
];

export default publicRouters;
