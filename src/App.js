import {Routes, Route} from 'react-router-dom';
import FrontEndIndex from './frontend/Index';
import BackEndIndex from './backend/Index';

function App() {
  return (
      <Routes>
        <Route exact path="/*" element={<FrontEndIndex />} />
        <Route exact path="admin" element={<BackEndIndex />} />
      </Routes>
  );
}

export default App;
