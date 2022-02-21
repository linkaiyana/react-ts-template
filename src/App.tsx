import { Provider} from 'react-redux'

import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';

import Layout from './pages/Layout';

import store from './store'

import './App.less';

import './utils/request'

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={locale}>
        <Layout />
        <div className='layout'>1234</div>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
