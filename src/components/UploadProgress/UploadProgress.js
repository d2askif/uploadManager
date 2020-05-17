import React, { useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { size, toArray } from 'lodash';
import UploadItem from './UploadItem/UploadItem';
import Styles from './UploadProgress.module.css';
import { uploadFile } from '../../redux/uploadFile/uploadFile.action';
export const UploadProgress = (props) => {
  const { fileProgress, uploadFile } = props;
  const uploadedFileAmount = size(fileProgress);

  useEffect(() => {
    const fileToUpload = toArray(fileProgress).filter(
      (file) => file.progress === 0
    );
    uploadFile(fileToUpload);
  }, [fileProgress]);

  return uploadedFileAmount > 0 ? (
    <div className={Styles.wrapper}>
      <h4>Upload File</h4>
      {toArray(fileProgress).map((file) => (
        <UploadItem key={file.id} file={file} />
      ))}
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  fileProgress: state.UploadFile.fileProgress,
});

const mapDispatchToProps = (dispatch) => ({
  uploadFile: (files) => dispatch(uploadFile(files)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadProgress);
