import { useEffect, useState } from 'react';
import { builder } from '@builder.io/react';

/**
 * @param model the specific to fetch
 * @param title title of the specific data model
 * @param delay the delay in milliseconds to fetch the data
 * @returns data from builder api, boolean for loading
 */
const useBuilderModel = (model: string, title: string, delay: number) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    builder
      .get(model, {
        query: {
          'data.title': title,
        },
      })
      .promise()
      .then(({ data }) => {
        setLoading(false);
        setData(data);
        console.log('useModel', data);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(`Delayed ${title} for ${delay}ms`);
      fetchApi();
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data };
};

export default useBuilderModel;
