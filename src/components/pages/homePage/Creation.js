// houses individual imgs of individual creations

// todo input is of given picture (from state in App.js)
// todo wrap in card

const Creation = ({ image }) => {
    console.log(image)
    return (
        <div>
            <img src={image} alt="Artwork" width={700} />
        </div>
    )
}

export default Creation
