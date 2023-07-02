/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      name
      desc
      folder {
        id
        name
        file {
          nextToken
          __typename
        }
        size
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      fileFolderFileId
      __typename
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        desc
        folder {
          id
          name
          size
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        fileFolderFileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFileFolder = /* GraphQL */ `
  query GetFileFolder($id: ID!) {
    getFileFolder(id: $id) {
      id
      name
      file {
        items {
          id
          name
          desc
          createdAt
          updatedAt
          fileFolderFileId
          __typename
        }
        nextToken
        __typename
      }
      size
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFileFolders = /* GraphQL */ `
  query ListFileFolders(
    $filter: ModelFileFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        file {
          nextToken
          __typename
        }
        size
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
