import Creation from "../homePage/Creation"

// displays entire artwork base

// todo overall goal is to take in image artwork & send through Creation component

// todo first element is undefined
const Gallery = ({ artwork }) => {
    return (
        <div>
            {/* {artworkHolder} */}
            {artwork.map((element) => (
                <Creation image={element.image} key={element.key} ></Creation>
            ))}
        </div>
    )
}

export default Gallery
