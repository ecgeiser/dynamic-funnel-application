import './App.css';
import DisplayPage from './components/DisplayPage/DisplayPage';
import InputPage from './components/InputPage/InputPage';
import PageNavigation from './components/PageNavigation/PageNavigation';
import usePagination from './hooks/usePagination';
import useFormConfig from './hooks/useFormConfig';
import useFormState from './hooks/useFormState';

const App = () => {
  const { pageNum, setPageNum } = usePagination();
  const { config, loading } = useFormConfig();
  const { fieldValues, handleFormChange, handleFormSubmit } = useFormState();

  if (loading || !config.pages) return <div>Loading...</div>;

  const isDisplayPage = pageNum === config.pages.length;

  return (
    <div className="app-container">
      <div className="form-container">
        {isDisplayPage ? (
          <DisplayPage fieldValues={fieldValues} />
        ) : (
          <form onSubmit={handleFormSubmit}>
            <InputPage fields={config.pages[pageNum].fields} handleOnChange={handleFormChange} fieldValues={fieldValues} />
          </form>
        )}
       <PageNavigation pageNum={pageNum} setPageNum={setPageNum} maxPages={config.pages.length} />
      </div>
    </div>
  );
}

export default App;
