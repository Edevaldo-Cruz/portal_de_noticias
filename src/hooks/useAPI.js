import { useEffect, useState } from "react";
import axios from "axios";

export function useAPI(url) {
  const api = axios.create({
    baseURL: "https://newsapi.org/v2/",
  });

  const [itens, setItens] = useState([]);

  var i = 0;
  var itemNews = [];

  useEffect(() => {
    async function getNews() {
      const response = await api.get(url);

      for (var item in response.data.articles) {
        itemNews.push(response.data.articles[i]);
        i++;
      }
      setItens(itemNews);
    }
    getNews();
  }, []);

  return { itens };
}
