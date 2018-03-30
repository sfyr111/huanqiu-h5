import React, { Component } from 'react';
import { Button, Picker, Toast,List, InputItem, ImagePicker, TextareaItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from 'axios'
import api from '../../../common/api/service'

// import './pct.styl';

const { Item } = List;
class LangForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      enterpriseNatureOp: [
        { value: '1', label: '中外合资企业' },
        { value: '2', label: '国有企业' },
        { value: '3', label: '集体企业' },
        { value: '0', label: '其他' },
      ],
      enterpriseScaleOp: [
        { value: '1', label: '微型企业' },
        { value: '2', label: '小型企业' },
        { value: '3', label: '中型企业' },
        { value: '4', label: '大型企业' },
      ],
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
        const value = { ...this.props.form.getFieldsValue() };
        Object.keys(value).forEach(k => {
          if (value[k] instanceof Array) value[k] = value[k][0]
          if (!value[k]) Toast.info('请完善数据', 1)
        })
        api.post('/0103_apply_sub.htm', value).then(res => {
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
          <InputItem {...getFieldProps('applyName')} clear placeholder="联系人">联系人</InputItem>
          <InputItem {...getFieldProps('applyTel')} clear placeholder="手机">手机</InputItem>
          <InputItem {...getFieldProps('applyEmail')} clear placeholder="邮箱">邮箱</InputItem>
          <InputItem {...getFieldProps('companyName')} clear placeholder="所属单位">所属单位</InputItem>
          <InputItem {...getFieldProps('registeredAdr')} clear placeholder="职务">职务</InputItem>
          <InputItem {...getFieldProps('postalAdr')} clear placeholder="语种对">语种对</InputItem>
          <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>
        </List>
      </div>
    )
  }
}

export default createForm()(LangForm);