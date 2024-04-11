import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Homepage() {



    useEffect(() => {

        const videoElement = document.getElementById("myVideo");
        videoElement.removeAttribute("controls");


        document.body.classList.add('homepage');
        return () => {
            document.body.classList.remove('homepage');
        };
    }, []);

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };


    return (
        <div className="homepage new">


            <div className="banner-video">
            <video loop autoPlay muted width="100%" height="900" id="myVideo">
            <source src="video/hero-video-home-2022-fall.webm" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
            </div>


            <div className="about-item">
                <div className="container mt-5">
                    <div id="collapseOne" className="v-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#about">
                        <div className="about-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about-img">
                                        <img src="images/homepage/about-new.png" alt="about" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="about-new">
                                        <span>GET TO KNOW US</span>
                                        <h2 className='title-new'>The Rainbow International School</h2>
                                        <p>Rainbow international school, Nagrota is one of the best school in Himachal Pradesh, providing the highest quality and truly international standards of education. RIS holds firm in its belief that students do their best and teaching becomes productive when research is underlined as a criteria for scholarship, systematically guided by dedicated and quality teaching.</p>
                                    </div>
                                    <div className="col-frames">
                                        <NavLink className="nav-link" to="/read-more">Read More</NavLink>
                                        <NavLink className="nav-link" to="/visit-us">Visit us</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Myriad Colors of Rainbow Start */}

            <section className="myriad-section">
                <div className='container'>
                    <div className='myraid-heading'>
                        <h2 className='title-new'>Myriad Colors of Rainbow</h2>
                    </div>
                    <div className='row myriad-col'>
                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>About</h3>
                                <p>Nestled among the serene beauty of Dhauladhar, Rainbow International School stands as a beacon of excellence, nurturing minds and shaping Future.</p>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Atal Tinkering Lab/Robotics Innovation Hub</h3>
                                <p>Through Robotics,we embark on a journey of innovation forging connection between technology and human ingenuity</p>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Khelo India Residential Academy for Weightlifting</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Khelo India Residential Academy for Table-Tennis</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Gymnastics Academy</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Cricket Sub-Centre for HPCA Himachal Pradesh Cricket Association</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>German language EDUCO PREMIUM partner school</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Cambridge Based Learning</h3>
                            </div>
                        </div>


                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Microsoft Showcase School</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>British Council</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Horse Riding</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Swimming</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Sky Observatory</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <img src="images/homepage/lab.png" alt="about" />
                                <h3>Anveshika Lab</h3>
                            </div>
                        </div>

                        <div className='col-md-3'>
                        </div>

                        <div className='col-md-3'>
                        </div>

                    </div>
                </div>
            </section>

            {/* Myriad Colors of Rainbow End */}








            {/* Management’s Desk Start */}

            <div className='management-section'>
                <div className='container'>
                    <div class="mangement-content">
                        <h2 className='title-new'>Management’s Desk</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div class="principal-director">
                                <img src="images/homepage/Director.png" alt="about" />
                            </div>
                            <div class="management-heading">
                                <h4>Director's Message</h4>
                                <p>At Rainbow, we believe in the transformation power of education. It is our collective mission to inspire and empower every individual who walks through our doors. As we navigate the ever-evolving landscape of learning, Our commitment to excellence remains unwavering.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="principal-director">
                                <img src="images/homepage/Director.png" alt="about" />
                            </div>
                            <div class="management-heading">
                                <h4>Principal's Message</h4>
                                <p>Rainbow strives to become a benchmark of excellence in all vistas of education and is committed to prepare today's youth as confident, smart, solution - oriented young leaders of tomorrow. Working towards revolutionising education as part of New Education Policy, students learn discovery based, inquiry based and analysis based methods. The array of technologies boosts the understanding of concepts.  Our success lies in witnessing our students flourish with flying colours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Management’s Desk End */}


            {/* Video Section Start */}
            <div className="banner-videoedf">
                <video autoPlay muted controls width="100%" height="800">
                    <source src="video/parvani-Journey.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Video Section End */}


            {/* What parents think about schoolS Section Start */}

            <div className='parents-thing'>
                <div className='container'>
                    <div className='heading-parents'>
                        <h2 className='title-new'>What parents think about school!</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='design-parents-video'>
                            <div class="testimonial-video">
                                <iframe width="100%" height="410" src="https://www.youtube.com/embed/3u42vNuCfr8?si=kqj5ypobNHG_9R2H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                                <h4>manvi mishra</h4>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='design-parents-video'>
                            <div class="testimonial-video">
                            <iframe width="100%" height="410" src="https://www.youtube.com/embed/XPAeR0J34fU?si=smHS0Xz0aK4kqL-F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                                <h4>Somya</h4>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='design-parents-video'>
                            <div class="testimonial-video">
                                <iframe width="100%" height="410" src="https://www.youtube.com/embed/3u42vNuCfr8?si=kqj5ypobNHG_9R2H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                                <h4>manvi mishra</h4>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='design-parents-video'>
                            <div class="testimonial-video">
                                <iframe width="100%" height="410" src="https://www.youtube.com/embed/3u42vNuCfr8?si=kqj5ypobNHG_9R2H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                               <h4>manvi mishra</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What parents think about schoolS Section End */}



            {/* Rainbow Alumni Section Start */}

            <div className='homepage-new-slider'>
                <div className='container'>
                    <div className='heading-parents'>
                        <h2 className='title-new'>Rainbow Alumni</h2>
                    </div>
                    <div className='row design-parents-video'>
                        <Slider
                            slidesToShow={5}
                            dots={false}
                            arrows={true}
                            autoplay={true}
                            autoplaySpeed={2000}
                        >
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                                <h4>Sonali Dharma</h4>
                                <p>Lieutenant</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Rainbow Alumni Section End */}



            {/* RIS Collaboration with Section Start */}
            <div className='Collaboration'>
                <div className='container'>
                    <div className='heading-parents'>
                        <h2 className='title-new'>RIS Collaboration with</h2>
                    </div>
                    <div className='row design-parents-video'>
                        <Slider
                            slidesToShow={7}
                            dots={false}
                            arrows={true}
                            autoplay={true}
                            autoplaySpeed={2000}
                        >
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                            <div className='slider-pret'>
                                <img src="images/homepage/sonail.png" alt="sonali-dharma" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>



        </div >
    );
}

export default Homepage;