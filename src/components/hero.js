
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/img-hero1.jpg'
import image2 from '../assets/images/img-hero2.jpg'
import image3 from '../assets/images/img-hero3.jpg'


var heroData = [
    {
      id: 1,
    //   image: require(image1),
      title: 'The perfect design for your website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
    //   image: require(image2),
      title: 'Start Your Future Financial Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
    //   image: require(image3),
      title: 'Enjoy the Difference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    }
  ]


function hero() {
  return (
    <div>
        <section id='hero' className='hero'>
            <Carousel>
                {
                  heroData.map((here,index) =>{
                    return(
                        <Carousel.Item key={hero}>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt={"slide " + hero.id}
                            />
                            <Carousel.Caption>
                                <h2>{hero.title}</h2>
                                <p>{hero.description}</p>
                                <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                            </Carousel.Caption>             
                        </Carousel.Item>
                    )
                  })  
                }
            </Carousel>
        </section>
    </div>
  )
}

export default hero

