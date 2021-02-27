import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import axios from 'axios';
import Avatar from 'components/Avatar';

const UPDATE_AVATAR = gql`
  mutation updateAvatar($userAttributes: UserAttributes!) {
    updateUser(attributes: $userAttributes) {
      avatar
    }
  }
`;

const upload = (params, file, updateAvatar) => {
  const data = new FormData();
  for (let key in params.fields) {
    data.set(key, params.fields[key]);
  }
  data.append('file', file);
  axios({
    headers: { ...params.header, 'Content-Type': 'multipart/form-data' },
    method: params.method,
    url: params.url,
    data: data,
  }).then(response => {
    const uploadedFileData = JSON.stringify({
      id: params.fields.key.match(/cache\/(.+)/)[1],
      storage: 'cache',
      metadata: {
        size: file.size,
        filename: file.name,
        mime_type: file.type,
      },
    });

    updateAvatar({
      variables: {
        userAttributes: {
          avatarData: uploadedFileData,
        },
      },
    });
  });
};

const AvatarEditor = props => {
  const { user } = props;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.avatar ? user.avatar : '/images/profile-logo.png');
  const onCompleted = data => {
    setImageUrl(data.updateUser.avatar);
    setLoading(false);
  };

  const onError = (error, data) => {
    console.log('error');
  };

  const onDropHandler = files => {
    setLoading(true);
    // const url = 'http://localhost:3000/s3/params';
    // const url = 'https://really-staging.herokuapp.com/s3/params';
    const url = `${process.env.API_ROOT}/s3/params`;
    files.forEach(file => {
      axios
        .get(url, {
          params: {
            filename: file.name,
            type: file.type,
          },
        })
        .then(response => {
          upload(response.data, file, updateAvatar);
        });
    });
  };
  const [updateAvatar, { data, error }] = useMutation(UPDATE_AVATAR, {
    onCompleted,
    onError,
  });
  return <Avatar loading={loading} imageUrl={imageUrl} onDrop={onDropHandler} />;
};

export default AvatarEditor;
