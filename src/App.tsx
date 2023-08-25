import './App.css'
import img from "../image/hero-image-01.jpg"
import img1 from "../image/features-03-image-01.png"
import img2 from "../image/features-03-image-02.png"
import img3 from "../image/features-03-image-03.png"
import t1 from "../image/testimonial-01.jpg"
import t2 from "../image/testimonial-02.jpg"
import t3 from "../image/testimonial-03.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons'
import Feature from './components/Feature'
import AnimatedSection from './components/Animation'
function App() {
  return (
    <>
      <div className='app pt-4'>
        <div className="text text-center mt-5">
          <h1 className='title'>
            Landing template for startups
          </h1>
          <p>
            Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
          </p>
          <div className='mt-4'>
            <button className='btn btn-primary me-4'>Start Free Trial</button>
            <button className='btn btn-secondary'>Learn More</button>
          </div>
        </div>
        <div className="video mt-5">
          <div className='img'>
            <img src={img} alt="" className='img-fluid' />
            <div className='control'>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
        </div>
        <AnimatedSection>
          <div className="features mt-5 mb-5 pt-5" >
          <div className="section-header">
            <h1 className="title">The majority our customers do not understand their workflows.</h1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="row">
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
        </AnimatedSection>
        <hr />
          <div className="products mt-5 pt-5" >
            <AnimatedSection>
              <div className="section-header">
                <h1>One product, unlimited solutions</h1>
                <p className='feature-text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
              </div>
            </AnimatedSection>
          <AnimatedSection>
            <div className="row mb-5 mt-5 pb-4">
            <div className="col-md-6 pt-5 mb-4 text-center text-md-start ">
              <span className='text-primary'>More speed. Less spend</span>
              <h3 className='mt-2'>Keep projects on schedule</h3>
              <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <ul className='list-unstyled mt-3'>
                  <li className='mb-3'><FontAwesomeIcon icon={faCheck} className='text-success me-2' /> Duis aute irure dolor in reprehenderit</li>
                  <li className='mb-3'><FontAwesomeIcon icon={faCheck} className='text-success me-2'/> Duis aute irure dolor in reprehenderit</li>
                  <li><FontAwesomeIcon icon={faCheck} className='text-success me-2'/> Duis aute irure dolor in reprehenderit</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 align-items-start align-items-md-center">
              <img src={img1} alt="" className='img-fluid' />
            </div>
          </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="row reverse mb-5 mt-5 pb-4">
            <div className="col-md-6 text-center text-md-start pt-5 ps-5 mb-4">
              <span className='text-primary'>More speed. Less spend</span>
              <h3 className='mt-2'>Keep projects on schedule</h3>
              <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <ul className='list-unstyled mt-3'>
                  <li className='mb-3'><FontAwesomeIcon icon={faCheck} className='text-success me-2' /> Duis aute irure dolor in reprehenderit</li>
                  <li className='mb-3'><FontAwesomeIcon icon={faCheck} className='text-success me-2'/> Duis aute irure dolor in reprehenderit</li>
                  <li><FontAwesomeIcon icon={faCheck} className='text-success me-2'/> Duis aute irure dolor in reprehenderit</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 align-items-start align-items-md-center">
              <img src={img2} alt="" className='img-fluid' />
            </div>
          </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="row mb-5 mt-5 pb-4">
            <div className="col-md-6 pt-5 mb-4 text-center text-md-start ">
              <span className='text-primary'>More speed. Less spend</span>
              <h3 className='mt-2'>Keep projects on schedule</h3>
              <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <ul className='list-unstyled mt-3'>
                  <li className='mb-3'><FontAwesomeIcon icon={faCheck} className='text-success me-2' /> Duis aute irure dolor in reprehenderit</li>
                  <li className='mb-3'><FontAwesomeIcon icon={faCheck} className='text-success me-2'/> Duis aute irure dolor in reprehenderit</li>
                  <li><FontAwesomeIcon icon={faCheck} className='text-success me-2'/> Duis aute irure dolor in reprehenderit</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-start align-items-md-center">
              <img src={img3} alt="" className='img-fluid' />
            </div>
          </div>
          </AnimatedSection>
        </div>
        <hr />
        <AnimatedSection>
          <div className="comments mt-5 pt-3 mb-5" >
          <div className="section-header">
            <h1>
              Don't take our word for it
            </h1>
            <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-4 p-3">
              <div className="test p-3">
                <div className="img">
                  <img src={t1} alt="" className='img-fluid'/>
                </div>
                <div className='mt-2'>
                  <p className='comment'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam facilis tempora, iste sequi mollitia, illo maiores fugiat voluptatibus impedit totam reiciendis similique repellendus eaque modi. 
                  </p>
                </div>
                <hr />
                <p className='text-white'>Anastasia Dan <span className="comment-title ms-3 text-primary fs-6 fw-bold">UX Board</span></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-3">
              <div className="test p-3">
                <div className="img">
                  <img src={t2} alt="" className='img-fluid'/>
                </div>
                <div className='mt-2'>
                  <p className='comment'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam facilis tempora, iste sequi mollitia, illo maiores fugiat voluptatibus impedit totam reiciendis similique repellendus eaque modi. 
                  </p>
                </div>
                <hr />
                <p className='text-white'>Anastasia Dan <span className="comment-title ms-3 text-primary fs-6 fw-bold">UX Board</span></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 p-3">
              <div className="test p-3">
                <div className="img">
                  <img src={t3} alt="" className='img-fluid'/>
                </div>
                <div className='mt-2'>
                  <p className='comment'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam facilis tempora, iste sequi mollitia, illo maiores fugiat voluptatibus impedit totam reiciendis similique repellendus eaque modi. 
                  </p>
                </div>
                <hr />
                <p className='text-white'>Anastasia Dan <span className="comment-title ms-3 text-primary fs-6 fw-bold">UX Board</span></p>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>
        <hr />
        <AnimatedSection>
          <div className="email pt-4 pt-md-5 pb-4 pb-md-5 mt-5">
            <div className="row align-items-center">
              <div className="col-lg-6 text-white p-3 text-center text-lg-start">
                <h4>Stay in the loop</h4>
                <p>Join our newsletter to get top news before anyone else.</p>
              </div>
              <div className="col-lg-6">
                <form className='row mb-3'>
                  <div className="col-lg-8">
                    <input type="text" className="form-control mb-3" placeholder='Your Email...'/>
                  </div>
                  <div className="col-lg-4">
                    <button className="submit d-block m-auto">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <footer>
          <div className="row pb-4 pt-5">
            <div className="col-md-6">
              <h3 className='mb-3 text-white'>Logo</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tempora tempore repellat nam voluptas magni, ab repellendus sequi, ea hic consectetur nihil quam ipsam nulla velit aliquid quas dolore assumenda?</p>
            </div>
            <div className="col-md-6  row">
                <div className=" col-sm-4 text-center">
                  <h4 className='mb-3 ms-0'>Test</h4>
                  <ul className='list-unstyled '>
                    <li className='mb-2'>Link </li>
                    <li className='mb-2'>Link </li>
                    <li className='mb-2'>Link </li>
                    <li>Link </li>
                  </ul>
                </div>
                <div className=" col-sm-4 text-center">
                  <h4 className='mb-3 ms-0'>Test</h4>
                  <ul className='list-unstyled '>
                    <li className='mb-2'>Link </li>
                    <li className='mb-2'>Link </li>
                    <li className='mb-2'>Link </li>
                    <li>Link </li>
                  </ul>
                </div>
                <div className="col-sm-4 text-center">
                  <h4 className='mb-3 ms-0'>Test</h4>
                  <ul className='list-unstyled '>
                    <li className='mb-2'>Link </li>
                    <li className='mb-2'>Link </li>
                    <li className='mb-2'>Link </li>
                    <li>Link </li>
                  </ul>
                </div>
            </div>
          </div>
        </footer>
        </AnimatedSection>
        
      </div>
    </>
  )
}

export default App
