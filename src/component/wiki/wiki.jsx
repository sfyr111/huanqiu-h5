import React from 'react'
import Overseas from '../overseas/overseas'
import LectureHall from '../lectureHall/lectureHall'
import GoldLibrary from '../goldLibrary/goldLibrary'
import GoldAllusion from '../goldAllusion/goldAllusion'
import PatentLibrary from '../patentLibrary/patentLibrary'

class Wiki extends React.Component {

  render() {
    const navList = [
      {
        path: '/product/wiki/goldLibrary',
        component: GoldLibrary
      },
      {
        path: '/product/wiki/goldAllusion',
        component: GoldAllusion
      },
      {
        path: '/product/wiki/overseas',
        component: Overseas
      },
      {
        path: '/product/wiki/patentLibrary',
        component: PatentLibrary
      },
      {
        path: '/product/lectureHall',
        component: LectureHall

      }
    ]

    return (
      <div id="wiki" style={{ position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>

      </div>
    )
  }
}

export default Wiki