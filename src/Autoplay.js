import Slider from "react-slick";
import styled from "styled-components";


const Autoplay = () => {

  const settings = {      
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    
    <Wrapper>
    <h3>Trusted By 1000+ Companies</h3>
        <Slider {...settings}>
          <div>
          <img
              src="./images/1.jpg"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/12.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/123.jpg"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/1234.jpg"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/12345.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/008.jpg"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/12345.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/12.png"
              alt="trusted-brands"
            />
          </div>
        </Slider>
      </Wrapper>
    )
  }
  


const Wrapper = styled.section`

  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
 

  img {
    min-width: 10rem;
    height: 10rem;
    margin-top: 3.2rem;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
`
;
    

export default Autoplay;  