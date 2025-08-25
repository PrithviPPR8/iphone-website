import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-100 flex flex-col md:flex-row justify-between w-full pt-4 px-4 md:px-20 text-center md:text-left">
        <p className="mb-4">Copyright © 2025 Apple Inc. All rights reserved.</p>
        <div className="flex flex-row gap-2">
            <a href="https://www.apple.com/in/legal/privacy/" target="_blank" className="hover:underline">Privacy Policy | </a>
            <a href="https://www.apple.com/in/legal/terms/site.html" target="_blank" className="hover:underline">Terms of Use | </a>
            <a href="https://www.apple.com/in/shop/goto/help/sales_refunds" target="_blank" className="hover:underline">Sales Policy | </a>
            <a href="https://www.apple.com/in/legal/" target="_blank" className="hover:underline">Legal | </a>
            <a href="https://www.apple.com/in/sitemap/" target="_blank" className="hover:underline">Site Map </a>
        </div>
        <p className="mt-2 md:mt-0 pb-3 md:pb-0">India</p>
    </div>
  )
}

export default Footer
