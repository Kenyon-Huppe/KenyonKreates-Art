import Logo from './components/Logo';
import HeaderHome from './components/pages/homePage/HeaderHome';
import RecentPics from './components/pages/homePage/RecentPics';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Gallery from './components/pages/fanArtPage/Gallery'

/**
 * todo commit changes
 * todo add all imgs to gallery
 */


function App() {
  // use: navigate('<givenLink>');  when desiring moving to other page

  let recentPicsArray;

  const [artwork, editArtwork] = useState([
    {
      image: '/artwork/hole_in_wall.png'
    },
    {
      image: '/artwork/zelda_crying.png'
    },
    {
      image: '/artwork/silent_assassin.png'
    },
    {
      image: '/artwork/man_with_a_condition.png'
    },
    {
      image: '/artwork/pink_princess.png'
    },
    {
      image: '/artwork/wild_child.png'
    },
    {
      image: '/artwork/hawaiian_mud_goddess.png'
    },
    {
      image: '/artwork/bokoblin_buddy.png'
    },
    {
      image: '/artwork/water_bottle.png'
    },
    {
      image: '/artwork/desk_setup.png'
    },
    {
      image: '/artwork/zelda.png'
    },
    {
      image: '/artwork/tree_&_pond.png'
    },
    {
      image: '/artwork/grill.png'
    },
    {
      image: '/artwork/corinthian_helmet.png'
    },
    {
      image: '/artwork/misc_items2.png'
    },
    {
      image: '/artwork/misc_items.png'
    },
    {
      image: '/artwork/yiga_faceplate.png'
    },
    {
      image: '/artwork/master_sword.png'
    },
    {
      image: '/artwork/sheika_slate.png'
    },
    {
      image: '/artwork/guardian_skirmisher.png'
    },
    {
      image: '/artwork/eye.png'
    },
    {
      image: '/artwork/bee.png'
    },
    {
      image: '/artwork/viking.png'
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
        <Route path='/gallery' element={<Gallery data={artwork} />} exact></Route>
      </Routes>

    </div>
  );
}

export default App;
