import baner from '../images/banner.svg'

export const ÜberUns = () => {
  return(
    <div className="content">
      <div className="banner-container">
        <img 
                src={baner}
                alt="baner"
            />
        <div className="text-banner">
          <h1>Über uns</h1>
        </div>
      </div>
    </div>

  )
}