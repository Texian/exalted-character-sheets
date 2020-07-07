import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader'
import UserApi from '../../api/UserApi';
import Routes from '../../config/routes';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    email: '',
    id: ''
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        email: decoded.email,
        id: decoded._id
      })
    }
  }

  register = (user) => {
    UserApi.register(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
        this.setState({
          email: decoded.email,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(`User Register error: ${err}`));
  }

  login = (user) => {
    UserApi.login(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
        this.setState({
          email: decoded.email,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(`User login error: ${err}`))
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      email: '',
      id: ''
    })
  }

  render() {
    return (
      <div id="app">
        <Header 
        logout={this.logout}
        user={this.state.email}
        />
        <Routes 
        user={this.state.email}
        login={this.login}
        register={this.register}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
