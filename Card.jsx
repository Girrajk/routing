import React from "react";


const Card = ({ image, title, description, buttonText }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="https://www.google.com/search?sca_esv=e7797bdb7d6c7883&q=images&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J03RPjGV0MznOJ6Likin94pFugSF3qNXU-bmocCXuW3H9Kul4pWE_82GWUrujA1d5CG-opxlDwcwx4yD9-fcbhfTD068dcRBhwlATE2o7U1bLj8PFwfwOREdYDwhEZKRtPv9oLegwGOOA7GBjU1dSG3TjIRg7S8-GFsneR1xvVLAKgIzMA&sa=X&ved=2ahUKEwjx2cGdv-iKAxVWT2wGHRWUCCEQtKgLegQIHxAB&biw=1707&bih=801&dpr=0.8#vhid=tYmxDgFq4MrkJM&vssid=mosaic" className="btn btn-primary">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;