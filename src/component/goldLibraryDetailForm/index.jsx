import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { List, InputItem,Radio,ImagePicker} from 'antd-mobile';
import { createForm } from 'rc-form';

import './index.styl';

const { Item } = List;
class GoldLibraryDetailForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: [],
      pic:[],
      sex: 2
    }
    this.setSex = this.setSex.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setSex(code) {
    this.setState({
      sex: code
    })
  }

  onChange(files, type, species){
    console.log(files, type, species);
    this.setState({
      [species]: files
    });
  }

  onSubmit() {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        const { sex, pic, files } = this.state;
        const value = { sex, pic, files, ...this.props.form.getFieldsValue() };
        const { uploadData = (data) => {console.log(data)}} = this.props;
        return uploadData(value);
      } else {
        alert('Validation failed');
      }
    });
  }

  render() {
    const { files,pic } = this.state;
    const { getFieldProps } = this.props.form;
    const sexSelector = <div className='sexSelector'>
      <Radio className="my-radio" onChange={() => {this.setSex(1)}} checked={this.state.sex === 1}>男</Radio>
      <Radio className="my-radio" onChange={() => {this.setSex(0)}} checked={this.state.sex === 0}>女</Radio>
    </div>
    return (
      <div className='goldLibraryDetailForm-component'>
        <List>
          <InputItem {...getFieldProps('userName')} clear placeholder="请输入姓名">姓名</InputItem>
          <Item><span className='sex-line_label'>性别：</span>{sexSelector}</Item>
          <InputItem {...getFieldProps('location')} clear placeholder="请输入所在地区">所在地区</InputItem>
          <InputItem {...getFieldProps('cardSpecies')} clear placeholder="请输入证件类型">证件类型</InputItem>
          <InputItem {...getFieldProps('cardNumber')} clear placeholder="请输入证件号码">证件号码</InputItem>
          <InputItem {...getFieldProps('company')} clear placeholder="请输入所在单位">所在单位</InputItem>
          <InputItem {...getFieldProps('job')} clear placeholder="请输入职务">职务</InputItem>
          <InputItem {...getFieldProps('e-mail')} clear placeholder="请输入邮箱地址">邮箱地址</InputItem>
          <InputItem {...getFieldProps('phone')} clear placeholder="请输入联系电话">联系电话</InputItem>
          <Item><div>上传图片</div>
            <ImagePicker files={pic} onChange={(files, type) => { this.onChange(files, type, 'pic') }} onImageClick={(index, fs) => console.log(index, fs)}/>
          </Item>
          <Item><div>上传证明</div>
            <ImagePicker files={files} onChange={(files, type) => { this.onChange(files, type, 'files') }} onImageClick={(index, fs) => console.log(index, fs)}/>
          </Item>
        </List>
        <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>  
      </div>
    )
  }
}

export default createForm()(GoldLibraryDetailForm);