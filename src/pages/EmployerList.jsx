import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import EmployerService from '../services/employerService'
import { Header, Icon, Menu, Table } from 'semantic-ui-react'

export default function EmployerList() {
    const [employers, setemployers] = useState([]);
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => setemployers(result.data.data))

    })
    return (
        <div>
            <Header size="large">
                <Header.Content>
                    İş Verenler Listesi
                </Header.Content>
            </Header>
            <Table color='blue'>
                <Table.Header >
                    <Table.Row  >
                        <Table.HeaderCell>Firma Adı</Table.HeaderCell>
                        <Table.HeaderCell>Firma Email</Table.HeaderCell>
                        <Table.HeaderCell>Firma Telefon</Table.HeaderCell>
                        <Table.HeaderCell>Firma Web Sitesi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.companyPhone}</Table.Cell>
                                <Table.Cell>{employer.webSıte}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}
