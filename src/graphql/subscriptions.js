/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile($filter: ModelSubscriptionFileFilterInput) {
    onCreateFile(filter: $filter) {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile($filter: ModelSubscriptionFileFilterInput) {
    onUpdateFile(filter: $filter) {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile($filter: ModelSubscriptionFileFilterInput) {
    onDeleteFile(filter: $filter) {
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
export const onCreateFileFolder = /* GraphQL */ `
  subscription OnCreateFileFolder(
    $filter: ModelSubscriptionFileFolderFilterInput
  ) {
    onCreateFileFolder(filter: $filter) {
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
export const onUpdateFileFolder = /* GraphQL */ `
  subscription OnUpdateFileFolder(
    $filter: ModelSubscriptionFileFolderFilterInput
  ) {
    onUpdateFileFolder(filter: $filter) {
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
export const onDeleteFileFolder = /* GraphQL */ `
  subscription OnDeleteFileFolder(
    $filter: ModelSubscriptionFileFolderFilterInput
  ) {
    onDeleteFileFolder(filter: $filter) {
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
