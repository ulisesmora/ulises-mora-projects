import { Button, Link, Modal, Navbar, Text, Input } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function NavbarCom() {
    const [routes, setRoutes] = useState('')
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };

    function ChangeRoute(route:string){
        router.push(route);
    }
  return (
    <Navbar isBordered  variant={'sticky'}>
    <Navbar.Brand hideIn="xs">
      
      <h4  style={{fontFamily:'futura, sans-serif', fontWeight:400}}  >
        Ulises Mora
      </h4>
    </Navbar.Brand>
    <Navbar.Content activeColor={'success'} variant="highlight"  >
      <Navbar.Link  isActive={router.pathname === "/"} onClick={() => ChangeRoute("/")}>Projects</Navbar.Link>
      <Navbar.Link  isActive={router.pathname === "/about-me"} onClick={() => ChangeRoute("/about-me")}>About me</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content>
      <Navbar.Item>
        <Button auto onPress={handler} flat color="success" as={Link} href="#">
          Contact
        </Button>
      </Navbar.Item>
    </Navbar.Content>
    <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Contact me By Email or Phone 
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            bordered
            readOnly
            fullWidth
            color="primary"
            size="lg"
            initialValue='ulisesmora3@gmail.com'
          />
          <Input
            bordered
            readOnly
            fullWidth
            color="primary"
            size="lg"
            initialValue='+525526715393'

          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </Navbar>
  )
}
