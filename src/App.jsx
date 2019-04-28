import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import store from './store/store';
import theme from './theme/theme';
// import logo from './logo.svg';
import './App.css';

// import Routes from './Routes';
import ScrollToTop from './wrappers/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Photography from './components/photography/Photography';
import ContactContainer from './containers/ContactContainer';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <div className="app">
            <Header />
            <main className="app-main">
              <About />
              <Projects />
              {/* <Photography /> */}
              <ContactContainer />
            </main>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
