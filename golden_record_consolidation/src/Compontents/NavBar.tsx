import React from 'react';
import { AppBar } from '@tamr/apps-ui';

// Define a functional component named NavBar
const NavBar: React.FC = () => {
  return (
    // Render an AppBar component with various props
    <AppBar
      // Set featureFlagAlert to false
      featureFlagAlert={false}
      // Set appItems to an array of objects representing menu items
      appItems={[
        {
          displayText: 'Studio',
          iconName: 'static/media/src/stories/assets/direction.svg',
          route: '/app/registry'
        },
        {
          displayText: 'Designer',
          iconName: 'static/media/src/stories/assets/flow.svg',
          route: '/app/designer'
        },
        {
          displayText: 'Publish',
          iconName: 'static/media/src/stories/assets/plugin.svg',
          route: '/app/publish'
        },
        {
          displayText: 'Admin',
          iconName: 'static/media/src/stories/assets/repo.svg',
          route: '/app/admin'
        },
        {
          displayText: 'Curator',
          iconName: 'static/media/src/stories/assets/colors.svg',
          route: '/app/curator'
        }
      ]}
      // Set appName to "studio"
      appName="studio"
      // Set entityTypeId to "01-2345-6789"
      entityTypeId="01-2345-6789"
      // Set featureFlags to an array of objects representing feature flags
      featureFlags={[
        {
          key: 'enableNewHomePage',
          value: true
        }
      ]}
      // Set flowId to "01-2345-6789"
      flowId="01-2345-6789"
      // Set generalProperties to an object representing general properties
      generalProperties={{
        appicon: './Burst.png',
        appname: 'studio',
        approute: '',
        apptitle: '',
        firstname: '',
        lastname: '',
        notificationChannel: '',
        overrideroute: '',
        resizelogo: 'true',
        role: 'Data Citizen',
        slackchannel: '#clicktesting',
        username: 'dc'
      }}
      // Set privileges to an array of objects representing privileges
      privileges={[
        {
          resources: [
            '01-2345-6789'
          ],
          scope: 'view'
        }
      ]}
    />
  );
};

export default NavBar;
