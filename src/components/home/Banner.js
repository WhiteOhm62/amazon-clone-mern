import React from 'react';
import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';
import './banner.css'; // Assuming you have some styles defined here

class Banner extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <Carousel
                autoPlay={true}
                swipe={true}
                animation='slide'
                indicators={false}
                interval={2500}
                navButtonsAlwaysInvisible={true} //
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: "#FFFFFF",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px"
                    }
                }}
            >
                {data.map((image, index) => (
                    <img src={image} alt={`slide-${index}`} key={index} className="banner_img" />
                ))}
            </Carousel>
        );
    }
}

Banner.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string)
};

// Example data containing image links
Banner.defaultProps = {
    data: [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ]
};

export default Banner; // Ensure that the component is exported as default

