import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import axios from 'axios';
import Avatar from 'components/Avatar';

const AvatarEditor = props => {
  const { project, updateAvatar } = props;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(project.avatar ? project.avatar : '/images/profile-logo.png');

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

      updateAvatar(uploadedFileData); //call parent's updateAvatar function
      setLoading(false);

    });
  };

  const onDropHandler = files => {
    setLoading(true);
    const url = `${process.env.API_ROOT}/s3/params`;
    setImageUrl(URL.createObjectURL(files[0]));
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
  return <Avatar loading={loading} imageUrl={imageUrl} onDrop={onDropHandler} />;
};

export default AvatarEditor;
