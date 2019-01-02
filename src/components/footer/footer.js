import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import content from "../../content/content";

import Loader from "../loader/loader";

import "./footer.scss";
import AndroidLogo from "../../assets/svgs/android-logo";
import AppleLogo from "../../assets/svgs/apple-logo";
import Envelope from "../../assets/svgs/envelope";
import FacebookLogo from "../../assets/svgs/facebook-logo";
import InstagramLogo from "../../assets/svgs/instagram-logo";
import TwitterLogo from "../../assets/svgs/twitter-logo";

class Footer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      emailSent: null,
      sending: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {console.log(this.state.email);});
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ sending: true })

    addToMailchimp(this.state.email)
      .then(data => {
        console.log(data)

        this.setState({ email: '' })

        if(data.result === 'error') {
          this.setState( { emailSent: 'subscribed' })
        } else {
          this.setState( { emailSent: 'yes' })
        }

        this.setState({ sending: false })
      }).catch((err) => {
      console.log(err)

      this.setState({
        email: '',
        emailSent: 'no',
        sending: false
      })
    });
  };

  render () {
    let placeholder = ''

    if(this.state.emailSent === 'yes') {
      placeholder = content.footer.inputPlaceholderSuccess
    } else if(this.state.emailSent === 'subscribed') {
      placeholder = content.footer.inputPlaceholderExists
    } else if(this.state.emailSent === 'no') {
      placeholder = content.footer.inputPlaceholderError
    } else {
      placeholder = content.footer.inputPlaceholder
    }

    let formClasses = ''

    if(this.state.emailSent === 'yes') {
      formClasses = "ft-Footer_Form ft-Footer_Form-success"
    } else if(this.state.emailSent === 'no' || this.state.emailSent === 'subscribed') {
      formClasses = "ft-Footer_Form ft-Footer_Form-failed"
    } else {
      formClasses = "ft-Footer_Form"
    }

    return (
      <footer className="ft-Footer">
        <div className="ft-Footer_Inner">
          <div className="ft-Footer_Body">
            <form onSubmit={(e) => this.handleSubmit(e)} className={formClasses}>
              <div className="ft-Footer_InputContainer">
                <input
                  type="text"
                  name="email"
                  disabled={this.state.sending || this.state.emailSent === 'yes'}
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  className="ft-Footer_Input"
                  placeholder={placeholder}/>

                <button className="ft-Footer_Button" type="submit" disabled={this.state.sending || this.state.emailSent === 'yes'}>
                  {this.state.sending
                    ? <Loader/>
                    : <Envelope/>}
                </button>
              </div>
            </form>

            <div className="ft-Footer_Links">
              <ul className="ft-Footer_Items">
                <li className="ft-Footer_Item">
                  <a href="https://btystk.link/android" className="ft-Footer_Link">
                    <AndroidLogo/>
                  </a>
                </li>

                <li className="ft-Footer_Item">
                  <a href="https://btystk.link/ios" className="ft-Footer_Link">
                    <AppleLogo/>
                  </a>
                </li>

                <li className="ft-Footer_Item">
                  <a href="https://www.facebook.com/beautystack" className="ft-Footer_Link">
                    <FacebookLogo/>
                  </a>
                </li>

                <li className="ft-Footer_Item">
                  <a href="https://www.instagram.com/beautystack/" className="ft-Footer_Link">
                    <InstagramLogo/>
                  </a>
                </li>

                <li className="ft-Footer_Item">
                  <a href="https://twitter.com/beautystack" className="ft-Footer_Link">
                    <TwitterLogo/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
