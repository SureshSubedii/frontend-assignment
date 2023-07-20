import loading from './loadingImage.gif'
export default function Spinner():JSX.Element {
  
    return (
      <div className='grid place-items-center'><img src={loading} alt='Loading'  />Please Wait... </div>
    )
  }
