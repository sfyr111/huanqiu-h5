import React, { Component } from 'react';
import { Button, Picker, Toast,List, InputItem, ImagePicker, TextareaItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from 'axios'
import api from '../../common/api/service'

// import './pct.styl';

const { Item } = List;
class UnionForm extends Component{
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
        api.post('/04_apply_sub.htm', value).then(res => {
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
          <InputItem {...getFieldProps('companyName')} clear placeholder="">企业名称</InputItem>
          <InputItem {...getFieldProps('registeredAdr')} clear placeholder="">注册地</InputItem>
          <InputItem {...getFieldProps('legalPersonTel')} clear placeholder="">注册时间</InputItem>
          <InputItem {...getFieldProps('legalPerson')} clear placeholder="">主要负责人</InputItem>
          <InputItem {...getFieldProps('uniformCode')} clear placeholder="">网址</InputItem>
          <InputItem {...getFieldProps('postalAdr')} clear placeholder="">办公地址</InputItem>
          <InputItem {...getFieldProps('applyName')} clear placeholder="">联系人</InputItem>
          <InputItem {...getFieldProps('applyTel')} clear placeholder="">电话</InputItem>
          <InputItem {...getFieldProps('applyEmail')} clear placeholder="">邮箱</InputItem>
          <InputItem {...getFieldProps('lang')} clear placeholder="">工作语言</InputItem>
          <InputItem {...getFieldProps('logoUrl')} clear placeholder="">主要业务</InputItem>
          <InputItem {...getFieldProps('content')} clear placeholder="">擅长专业领域</InputItem>
          <InputItem {...getFieldProps('patentInventions1')} clear placeholder="">专利代理人数量</InputItem>
          <InputItem {...getFieldProps('patentNew1')} clear placeholder="">商标代理人数量</InputItem>
          <InputItem {...getFieldProps('patentForeign1')} clear placeholder="">外国资质律师数量</InputItem>
          <InputItem {...getFieldProps('patentDesign1')} clear placeholder="">其他专业人员数量</InputItem>
          <TextareaItem
            {...getFieldProps('declarationBrief')}
            title="近五年代理的知识产权申请情况"
            placeholder=""
            autoHeight
            labelNumber={5}
          />
          <TextareaItem
            {...getFieldProps('declarationBusiness')}
            title="荣誉及社会活动"
            placeholder=""
            autoHeight
            labelNumber={5}
          />
          <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>
        </List>
      </div>
    )
  }
}

export default createForm()(UnionForm);