import React, { Component } from 'react';
import { Button, Picker, Toast,List, InputItem, ImagePicker} from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from 'axios'
import api from '../../common/api/service'

import './index.styl';

const { Item } = List;
class GoldLibraryDetailForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      sexOption: [
        { value: '1', label: '先生' },
        { value: '2', label: '女士' },
        { value: '3', label: '博士' },
      ],
      areaOption: [
        { value: '1', label: '美洲' },
        { value: '2', label: '欧洲' },
        { value: '3', label: '一带一路国家' },
        { value: '4', label: '日韩' },
      ],
      imgHeadFiles: [],
      imgCertFiles: []
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

  onChange = (files, type, key) => {
    this.setState({
      [key]: files,
    }, () => this.upload(key));
  }

  upload = (key) => {
    if (this.state[key].length < 1) return
    const formData = new FormData()
    formData.append('type', 'image')
    formData.append('file', this.state[key][0].file)

    axios.put('http://localhost:7001/test/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      if (response.statusText === 'OK') {
        const { url } = response.data.data
        this.setState({
          [key.replace('Files', '')]: url
        })
      } else alert('上传失败')
    }).catch(e => console.log(e))
  }

  onSubmit() {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        const { imgHead, imgCert } = this.state;
        const value = { imgHead, imgCert, ...this.props.form.getFieldsValue() };
        Object.keys(value).forEach(k => {
          if (value[k] instanceof Array) value[k] = value[k][0]
          if (!value[k]) Toast.info('请完善数据', 1)
        })
        api.post('/0000_apply_sub.htm', value).then(res => {
          if (res.success) Toast.success('上传成功', 1)
        })
      } else {
        alert('Validation failed');
      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div className='goldLibraryDetailForm-component' style={{ overflow: 'auto', background: '#fff', position: 'fixed', zIndex: 200, left: '0', right: '0', top: '0', bottom: '0' }}>
        <List>
          <InputItem {...getFieldProps('name')} clear placeholder="请输入姓名">姓名</InputItem>
          <Picker data={this.state.sexOption} cols={1} {...getFieldProps('calling')} className="forss">
            <List.Item arrow="horizontal">称谓</List.Item>
          </Picker>
          <Picker data={this.state.areaOption} cols={1} {...getFieldProps('area')} className="forss">
            <List.Item arrow="horizontal">地区</List.Item>
          </Picker>
          <InputItem {...getFieldProps('company')} clear placeholder="请输入所在单位">所在单位</InputItem>
          <InputItem {...getFieldProps('post')} clear placeholder="请输入职务">职务</InputItem>
          <InputItem {...getFieldProps('email')} clear placeholder="请输入邮箱地址">邮箱地址</InputItem>
          <InputItem {...getFieldProps('tel')} clear placeholder="请输入联系电话">联系电话</InputItem>
          <InputItem {...getFieldProps('companyAdr')} clear placeholder="请输入单位地址">单位地址</InputItem>
          <InputItem {...getFieldProps('experience')} clear placeholder="请输入从业经历">从业经历</InputItem>
          <InputItem {...getFieldProps('business')} clear placeholder="请输入擅长业务">擅长业务</InputItem>
          <InputItem {...getFieldProps('skilledZone')} clear placeholder="请输入擅长领域">擅长领域 </InputItem>
          <InputItem {...getFieldProps('qualified')} clear placeholder="请输入相关资格">相关资格 </InputItem>
          <Item><div>上传图片</div>
            <ImagePicker files={this.state.imgHeadFiles} multiple={false} selectable={this.state.imgHeadFiles.length < 1} onChange={(files, type) => { this.onChange(files, type, 'imgHeadFiles') }} />
          </Item>
          <Item><div>上传证明</div>
            <ImagePicker files={this.state.imgCertFiles} multiple={false} selectable={this.state.imgCertFiles.length < 1} onChange={(files, type) => { this.onChange(files, type, 'imgCertFiles') }} />
          </Item>
          <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>
        </List>
      </div>
    )
  }
}

export default createForm()(GoldLibraryDetailForm);