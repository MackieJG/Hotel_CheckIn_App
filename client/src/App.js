import MainContainer from './containers/MainContainer';
import './App.css';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-weight: 800;
  font-family:'Raleway', sans-serif;
  font-size: 50px;
  text-align: center;
`

function App() {
  return (
    <div className="App">
      <PageTitle>Hotel California</PageTitle>
      <MainContainer/>
    </div>
  );
}

export default App;
