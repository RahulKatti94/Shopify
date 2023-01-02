import Slider from "react-slick";
import styled from "styled-components";


const Autoplay2 = () => {

    const settings = {      
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        rtl: true,
      }
  return (
    <Wrapper>
        <h3>Co-Powered By</h3>
        <Slider {...settings}>
          <div>
          <img
              src="./images/001.jpg"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/002.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/003.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/004.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/005.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/006.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/009.png"
              alt="trusted-brands"
            />
          </div>
          <div>
          <img
              src="./images/010.png"
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
    height: 6rem;
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
    

export default Autoplay2;  