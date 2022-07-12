import { createContext, useState, useEffect } from 'react';
import { gql,useQuery } from '@apollo/client';


export const CategoriesContext = createContext({
  categoriesMap: {},
});

const COLLECTIONS =  gql`
  query GetCollections{
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const CategoriesProvider = ({ children }) => {
  const {loading,error,data} = useQuery(COLLECTIONS);
  const [categoriesMap, setCategoriesMap] = useState({});

  // console.log(loading)
  // console.log(data)
  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoryMap = await getCategoriesAndDocuments();
    //   setCategoriesMap(categoryMap);
    // };

    // getCategoriesMap();
    if(data){
      const {collections} = data;
      // setCategoriesMap(collections);
      const collectionMap = collections.reduce((acc,collection) => {

        const {title,items} = collection;

        acc[title.toLowerCase()] = items;
        return acc;
      },{});

      setCategoriesMap(collectionMap);
    }
  }, [data]);

  const value = { loading , categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
