import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Button from '@material-ui/core/Button';
import Buttons from '../src/components/Buttons';
import AppBar from '../src/components/AppBar';
import TextField from '../src/components/TextField';
import PrimaryButton from '../src/components/PrimaryButton';
import PrimaryButtonOnDark from '../src/components/PrimaryButtonOnDark';
import SecondaryButtonOnDark from '../src/components/SecondaryButtonOnDark';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button test</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('material buttons', () =>  
  <Buttons></Buttons>
  )
  .add('App Bar', () => <AppBar/>)
  .add('Text Field', () => <TextField/>)

 storiesOf('Primary Buttons', module) 
  .add('Primary Default', () => <PrimaryButton text='NEXT' color='primary'/>)
  .add('Primary Disabled', () => <PrimaryButton text='NEXT' color='primary' disabled="true" />)
 storiesOf('Secondary Buttons', module) 
  .add('Secondary Default', () => <PrimaryButton text='NEXT' color='secondary'/>)
  .add('Secondary Disabled', () => <PrimaryButton text='NEXT' color='secondary' disabled="true"/>)
 storiesOf('Primary Buttons on dark', module) 
  .add('Primary Default', () => <div style={{padding:'10px', backgroundColor:'#3a57f9'}}> <PrimaryButtonOnDark text='NEXT' color='primary' /></div>)
  .add('Primary Disabled', () => <div style={{padding:'10px', backgroundColor:'#3a57f9'}}> <PrimaryButtonOnDark text='NEXT' color='primary' disabled="true"/></div>)
  storiesOf('Secondary Buttons on dark', module) 
  .add('Secondary Default', () => <div style={{padding:'10px', backgroundColor:'#3a57f9'}}> <SecondaryButtonOnDark  text='NEXT' color='secondary'/></div>)
  .add('Secondary Disabled', () => <div style={{padding:'10px', backgroundColor:'#3a57f9'}}> <SecondaryButtonOnDark text='NEXT' color='secondary' disabled="true"/></div>)
  
  