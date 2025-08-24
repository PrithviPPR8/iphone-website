import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-100 flex flex-row justify-between w-full h-15 pt-4 px-20">
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
        <div className="flex flex-row gap-2 pr-15">
            <a href="https://www.apple.com/in/legal/privacy/" target="_blank">Privacy Policy | </a>
            <a href="https://www.apple.com/in/legal/terms/site.html" target="_blank">Terms of Use | </a>
            <a href="https://www.apple.com/in/shop/goto/help/sales_refunds" target="_blank">Sales Policy | </a>
            <a href="https://www.apple.com/in/legal/" target="_blank">Legal | </a>
            <a href="https://www.apple.com/in/sitemap/" target="_blank">Site Map </a>
        </div>
        <p>India</p>
    </div>
  )
}

export default Footer