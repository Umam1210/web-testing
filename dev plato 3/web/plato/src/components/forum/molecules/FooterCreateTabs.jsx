import React from 'react'

const FooterCreateTabs = () => {
  return (
    <div className="bg-gray-300 h-20 p-5">
        <div className="flex items-center gap-1.5 text-sm font-semibold">
        <input type="checkbox" />
        <p>Send me post reply notifications</p>
      </div>
      <a className='text-[#0079d3] font-semibold text-sm'>Connect accounts to share your post</a>
    </div>
  )
}

export default FooterCreateTabs