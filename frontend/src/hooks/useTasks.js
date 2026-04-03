import { useState, useEffect } from 'react';
import { fetchTasks } from '../api';

export function useTasks(query = '', status = '', page = 1, pageSize = 10) {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Calling API...");

    setLoading(true);
    setError(null);

    fetchTasks({ query, status, page, pageSize })
      .then((data) => {
        console.log("API DATA:", data);
        setTasks(data.items || []);
        setTotal(data.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [query, status, page, pageSize]);

  return { tasks, total, loading, error };
}