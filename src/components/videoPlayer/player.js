import ReactPlayer from 'react-player'

const Player=({url})=>{
    return(
        <div>
            <ReactPlayer
            url={url}
            width='100%'
            height='100vh'
            />
        </div>
    )

}
export default Player