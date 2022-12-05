import React from 'react'
import CategoryLeftBar from '../../components/userManagement/categoryLeftBar'
import Header from '../../components/userManagement/header'
import Table from '../../components/userManagement/table'
import Tabs from '../../components/userManagement/tabs'

const Home = () => {
  return (
    <>
      <div className="col-span-12">
        <Header />
      </div>
      <div className="col-span-2">
        <CategoryLeftBar />
      </div>
      <div className="col-span-10">
        <Tabs />
        <Table />
      </div>
    </>
  )
}

export default Home