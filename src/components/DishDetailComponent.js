
import React from 'react';
import {
    Card, CardBody, CardText, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <React.Fragment>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

function RenderComments({ comments }) {
    if (comments != null) {
        const listItems = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            )
        });

        return (
            <React.Fragment>
                <h4>Comments</h4>
                <ul className="list-unstyled">{listItems}</ul>
            </React.Fragment>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}



function RenderDishDetail({ dish, comments }) {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={comments} />
                </div>
            </div>
        </div>
    );

}


function DishDetail(props) {

    return (

        <div className="container">
            <div className="row">
                <RenderDishDetail dish={props.dish} comments={props.comments} />
            </div>
        </div>


    );

}


export default DishDetail;