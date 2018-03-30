import React, { Component } from 'react';
import { Button, Picker, Toast,List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from 'axios'
import api from '../../../common/api/service'

const { Item } = List;
class SubsidyForm extends Component{
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
      factoryPropertyOp: [
        { value: '1', label: '自有' },
        { value: '2', label: '租赁' },
      ],
      runningTimeOp: [
        { value: '1', label: '2年以内' },
        { value: '2', label: '2年以上' },
      ],
      industryOp: [
        { value: '1', label: '电子信息' },
        { value: '2', label: '新材料' },
        { value: '3', label: '光机电一体化' },
        { value: '4', label: '生物制药' },
        { value: '5', label: '资源与环境' },
        { value: '6', label: '新能源与高效节能' },
        { value: '7', label: '高技术服务业' },
        { value: '8', label: '农林牧渔' },
        { value: '0', label: '其他' },
      ],
      projectOp: [
        { value: '1', label: '国家知识产权示范优势企业' },
        { value: '2', label: '只是产权管理规范合格企业' },
        { value: '3', label: '省级知识产权项目承担企业' },
        { value: '4', label: '省级及以上专利奖获奖企业' },
        { value: '0', label: '其他' },
      ],
      prodStageOp: [
        { value: '1', label: '国家知识产权示范优势企业' },
        { value: '2', label: '只是产权管理规范合格企业' },
        { value: '3', label: '省级知识产权项目承担企业' },
        { value: '4', label: '省级及以上专利奖获奖企业' },
        { value: '0', label: '其他' },
      ],
      prodStageOp: [
        { value: '1', label: '研制' },
        { value: '2', label: '试生产' },
        { value: '3', label: '小批量' },
        { value: '4', label: '批量' },
        { value: '0', label: '其他' },
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
        const { imgHead, imgCert } = this.state;
        const value = { imgHead, imgCert, ...this.props.form.getFieldsValue() };
        Object.keys(value).forEach(k => {
          if (value[k] instanceof Array) value[k] = value[k][0]
          if (!value[k].trim()) Toast.info('请完善数据', 1)
        })
        api.post('/0105_apply_sub.htm', value).then(res => {
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
          <InputItem {...getFieldProps('legalPerson')} clear placeholder="法定代表人">法定代表人</InputItem>
          <InputItem {...getFieldProps('legalPersonTel')} clear placeholder="法定代表人电话">法定代表人电话</InputItem>
          <InputItem {...getFieldProps('contacts')} clear placeholder="联系人">联系人</InputItem>
          <InputItem {...getFieldProps('contactsTel')} clear placeholder="联系人电话">联系人电话</InputItem>
          <InputItem {...getFieldProps('enterpriseEmpNum')} clear placeholder="企业从业人员">企业从业人数</InputItem>
          <InputItem {...getFieldProps('devEmpNum')} clear placeholder="研发人数">研发人数</InputItem>

          <Picker data={this.state.factoryPropertyOp} cols={1} {...getFieldProps('factoryProperty')} className="forss">
            <List.Item arrow="horizontal">经营场所产权性质</List.Item>
          </Picker>

          <Picker data={this.state.runningTimeOp} cols={1} {...getFieldProps('runningTime')} className="forss">
            <List.Item arrow="horizontal">连续经营年限</List.Item>
          </Picker>

          <Picker data={this.state.industryOp} cols={1} {...getFieldProps('industry')} className="forss">
            <List.Item arrow="horizontal">所属行业</List.Item>
          </Picker>

          <InputItem {...getFieldProps('scope')} clear placeholder="经营范围">经营范围</InputItem>

          <Picker data={this.state.projectOp} cols={1} {...getFieldProps('project')} className="forss">
            <List.Item arrow="horizontal">试点示范工作情况</List.Item>
          </Picker>

          <InputItem {...getFieldProps('totalAssets2')} clear placeholder="上上年度总资产">上上年度总资产</InputItem>
          <InputItem {...getFieldProps('totalAssets')} clear placeholder="上年度总资产">上年度总资产</InputItem>
          <InputItem {...getFieldProps('netAssets2')} clear placeholder="上上年度净资产">上上年度净资产</InputItem>
          <InputItem {...getFieldProps('netAssets')} clear placeholder="上年度净资产">上年度净资产</InputItem>
          <InputItem {...getFieldProps('mainIncome2')} clear placeholder="上上年度主营业务收入">上上年度主营业务收入</InputItem>
          <InputItem {...getFieldProps('mainIncome')} clear placeholder="上年度主营业务收入">上年度主营业务收入</InputItem>
          <InputItem {...getFieldProps('netProfits2')} clear placeholder="上上年度净利润">上上年度净利润</InputItem>
          <InputItem {...getFieldProps('netProfits')} clear placeholder="上年度净利润">上年度净利润</InputItem>
          <InputItem {...getFieldProps('debtAssetRatio2')} clear placeholder="上上年度资产负债率">上上年度资产负债率</InputItem>
          <InputItem {...getFieldProps('debtAssetRatio')} clear placeholder="上年度资产负债率">上年度资产负债率</InputItem>
          <InputItem {...getFieldProps('devMoney2')} clear placeholder="上上年度研发经费投入">上上年度研发经费投入</InputItem>
          <InputItem {...getFieldProps('devMoney')} clear placeholder="上年度研发经费投入">上年度研发经费投入</InputItem>
          <InputItem {...getFieldProps('prodName')} clear placeholder="产品名称">产品名称</InputItem>
          <Picker data={this.state.prodStageOp} cols={1} {...getFieldProps('prodStage')} className="forss">
            <List.Item arrow="horizontal">产品阶段</List.Item>
          </Picker>
          <InputItem {...getFieldProps('devIncomeRatio')} clear placeholder="占企业销售收入总额比例">占企业销售收入总额比例</InputItem>

          <WhiteSpace />
          <Item><div>发明专利:</div></Item>
          <InputItem {...getFieldProps('patentInventions1')} clear placeholder="申请量">申请量</InputItem>
          <InputItem {...getFieldProps('patentInventions2')} clear placeholder="授权量">授权量</InputItem>
          <InputItem {...getFieldProps('patentInventions3')} clear placeholder="有效专利量">有效专利量</InputItem>

          <WhiteSpace />
          <Item><div>实用新型专利:</div></Item>
          <InputItem {...getFieldProps('patentNew1')} clear placeholder="申请量">申请量</InputItem>
          <InputItem {...getFieldProps('patentNew2')} clear placeholder="授权量">授权量</InputItem>
          <InputItem {...getFieldProps('patentNew3')} clear placeholder="有效专利量">有效专利量</InputItem>

          <WhiteSpace />
          <Item><div>外观设计专利:</div></Item>
          <InputItem {...getFieldProps('patentDesign1')} clear placeholder="申请量">申请量</InputItem>
          <InputItem {...getFieldProps('patentDesign2')} clear placeholder="授权量">授权量</InputItem>
          <InputItem {...getFieldProps('patentDesign3')} clear placeholder="有效专利量">有效专利量</InputItem>

          <WhiteSpace />
          <Item><div>国外专利:</div></Item>
          <InputItem {...getFieldProps('patentForeign1')} clear placeholder="申请量">申请量</InputItem>
          <InputItem {...getFieldProps('patentForeign2')} clear placeholder="授权量">授权量</InputItem>
          <InputItem {...getFieldProps('patentForeign3')} clear placeholder="有效专利量">有效专利量</InputItem>

          <Button className='submit-btn' onClick={this.onSubmit}>提交</Button>
        </List>
      </div>
    )
  }
}

export default createForm()(SubsidyForm);