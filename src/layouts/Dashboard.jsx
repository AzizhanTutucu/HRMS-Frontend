import React from 'react';
import JobAdvertisementList from '../pages/JobAdvertisementList';
import { Grid } from 'semantic-ui-react'

import Categories from './Categories';
import EmployerList from '../pages/EmployerList';
import JobSeekerList from '../pages/JobSeekerList';


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <JobAdvertisementList />
                        <EmployerList/>
                        <JobSeekerList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>




        </div>
    );
}
