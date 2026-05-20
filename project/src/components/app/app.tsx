import Main from '../../pages/main/main';

type AppProps = {
  cardsCount: number;
}

const App = ({cardsCount}: AppProps): JSX.Element => <Main cardsCount={cardsCount}/>;

export default App;
