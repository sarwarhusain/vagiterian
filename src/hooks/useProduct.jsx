import React, { useEffect, useState } from "react";

const useProduct = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("vagitable.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  return [menu, loading];
};

export default useProduct;
