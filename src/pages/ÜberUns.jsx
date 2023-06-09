import baner from '../images/baner.png'
import home from '../images/home.png'
import arrow from '../images/arrow.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import tir from '../images/tir.png'
import { ImageSlider } from '../components/Slider'

export const ÜberUns = () => {
  return(
    <div className="content">
      <div className='homenav-container'>
        <img 
                  src={home}
                  alt="home"
                  className='home'
              />
        <p className='home-seite'>Startseite</p>
        <img 
                  src={arrow}
                  alt="baner"
              />
        <p className='home-uber'>Uber Uns</p>
      </div>
      <div className="banner-container">
        <img 
                src={baner}
                alt="baner"
                className='banner-image'
            />
        <div className="text-banner">
          <h1>Über uns</h1>
        </div>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img className="image1" src={image1} alt="image1" />
          <img className="image2" src={image2} alt="image2" />
        </div>
        <div className="text-container">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus, mauris efficitur ornare rhoncus, libero ex rutrum tortor, ut viverra mi odio ac purus. Pellentesque convallis id lectus auctor efficitur. Donec faucibus, magna quis tristique aliquet</h2>
          <p>Fusce ac finibus ipsum, vel mollis lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque suscipit quam non nulla sollicitudin hendrerit. Praesent dictum tempus neque. Donec et lacus quis felis ultrices mattis.</p>
          <p>Quisque tempor aliquet dui, sed dignissim augue varius vel. Maecenas ut lacinia orci. Sed efficitur finibus arcu in porta. Donec sed tempus neque, eu fringilla orci. Sed tincidunt nulla quis est fringilla rhoncus. In neque purus, suscipit id hendrerit quis, pulvinar faucibus felis.
          In semper sapien sit amet dolor lobortis, interdum mollis sapien pretium. Phasellus euismod ullamcorper turpis vel pretium. Vivamus id convallis enim. Pellentesque eleifend felis sit amet elit faucibus, ac auctor urna feugiat. Sed eu sagittis urna. Pellentesque nunc felis, molestie a mauris et, pellentesque ultricies velit. Pellentesque elementum eu ante lacinia dapibus. In facilisis dolor ac felis vehicula, vitae tincidunt libero hendrerit.</p>
          <p>Donec ultricies lorem in mi tincidunt ornare. Etiam non turpis lacus. Donec scelerisque tellus in turpis tristique, et imperdiet sem mollis. Nam fermentum non sem id viverra. Sed quis arcu rutrum, ornare tortor id, lobortis metus. Fusce ornare ligula eu urna dignissim, ut condimentum odio tempor. Proin eu est enim. Nam lacus leo, accumsan nec quam nec, fermentum molestie orci. Morbi in nisi vitae arcu rutrum ornare eu at nulla.</p>
        </div>
      </div>
      <div className="bottom-content">
        <div className="bottom-text">
          <span>Nunc feugiat imperdiet dolor, sit amet consectetur tortor facilisis ac. Vivamus quam neque, euismod porttitor magna et, finibus tincidunt justo. Nullam vehicula velit sed diam sagittis, eget pretium nisi mollis. Etiam in risus nibh. Curabitur feugiat pulvinar enim, in blandit massa suscipit id. Donec mollis vel lacus sit amet rhoncus.</span>
          <p>Pellentesque tempus nunc sit amet erat placerat, eu varius sem sollicitudin:</p>
          <ul>
            <li>Nam in massa gravida</li>
            <li>Nam in massa gravida</li>
            <li>Nam in massa gravida</li>
          </ul>
          <p>Mauris sollicitudin lorem in orci porta, ac tincidunt neque consequat. Sed dictum diam vehicula aliquet vehicula. Vivamus ultrices facilisis sollicitudin. Duis vel mi non eros porttitor imperdiet. Pellentesque tempor nunc sed mi laoreet venenatis.</p>
        </div>
        <div className="bottom-image">
          <img src={tir} alt="tir" />
        </div>
      </div>
      <ImageSlider />
    </div>
  )
}