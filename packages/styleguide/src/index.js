import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import Header from 'components/lib/Header';
import Hero from 'components/lib/Hero';
import Benefits from 'components/lib/Benefits';
import BookingWidget from 'components/lib/BookingWidget';
import Panorama from 'components/lib/Panorama';
import Footer from 'components/lib/Footer';

ReactDOM.render(
  <Catalog
    title="Catalog"
    pages={[
      {
        imports: { Header, Hero, Benefits, BookingWidget, Panorama, Footer },
        path: '/',
        title: 'Introduction',
        content: pageLoader('intro.md')
      }
    ]}
  />,
  document.getElementById('root')
);
