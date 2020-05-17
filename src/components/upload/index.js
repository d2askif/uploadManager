import React from 'react';
import { connect } from 'react-redux';
import {
  makeStyles,
  Paper,
  Button,
  Typography,
  IconButton,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Chip,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import Cloud from '@material-ui/icons/CloudUploadOutlined';
import Plus from '@material-ui/icons/Add';
import { setUploadFile } from '../../redux/uploadFile/uploadFile.action';
import UploadProgress from '../UploadProgress/UploadProgress';
import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: 16,
    padding: 64,
  },
  files: {
    display: 'flex',
    flex: 3,
    alignItems: 'center',
  },
  addFilesButton: {
    backgroundColor: '#2CC9A2',
    borderRadius: 24,
    paddingTop: 12,
    paddingBottom: 12,
    width: 200,
  },
  uploadButton: {
    backgroundColor: '#65ABFE',
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    paddingBottom: 12,
    minWidth: 250,
  },
  close: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  uploadContainer: {},
  formControl: {
    margin: theme.spacing(1),
    marginLeft: 0,
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 32px;
  text-align: left;
`;
const Upload = styled.div`
  padding: 8px;
  min-height: 250px;
  background-color: #f2f2f2;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const Options = styled.div`
  text-align: left;
  margin-top: 16px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: row;
`;
const Footer = styled.div`
  text-align: left;
`;
const AddFiles = styled.div`
  flex: 2;
  padding-right: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UploadFile = (props) => {
  const classes = useStyles();

  const handleInput = (e) => {
    console.log('upload file', e.target.files);
    props.setUploadFiled(e.target.files);
    e.target.value = '';
  };
  return (
    <Paper className={classes.root}>
      <div className={classes.close}>
        <IconButton>
          <Close></Close>
        </IconButton>
      </div>
      <Header>
        <Typography variant='h5' component='h1' color='textPrimary'>
          Upload Video
        </Typography>
        <Typography
          variant='body1'
          component='span'
          gutterBottom
          color='textSecondary'
        >
          Add video files to upload
        </Typography>
      </Header>
      <Upload>
        <div className={classes.files}>
          <IconButton>
            <Cloud color='disabled' fontSize='large'></Cloud>
            <Typography
              style={{ marginLeft: 8 }}
              variant='body1'
              component='h4'
              color='textSecondary'
            >
              There is no file to upload
            </Typography>
          </IconButton>
          <input
            placeholder='file'
            type='file'
            multiple
            onChange={handleInput}
          />
          <UploadProgress />
        </div>
        <AddFiles>
          <Button
            className={classes.addFilesButton}
            variant='contained'
            color='primary'
          >
            Add file
          </Button>
        </AddFiles>
      </Upload>
      <hr style={{ height: 1, backgroundColor: '#ddd', border: 'none' }}></hr>
      <div style={{ textAlign: 'left', paddingTop: 8 }}>
        <Typography
          variant='subtitle1'
          component='span'
          gutterBottom
          color='textSecondary'
        >
          Select group and add tags for the upload
        </Typography>
      </div>

      <Options>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel id='demo-simple-select-outlined-label'>Group</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={30}
            onChange={() => {}}
            label='Age'
          >
            <MenuItem value=''>
              <em>Select group</em>
            </MenuItem>
            <MenuItem value={10}>Dc1e</MenuItem>
            <MenuItem value={20}>Cf1e</MenuItem>
            <MenuItem value={30}>Cx1e</MenuItem>
          </Select>
        </FormControl>

        <div style={{ marginLeft: 80 }}>
          <Typography
            variant='body1'
            component='h4'
            color='textPrimary'
            gutterBottom
          >
            Tags
          </Typography>
          <Chip
            onDelete={() => {}}
            onClick={() => {}}
            label='Dc1e '
            color='primary'
            style={{ minWidth: 70, marginRight: 8 }}
          />
          <Chip
            label='EF1e '
            color='default'
            style={{ minWidth: 70, marginRight: 8 }}
            onDelete={() => {}}
          />
          <Chip
            icon={<Plus></Plus>}
            label='Add tag'
            variant='outlined'
            style={{ paddingRight: 8 }}
          />
        </div>
      </Options>
      <Footer>
        <Button
          className={classes.uploadButton}
          variant='contained'
          color='primary'
        >
          Upload files
        </Button>
        <Typography
          component='span'
          color='textSecondary'
          style={{ paddingLeft: 32, paddingRight: 32 }}
        >
          or
        </Typography>
        <Button variant='text' color='primary'>
          Cancel
        </Button>
      </Footer>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUploadFiled: (files) => dispatch(setUploadFile(files)),
});
export default connect(null, mapDispatchToProps)(UploadFile);
