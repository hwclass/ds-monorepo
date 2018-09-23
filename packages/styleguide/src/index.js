import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import Another from 'components/lib/Another';
import Hello from 'components/lib/Hello';
import Header from 'components/lib/Header';
import Footer from 'components/lib/Footer';

ReactDOM.render(
  <Catalog
    title="Catalog"
    pages={[
      {
        imports: { Header, Another, Hello, Footer },
        path: '/',
        title: 'Introduction',
        content: pageLoader('intro.md')
      }
    ]}
  />,
  document.getElementById('root')
);
