import ComponentWrapper from '../wrapper/ComponentWrapper';
import PreviewCard from '../Preview-card/PreviewCard';
import GlobalStyle from './styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <ComponentWrapper>
          <PreviewCard />
        </ComponentWrapper>
      </main>
    </>
  );
};

export default App;
