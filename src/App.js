import Logo from './components/Logo';
import HeaderHome from './components/pages/homePage/HeaderHome';
import RecentPics from './components/pages/homePage/RecentPics';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Gallery from './components/pages/fanArtPage/Gallery'

/**
 * todo report to Gallery component
 * todo add all imgs to gallery
 */


function App() {
  // use: navigate('<givenLink>');  when desiring moving to other page

  let recentPicsArray;

  const [artwork, editArtwork] = useState([
    {
      image: '/artwork/hole_in_wall.png',
      key: 'hole_in_wall'
    },
    {
      image: '/artwork/zelda_crying.png',
      key: 'zelda_crying'
    },
    {
      image: '/artwork/silent_assassin.png',
      key: 'silent_assassin'
    },
    {
      image: '/artwork/man_with_a_condition.png',
      key: 'man_with_a_condition'
    },
    {
      image: '/artwork/pink_princess.png',
      key: 'pink_princess'
    },
    {
      image: '/artwork/wild_child.png',
      key: 'wild_child'
    },
    {
      image: '/artwork/hawaiian_mountain_mud_goddess.png',
      key: 'hawaiian_mountain_mud_goddess'
    },
    {
      image: '/artwork/bokoblin_buddy.png',
      key: 'bokoblin_buddy'
    },
    {
      image: '/artwork/water_bottle.png',
      key: 'water_bottle'
    },
    {
      image: '/artwork/desk_setup.png',
      key: 'desk_setup'
    },
    {
      image: '/artwork/zelda.png',
      key: 'zelda'
    },
    {
      image: '/artwork/tree_&_pond.png',
      key: 'tree_&_pond'
    },
    {
      image: '/artwork/grill.png',
      key: 'grill'
    },
    {
      image: '/artwork/corinthian_helmet.png',
      key: 'corinthian_helmet'
    },
    {
      image: '/artwork/misc_items2.png',
      key: 'misc_items2'
    },
    {
      image: '/artwork/misc_items.png',
      key: 'misc_items'
    },
    {
      image: '/artwork/yiga_faceplate.png',
      key: 'yiga_faceplate'
    },
    {
      image: '/artwork/master_sword.png',
      key: 'master_sword'
    },
    {
      image: '/artwork/sheika_slate.png',
      key: 'sheika_slate'
    },
    {
      image: '/artwork/guardian_skirmisher.png',
      key: 'guardian_skirmisher'
    },
    {
      image: '/artwork/eye.png',
      key: 'eye'
    },
    {
      image: '/artwork/bee.png',
      key: 'bee'
    },
    {
      image: '/artwork/viking.png',
      key: 'viking'
    },



  ])

  // todo put homePage info here
  const homePage =
    <div>
      <Logo></Logo>
      <HeaderHome></HeaderHome>
      {/* use className to populates from galler spots 1-3 */}
      <RecentPics artwork={artwork}></RecentPics>
      <Footer></Footer>
    </div>;

  return (
    <div className="App container">
      <Routes>
        {/* home */}
        <Route path='/' element={homePage} exact></Route>

        {/* todo put the other pages that display */}
        <Route path='/gallery' element={<Gallery artwork={artwork} />} exact></Route>
      </Routes>

    </div>
  );
}

export default App;
