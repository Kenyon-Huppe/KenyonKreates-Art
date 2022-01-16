// todo houses small collection of favorite works; use card for each
// todo house 3 of most recent gallery pics
// todo at end put "See More" btn which links to Gallery page

import Creation from "./Creation"
import { Link } from "react-router-dom"

const RecentPics = ({ artwork }) => {
    // let recentPicsArray = [0, 0, 0];

    // let sorted = '';
    // for (let i = 0; i < 2; i++) {
    //     sorted += <Creation>{JSON.stringify(artwork[i].image)}</Creation>
    // }
    // console.log('recentPics: ' + JSON.stringify(artwork.image));

    // console.log('recentPics' + JSON.stringify(artwork[1].image))
    return (
        <div>
            {/* {sorted} */}
            <Creation image={artwork[0].image}></Creation>
            <Creation image={artwork[1].image}></Creation>
            <Creation image={artwork[2].image}></Creation>
            <button><Link to='/gallery'>View More</Link></button>
        </div >
    )
}

export default RecentPics
