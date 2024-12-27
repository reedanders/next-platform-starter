'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../utils';

export function Notes() {
  const [data, setData] = useState([]);
  console.log('supabase', supabase)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('notes').select('*');
      if (error) console.error(error);
      else setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Notes Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
