import React, { useState } from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Activity } from '../../../models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEditForm: (activity: Activity) => void;
}

export default function ActivityDashboard({ activities, selectedActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEditForm }: Props) {

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm} />
                }
                {editMode &&
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEditForm={createOrEditForm}/>
                }
            </Grid.Column>

        </Grid>
    )
}