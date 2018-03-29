import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { List, InputItem,ImagePicker,Picker,} from 'antd-mobile';
import { createForm } from 'rc-form';

import './index.styl';

const { Item } = List;
class FreeForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: [],
      pic:[],
      district: [{
        value:'sir',
        label:'先生'
      },
      {
        value: 'doctor',
        label: '博士'
      }]
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
        const { pic, files } = this.state;
        const value = {pic, files, ...this.props.form.getFieldsValue() };
        const { uploadData = (data) => {console.log(data)}} = this.props;
        return uploadData(value);
      } else {
        alert('Validation failed');
      }
    });
  }

  render() {
    const { files,pic,district } = this.state;
    const { getFieldProps } = this.props.form;
    return (
      <div className='freeForm-component'>
        <List>
          <InputItem {...getFieldProps('userName')} clear placeholder="请输入姓名">姓名</InputItem>
          <Picker data={district} {...getFieldProps('named')} className="forss">
          <List.Item arrow="horizontal">称谓</List.Item>
        </Picker>
          <InputItem {...getFieldProps('location')} clear placeholder="请输入所在地区">所在地区</InputItem>
          <InputItem {...getFieldProps('company')} clear placeholder="请输入所在单位">所在单位</InputItem>
          <InputItem {...getFieldProps('job')} clear placeholder="请输入职务">职务</InputItem>
          <InputItem {...getFieldProps('e-mail')} clear placeholder="请输入邮箱地址">邮箱地址</InputItem>
          <InputItem {...getFieldProps('phone')} clear placeholder="请输入联系电话">联系电话</InputItem>
          <InputItem {...getFieldProps('companyAdress')} clear placeholder="请输入单位地址">单位地址</InputItem>
          <InputItem {...getFieldProps('experience')} clear placeholder="请输入从业经历">从业经历</InputItem>
          <InputItem {...getFieldProps('skilledJob')} clear placeholder="请输入擅长业务">擅长业务</InputItem>
          <InputItem {...getFieldProps('skilledDomain')} clear placeholder="请输入擅长领域">擅长领域</InputItem>
          <InputItem {...getFieldProps('qualification')} clear placeholder="请输入相关资格">相关资格</InputItem>
          <Item><div>上传相片</div>
            <ImagePicker files={pic} onChange={(files, type) => { this.onChange(files, type, 'pic') }} onImageClick={(index, fs) => console.log(index, fs)}/>
          </Item>
          <Item><div>上传相关资格证明</div>
            <ImagePicker files={files} onChange={(files, type) => { this.onChange(files, type, 'files') }} onImageClick={(index, fs) => console.log(index, fs)}/>
          </Item>
        </List>
        <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>  
      </div>
    )
  }
}

export default createForm()(FreeForm);