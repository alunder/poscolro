/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    marginBottom: '0px',
  },
  marginBottom0: {
    marginBottom: '0px',
  },
};
class DocumentUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        // {
        //   source: "index.html",
        //   options: {
        //     type: "local"
        //   }
        // }
      ]
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* Pass FilePond properties as attributes */}
        <FilePond
          className={classes.marginBottom0}
          ref={ref => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={true}
          maxFiles={3}
          server="/api"
          oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DocumentUpload);