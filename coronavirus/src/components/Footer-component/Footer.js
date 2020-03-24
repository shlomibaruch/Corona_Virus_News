
import React from 'react'
import './footer.css';

export default function Footer() {


  return (<div className="footer">

    <footer className="page-footer font-small cyan darken-3 bg-blue">


      <div className="container">


        <div className="row">


          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">
             
              <div className="flex1 f"> 
              <p className="name">kobi bitaolin</p>
                <a className="gplus-ic"  href="https://github.com/kobi-bitaolin"  target="_blank">
                  <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>

                <a className="li-ic" href="https://www.linkedin.com/in/kobi-bitaolin-16b70b19a/"  target="_blank">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <a className="envelope-ic" href="https://amkb999@gmail.com"  target="_blank">

                  <i class="far fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </div>


              <div className="flex2 f">
              <p className="name">shlomi baruch</p>
                <a  className="gplus-ic"  href="https://github.com/shlomibaruch"  target="_blank">
                  <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>

                <a className="li-ic"  href="https://www.linkedin.com/in/shlomi-baruch-0a4438193/"  target="_blank">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <a className="envelope-ic"  href="https://shlomibaruch5@gmail.com "  target="_blank">

                  <i class="far fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </div>

            </div>
          </div>


        </div>


      </div>






    </footer>
  </div>
  )
}
