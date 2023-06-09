import {useState, useEffect} from 'react'

export const Tile = ({shape}) => {
    const [icon, setIcon] = useState()

    useEffect(() => {
        const test = async () => {
            const result =  await import(`../../img/${shape}.png`)
            setIcon(result.default)
        }
        test()
        // .then((data) => {
        //     setIcon(data.default)
        // })
       
        // import(`../../img/${shape}.png`)
        // .then((data) => {
        //     setIcon(data.default)
        // })
    },[])
   
    return (
        <div>
            <img src={icon} />
        </div>
    )
}