import React from 'react'
import {Container, Row, Col, Table, Image} from 'react-bootstrap'
import{GiVibratingSmartphone} from 'react-icons/gi';
import{MdEmail} from 'react-icons/md';
import{FaTelegram} from 'react-icons/fa';


const Contact = () => {
    return (
        <>
        <Container style={{marginTop:'50px'}}>
            <Row>
                <Col md={6}>
                    <h1> Rewash Tee Shop</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe earum consequuntur odit est quam? Culpa ex provident modi porro corporis, minus vel architecto molestiae eligendi distinctio molestias maxime eaque, doloremque iure quo dolorem, nisi vero dicta sapiente tempora. Ut reprehenderit facere facilis nesciunt error sequi, ipsam officiis commodi, ex, obcaecati repellat possimus earum consectetur dolorem ad explicabo maxime cupiditate tenetur velit quia rem hic praesentium porro! Recusandae fuga ex beatae illo minima? Perferendis labore deleniti, ea reprehenderit veniam iste magnam laborum aut a sit ipsum alias, et aperiam cum officia quidem tenetur ducimus adipisci omnis quos. Praesentium delectus, fuga dolore unde minima ab temporibus neque, officia veritatis laudantium enim rerum eos alias amet obcaecati omnis sequi consequatur illo magnam consequuntur? Consequatur fugiat ratione enim iste quis, debitis dolorem labore esse beatae cumque, quibusdam architecto nobis laboriosam nesciunt quia. Placeat suscipit voluptatem corrupti debitis repudiandae sequi molestias, quisquam deserunt adipisci ipsum, facilis aspernatur ab perferendis in quos modi corporis quae unde necessitatibus, ad rerum eaque excepturi nulla consequatur. Architecto error doloribus ab magnam animi quibusdam quasi praesentium! Deserunt aperiam nisi animi ad accusamus, magni dolorem autem iste, odit dolorum, nobis inventore et quibusdam! Corporis alias voluptatem culpa quam excepturi vel enim!</p>
                    <Table striped bordered hover className="text-center">
  <thead>
    <tr>
      <th className=" bg-warning text-center" colSpan={3}> Contact Details</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><GiVibratingSmartphone/></td>
      <td>Phone</td>
      <td>766743537</td>
      
    </tr>
    <tr>
      <td><FaTelegram/></td>
      <td>Telegram</td>
      <td>766743897</td>
      
    </tr>
    <tr>
      <td><MdEmail/></td>
      <td>Email</td>
      <td>iamrewash@gmail.com</td>
      
    </tr>
    
  </tbody>
</Table>
                </Col>
                <Col md={6}>
                <Image src="images/image.png" style={{width: '90%', height: '90%'}}/>
                </Col>
            </Row>

        </Container>
        
        </>
    )
}
export default Contact;
