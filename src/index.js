import {Excel} from './components/excel/Excel';
import {HeaderComponent} from './components/header/HeaderComponent';
import {ToolbarComponent} from './components/toolbar/ToolbarComponent';
import {FormulaComponent} from './components/formula/FormulaComponent';
import {TableComponent} from './components/table/TableComponent';
import {rootReducer} from './redux/rootReducer';
import './module';
import './scss/index.scss';
import {createStore} from './core/createStore';

const store = createStore(rootReducer, {
  tableTitle: 'my table ',
});


const excel = new Excel('#app', {
  components:
  [
    HeaderComponent,
    ToolbarComponent,
    FormulaComponent,
    TableComponent,
  ],
  store,
});

excel.render();

