import { Button, Link, Navbar } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function NavbarCom() {
    const [routes, setRoutes] = useState('')
    const router = useRouter();
  return (
    <Navbar isBordered  variant={'sticky'}>
    <Navbar.Brand>
      
      <h4  style={{fontFamily:'futura, sans-serif', fontWeight:400}}  >
        Ulises Mora
      </h4>
    </Navbar.Brand>
    <Navbar.Content activeColor={'success'} variant="highlight"  >
      <Navbar.Link  isActive={router.pathname === "/"} href="#">Projects</Navbar.Link>
      <Navbar.Link  isActive={router.pathname === "/me"} href="#">About me</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content>
      <Navbar.Item>
        <Button auto flat color="success" as={Link} href="#">
          Contact
        </Button>
      </Navbar.Item>
    </Navbar.Content>
  </Navbar>
  )
}
