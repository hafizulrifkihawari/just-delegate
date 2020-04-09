import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link";

export default function NavbarMenu({ activePage }) {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>
                <Link href="/business">
                    <a
                        id="navbar-brand"
                        className="page-link"
                        style={{
                            textDecoration: 'none',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'white',
                            fontSize: '20px'
                        }}>
                        News
                    </a>
                </Link>
            </Navbar.Brand>
            <Nav activeKey={activePage}>
                <Nav.Item>
                    <Link href="/business">
                        <a
                            id="navbar-business-link"
                            className="page-link"
                            style={{
                                textDecoration: 'none',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: activePage === '/business' ? 'white' : 'grey',
                            }}>
                            Business
                        </a>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/technology">
                        <a
                            className="page-link"
                            id="navbar-technology-link"
                            style={{
                                textDecoration: 'none',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: activePage === '/technology' ? 'white' : 'grey',
                            }}>
                            Technology
                        </a>
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}