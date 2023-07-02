/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
export const createFileFolder = /* GraphQL */ `
  mutation CreateFileFolder(
    $input: CreateFileFolderInput!
    $condition: ModelFileFolderConditionInput
  ) {
    createFileFolder(input: $input, condition: $condition) {
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
export const updateFileFolder = /* GraphQL */ `
  mutation UpdateFileFolder(
    $input: UpdateFileFolderInput!
    $condition: ModelFileFolderConditionInput
  ) {
    updateFileFolder(input: $input, condition: $condition) {
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
export const deleteFileFolder = /* GraphQL */ `
  mutation DeleteFileFolder(
    $input: DeleteFileFolderInput!
    $condition: ModelFileFolderConditionInput
  ) {
    deleteFileFolder(input: $input, condition: $condition) {
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
