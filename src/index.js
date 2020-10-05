import {Excel} from './components/excel/Excel';
import {HeaderComponent} from './components/header/HeaderComponent';
import {ToolbarComponent} from './components/toolbar/ToolbarComponent';
import {FormulaComponent} from './components/formula/FormulaComponent';
import {TableComponent} from './components/table/TableComponent';

import './module';
import './scss/index.scss';


const excel = new Excel('#app', {
  components:
  [
    HeaderComponent,
    ToolbarComponent,
    FormulaComponent,
    TableComponent,
  ],
});

excel.render();

