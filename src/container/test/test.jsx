import React from 'react'
import { ImagePicker, WingBlank, SegmentedControl, Button } from 'antd-mobile';
import axios from 'axios'

class Test extends React.Component {
  state = {
    files: [],
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    console.log(index)
    this.setState({
      multiple: index === 1,
    });
  }
  handleClick = () => {
    const formData = new FormData()
    formData.append('type', 'image')
    formData.append('file', this.state.files[0].file)

    axios.put('/test/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(data => {
      console.log(data)
    }).catch(e => console.log(e))
  }

  render() {
    const { files } = this.state;
    return (
      <WingBlank>
        <SegmentedControl
          values={['切换到单选', '切换到多选']}
          selectedIndex={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
          multiple={this.state.multiple}
        />
        <Button onClick={this.handleClick}>upload</Button>
        <Button onClick={() => axios.get('/user/logout')}>logout</Button>
      </WingBlank>
    );
  }
}

export default Test