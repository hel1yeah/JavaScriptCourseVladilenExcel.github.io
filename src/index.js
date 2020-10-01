import {Excel} from '@/components/excel/Excel';
import {HeaderComponent} from '../src/components/header/HeaderComponent';
import {ToolbarComponent} from '../src/components/toolbar/ToolbarComponent';
import {FormulaComponent} from '../src/components/formula/FormulaComponent';
import {TableComponent} from '../src/components/table/TableComponent';

import './module';
import './scss/index.scss';


const excel = new Excel('#app', {
  components: [HeaderComponent, ToolbarComponent, FormulaComponent, TableComponent],
});

excel.render();
