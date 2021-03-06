import React, { useEffect, useState } from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { builder } from '@builder.io/react';
import useBuilderModel from '../hooks/useBuilderModel';

builder.init('');

function MyApp() {
  const [headerItems, setHeaderItems] = useState([]);
  const [hamburger, setHamburger] = useState([]);

  const { loading: navLoading, data: navData } = useBuilderModel(
    'navigation',
    'Header Navigation',
    0
  );
  useEffect(() => {
    if (!navLoading) {
      setHeaderItems(navData?.menuItems);
    }
  }, [navLoading, navData]);

  const { loading: hamburgerLoading, data: hamburgerData } = useBuilderModel(
    'navigation',
    'Hamburger Navigation',
    0
  );
  useEffect(() => {
    if (!hamburgerLoading) {
      setHamburger(hamburgerData?.menuItems);
    }
  }, [hamburgerLoading, hamburgerData]);

  return (
    <div>
      <p>Look in the console</p>
    </div>
  );
}

export default MyApp;
