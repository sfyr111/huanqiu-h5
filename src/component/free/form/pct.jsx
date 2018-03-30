import React, { Component } from 'react';
import { Button, Picker, Toast,List, InputItem, ImagePicker} from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from 'axios'
import api from '../../../common/api/service'

// import './pct.styl';

const { Item } = List;
class PctForm extends Component{
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
        const { imgHead, imgCert } = this.state;
        const value = { imgHead, imgCert, ...this.props.form.getFieldsValue() };
        Object.keys(value).forEach(k => {
          if (value[k] instanceof Array) value[k] = value[k][0]
          if (!value[k]) Toast.info('请完善数据', 1)
        })
        api.post('/0100_apply_sub.htm', value).then(res => {
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
          <InputItem {...getFieldProps('companyName')} clear placeholder="企业名称">企业名称</InputItem>
          <InputItem {...getFieldProps('legalPerson')} clear placeholder="法定代表人">法定代表人</InputItem>
          <InputItem {...getFieldProps('legalPersonTel')} clear placeholder="法定代表人电话">法定代表人电话</InputItem>
          <InputItem {...getFieldProps('contacts')} clear placeholder="联系人">联系人</InputItem>
          <InputItem {...getFieldProps('contactsTel')} clear placeholder="联系人电话">联系人电话</InputItem>
          <InputItem {...getFieldProps('applyName')} clear placeholder="PCT专利申请人">PCT专利申请人</InputItem>
          <InputItem {...getFieldProps('applyTel')} clear placeholder="申请人电话">申请人电话</InputItem>
          <InputItem {...getFieldProps('applyEmail')} clear placeholder="申请人邮箱">申请人邮箱</InputItem>
          <Picker data={this.state.enterpriseNatureOp} cols={1} {...getFieldProps('enterpriseNature')} className="forss">
            <List.Item arrow="horizontal">企业性质</List.Item>
          </Picker>
          <InputItem {...getFieldProps('uniformCode')} clear placeholder="统一社会信用代码">统一社会信用代码</InputItem>
          <InputItem {...getFieldProps('registeredAdr')} clear placeholder="注册地址">注册地址</InputItem>
          <InputItem {...getFieldProps('postalAdr')} clear placeholder="通信地址">通信地址</InputItem>
          <InputItem {...getFieldProps('cityArea')} clear placeholder="所处市/区">所处市/区</InputItem>
          <InputItem {...getFieldProps('hiTechZone')} clear placeholder="所处高新区">所处高新区</InputItem>
          <InputItem {...getFieldProps('registeredCapital')} clear placeholder="注册资本">注册资本</InputItem>
          <InputItem {...getFieldProps('paidCapital')} clear placeholder="实收资本">实收资本</InputItem>
          <Picker data={this.state.enterpriseScaleOp} cols={1} {...getFieldProps('enterpriseScale')} className="forss">
            <List.Item arrow="horizontal">企业规模</List.Item>
          </Picker>
          <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>
        </List>
      </div>
    )
  }
}

export default createForm()(PctForm);