import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import JobSeekerService from '../services/jobSeekerService';
import { Header, Icon, Menu, Table } from 'semantic-ui-react'

export default function JobSeekerList() {
    const [jobSeekers, setjobSeekers] = useState([]);
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeeker().then(result => setjobSeekers(result.data.data))

    })

    return (
        <div>
            <Header size="large">
                <Header.Content>
                    İş Arayanlar Listesi
                </Header.Content>
            </Header>
            <Table color='blue'>
                <Table.Header >
                    <Table.Row  >
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker => (
                            <Table.Row>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.birthDate}</Table.Cell>
                                <Table.Cell>{jobSeeker.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>
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
