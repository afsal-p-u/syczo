import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { store, persistor } from './redux/store.ts'
import { AllProductContextProvider } from './context/AllProductContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <AuthContextProvider>
        <BrowserRouter>
          <AllProductContextProvider>
            <App />
          </AllProductContextProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </PersistGate>
  </Provider>
)
