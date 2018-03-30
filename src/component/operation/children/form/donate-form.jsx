import React, { Component } from 'react';
import { Button, Picker, Toast,List, InputItem, ImagePicker, TextareaItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from 'axios'
import api from '../../../../common/api/service'


const { Item } = List;
class DonateForm extends Component{
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

    axios.put(process.env.NODE_ENV === 'development' ? 'http://localhost:7001/test/upload' : 'http://115.28.10.222:7001/test/upload', formData, {
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
        api.post('/zm_fund_donate.htm', value).then(res => {
          if (res.success) Toast.success('感谢您的参与，工作人员会在1-3个工作日内联系您，请耐心等待！', 2)
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
          <InputItem {...getFieldProps('companyName')} clear placeholder="专利名称">专利名称</InputItem>
          <InputItem {...getFieldProps('lang')} clear placeholder="标的类型">标的类型</InputItem>
          <InputItem {...getFieldProps('legalPersonTel')} clear placeholder="专利号">专利号</InputItem>
          <InputItem {...getFieldProps('content')} clear placeholder="专利简介">专利简介</InputItem>
          <InputItem {...getFieldProps('prodName')} clear placeholder="相关材料">相关材料</InputItem>
          <InputItem {...getFieldProps('legalPerson')} clear placeholder="专利权持有人">专利权持有人</InputItem>
          <InputItem {...getFieldProps('applyName')} clear placeholder="联系人">联系人</InputItem>
          <InputItem {...getFieldProps('applyTel')} clear placeholder="手机">手机</InputItem>
          <InputItem {...getFieldProps('applyEmail')} clear placeholder="邮箱">邮箱</InputItem>
          <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>
        </List>
      </div>
    )
  }
}

export default createForm()(DonateForm);