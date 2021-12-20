import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      console.log(response)
      setActivities(response.data)
    })
  }, [])

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(activity =>
      activity.id === id
    ))
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined)
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity()
    setEditMode(true);
  }

  function handleFormClose(id?: string) {
    //id ? handleSelectActivity(id) : handleCancelSelectActivity()
    //setEditMode(true);
  }

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        />
      </Container>
    </Fragment>
  );
}

export default App;
