import React,{useEffect} from 'react'
import{ useDispatch, useSelector} from 'react-redux'
import{Container, Row, Col} from 'react-bootstrap'
import{getAllTshirts} from '../actions/tshirtAction'
import TShirt from '../Components/Tshirt'

const Homescreen = () => {
    const dispatch =useDispatch()
    const tshirtstate = useSelector((state) =>  state.getAllTshirtReducer);
    const{ loading, tshirts, error} = tshirtstate;
    useEffect(() => {dispatch(getAllTshirts())} , [dispatch])
    return (
        <>
        <Container>
            {loading ? (<h1>Loading....</h1>)
            :error? (<h1>Error while fetching</h1>)
            :(<Row>
                {tshirts.map(tshirt =>(
                    <Col md={4}>
                        <TShirt tshirt={tshirt}/>
                    </Col>

                ))}
            </Row>)
            }
            
        </Container>
        
        
        </>
    )
}

export default Homescreen
