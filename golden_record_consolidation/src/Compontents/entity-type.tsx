
import { entityTypeV2} from '@tamr/apps-ui'
import React from 'react'
import ExpandButton from './expand-button'
import '../css/expand.css'

export const EntityCard = () => {
  return (
    <div style={{ ...entityTypeV2.card.css, width: '95%'}}>
      <ExpandButton>
       <div className='entity-input-box'></div>
      </ExpandButton>
      
    </div>
  );
};
