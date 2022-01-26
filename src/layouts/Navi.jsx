import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react'
import { Input, Icon } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Item
                    
                        name='HRMS'

                    />
                    <Menu.Item
                    
                        name='Ana Sayfa'
                    />




                    <Menu.Menu position='right'>



                        <Menu.Item >
                            <Button.Group color='blue' >
                                <Button>Kayıt Ol</Button>
                                <Button.Or />
                                <Button>Giriş Yap</Button>
                            </Button.Group>
                        </Menu.Item>


                        <Menu.Item >
                            <Input
                                icon={<Icon name='search' circular link color='blue' />}
                                placeholder='Ara...'
                            />
                        </Menu.Item>

                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    );
}
