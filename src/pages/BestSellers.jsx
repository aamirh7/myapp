import React from 'react'
import { Button } from 'react-bootstrap'

export default function BestSellers() {
    return (
        <div>
            <div className="fashion" style={{
                textAlign: 'center',
                backgroundColor: "#f8f9fa",
            }}>
                <div className="cartsdata ">
                    <h1 >Man & Woman Fashion</h1>
                    <div className="carts" style={{
                        display: 'flex',
                        color: 'black',
                        width: '70%',
                        gap: "5px",
                        justifyContent: 'center',
                        marginTop: "20px",
                        margin: 'auto',

                        justifyContent: 'space-between',
                    }}>
                        <div className="fashion-cart backgroundcolor-white" style={{
                            backgroundColor: '#fff',
                            padding: '10px 20px'
                        }}>
                            <h2>Man T-shirt</h2>
                            <p>price $12</p>
                            <img src="https://themewagon.github.io/eflyer/images/tshirt-img.png" alt="" />
                            <div className="f-Buttons" style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Button >Buy Now</Button>
                                <Button>See More</Button>
                            </div>
                        </div>
                        <div className="fashion-cart" style={{
                            backgroundColor: '#fff',
                            padding: '10px 20px'
                        }}>
                            <h2>Man T-shirt</h2>
                            <p>price $12</p>
                            <img src="https://themewagon.github.io/eflyer/images/dress-shirt-img.png" alt="" />
                            <div className="f-Buttons" style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Button>Buy Now</Button>
                                <Button>See More</Button>
                            </div>
                        </div>
                        <div className="fashion-cart" style={{
                            backgroundColor: '#fff',
                            padding: '10px 20px'
                        }}>
                            <h2>Man T-shirt</h2>
                            <p>price $12</p>
                            <img src="https://themewagon.github.io/eflyer/images/tshirt-img.png" alt="" />
                            <div className="f-Buttons" style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Button>Buy Now</Button>
                                <Button>See More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
