import StringOne from './tools/strings/StringOne';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import './App.css';

function App() {
  return (
    <div className="App">
      <StringOne />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="onex-toast"
      />
    </div>
  );
}

export default App;
