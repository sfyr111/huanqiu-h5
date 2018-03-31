import React from 'react'

class About extends React.Component {

  render() {
    return (
      <div id="about" style={{ background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0', height: '100vh', overflow: 'auto' }}>
        <main className="about-content text-app">
          <h1>关于我们</h1>
          <p>
            为有针对性地解决海外知识产权信息不对称、加快企业知识产权“走出去”步伐，加强与美国、欧盟等发达国家、“一带一路”沿线国家和地区，以及世界知识产权组织的交流联系，深入打造企业知识产权海外维权联盟，帮助国内企业官方和深入开展国际合作，在南京市知识产权局的全面领导下，依托“紫金知识产权国际峰会”的资源平台，江苏环球惠通知识产权服务有限公司联合“南京大学紫金知识产权研究中心”、中兴通讯下属全资子公司深圳智衡技术有限公司共同打造全面提供海外知识产权信息服务的公共服务平台产品“寰球智金”——国际化创新服务平台（暨知识产权海外维权及国际服务平台)。
          </p>
        </main>
      </div>
      )
  }
}

export default About