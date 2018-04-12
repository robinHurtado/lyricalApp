import gql from 'graphql-tag'; // a helper lib for writing your queries in your components files

export default gql`
  {
    songs {
      id
      title
    }
  }
`;