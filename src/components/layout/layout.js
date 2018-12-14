import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../footer/footer'
import FooterPrivacy from '../footerPrivacy/footerPrivacy'
import Header from '../header/header'

const layout = ({ children }) => (
  <div className="lyt-Layout">
    <div className="lyt-Layout_Inner">
      <header className="lyt-Layout_Header">
        <Header />
      </header>

      <div className="lyt-Layout_Body">
        {children}
      </div>

      <footer className="lyt-Layout_Footer">
        <Footer />
        <FooterPrivacy />
      </footer>
    </div>
  </div>
)

layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default layout
