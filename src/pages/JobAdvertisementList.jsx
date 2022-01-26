import React, { useState, useEffect } from 'react';
import { Header, Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';


export default function JobAdvertisementList() {
    const [jobAdvertisements, setjobAdvertisements] = useState([]);

    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result=>setjobAdvertisements(result.data.data))
    })

    return (
        <div>
            <Header  size='large'>
                <Header.Content size='large'  >
                    İş İlanları Listesi
                </Header.Content>
            </Header>
            <Table color='blue'>
                <Table.Header >
                    <Table.Row  >
                        <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>İlan Açıklaması</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Lokasyonu</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row>
                                <Table.Cell>{jobAdvertisement.jobPosition.positionName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPositions}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.applicationDeadLine}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
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
