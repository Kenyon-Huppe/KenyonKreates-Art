import Creation from "../homePage/Creation"

// displays entire artwork base
const Gallery = ({ data }) => {
    let counter = 0;
    let dataHolder;
    data.forEach(element => {
        dataHolder += <Creation image={data[counter].image} ></Creation>
        counter++;
    });
    console.log(`data: ${data}`)
    console.log(`dataHolder: ${dataHolder}`)
    return (
        <div>
            {dataHolder}
        </div>
    )
}

export default Gallery
