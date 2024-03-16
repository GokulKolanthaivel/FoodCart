import { useSelector,useDispatch } from "react-redux"
import { Card, Col, Row } from "react-bootstrap";
import { selectedCategory, selectedCategoryTitle } from "../Reducer/FoodReducer"
import CustomApi from "../Api/CustomApi";


export default function AllCategory() {

    const dispatch = useDispatch()

    const singleCategory = async (cartegory) => {
        const data = await CustomApi("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + cartegory)
        const payload = {
            "title": cartegory,
            "data": data
        }
        if (data) {
            dispatch(selectedCategory(payload))
            dispatch(selectedCategoryTitle(cartegory))
        }
    }

    const data = useSelector((state) => state.foodReducer)


    return (<>

        <div>
            <Row className="categoriesRow">
                {data?.categories?.length > 0 ? data.categories.map((item) => {
                    return (<>
                        <Col className="categoriesCol" xs={6} md={4} lg={3} xl={3} >
                            <Card className="categoriesCard">
                                <Card.Img onClick={() => { singleCategory(item.strCategory) }} className="categoriesImage" variant="top" src={item.strCategoryThumb} />
                                <Card.Body className="categoriesBody">
                                    <Card.Title onClick={() => { singleCategory(item.strCategory) }} >{item.strCategory}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </>)
                })
                    : ""}
            </Row>
        </div>
    </>)
}