import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, FluentProvider, webLightTheme } from '@fluentui/react-components';

function App() {
  return (
      <FluentProvider theme={webLightTheme}>
        <Dialog>
          <DialogTrigger disableButtonEnhancement>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                exercitationem cumque repellendus eaque est dolor eius expedita
                nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
                in natus iure cumque eaque?
              </DialogContent>
              <DialogActions>
                <Button appearance="primary">Do Something</Button>
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary">Close</Button>
                </DialogTrigger>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      </FluentProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
