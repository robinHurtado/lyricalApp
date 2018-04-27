import gql from 'graphql-tag'; // a helper lib for writing your queries in your components files

export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;