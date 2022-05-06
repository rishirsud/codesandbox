import React, { useEffect, useState } from 'react';
import useBuilderModel from '../hooks/useBuilderModel';
// import { useEffect } from 'react';

export default function SomeComponent() {
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
    500
  );
  useEffect(() => {
    if (!hamburgerLoading) {
      setHamburger(hamburgerData?.menuItems);
    }
  }, [hamburgerLoading, hamburgerData]);

  const mapNames = (arr) => {
    return arr?.map((item: any, index: number) => {
      return <li key={index}>{item?.displayName}</li>;
    });
  };

  return (
    <div>
      <div>
        <h1>Nav Items</h1>
        <ul>{headerItems}</ul>
      </div>
      <div>
        <h1>Hamburger Items</h1>
      </div>
    </div>
  );
}
