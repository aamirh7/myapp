import React from 'react'
import { ButtButton, on, Container, Form, Span, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function NavbarComponent() {
    return (
        <div>
            <div className="hero" style={{
                backgroundImage: 'url("https://themewagon.github.io/eflyer/images/banner-bg.png")',
                width: '100%',
                height: '100vh',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                float: 'left',
                backgroundColor: "#f26522",
            }}>
                <div className="firstheader font-bold italic"
                    style={{
                        margin: "auto", padding: "20px", alignItems: "center", width: "60%", justifyContent: "center", backgroundColor: "#343a40", color: "white", listStyle: "none", clipPath: "polygon(0 1%, 100% 0, 95% 100%, 6% 100%)",
                    }}>
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        cursor: 'pointer',
                        listStyle: 'none',
                        width: '90%',
                        gap: '40px',

                    }}>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Best Sellers</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="/GiftIdeas">Gift Ideas</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="">New Releases</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="">Today's Deals</Link></li>
                        <li><Link style={{ textDecoration: "none", color: "white" }} to="">Customer Service</Link></li>
                    </ul>
                </div>
                <div className="manuebar">
                    <div className="manuedata" style={{
                        margin: 'auto',
                        marginTop: '20px',
                        padding: '10px 0px',
                        backgroundColor: 'none',
                        display: 'flex',
                        width: '60%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: '5px',
                    }}>
                        <i className="fa-fa" fa fa-bars style={{
                            color: 'white',
                            padding: '10px 0px',
                        }}></i>
                        <Button style={{
                            padding: '10px 5px',
                            color: 'white',
                            backgroundColor: 'black',
                            border: 'none',
                            borderRadius: '5px',

                        }}
                        >All Ctageroy</Button>
                        <div className="searchButton" style={{ padding: "20px 30px", color: "white", border: "none", borderRadius: "5px", }}
                        >
                            <input type="Search for " placeholder="Search for" style={{ color: "black", }} />
                            <FaShoppingCart className="fa-fa" fa-search></FaShoppingCart>
                        </div>
                        <div className="carts" style={{
                            gap: '0px',
                            backgroundColor: 'none',
                            color: 'white',
                        }}>
                            <FaShoppingCart className="fa-fa" fa fa-shoping-cart style={{ display: 'flex' }}></FaShoppingCart>
                            <span>CART</span>
                            <FaShoppingCart className="fa-fa" fa fa-bars></FaShoppingCart>
                            <span>CART</span>
                        </div>
                    </div>
                </div>
                <div className="mainheading text-4xl bold" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    <h1 style={{
                        fontSize: "70px", fontWeight: "bold", fontstyle: "italic", width: "40%",
                        color: "white", textAlign: "center",
                    }}>Get Start Your Favriot Shoping</h1>
                    <Button className='byNow' style={{
                        border: "none",
                        padding: '15px 20px',
                        color: 'white',
                        backgroundcolor: 'black',
                        fontweight: '500',
                        fontsize: 'large',
                        cursor: 'pointer',
                        backgroundColor: 'black',
                    }}>Buy Now</Button>
                </div>
            </div>
        </div >
    )
}

