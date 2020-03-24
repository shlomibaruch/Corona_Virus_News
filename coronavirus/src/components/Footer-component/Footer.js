
import React from 'react'
import './footer.css';

export default function Footer() {
  return (<div className="footer">

    <footer className="page-footer font-small cyan darken-3 bg-blue">


      <div className="container">


        <div className="row">


          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">


              <a className="gplus-ic">
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>

              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>

              <a className="envelope-ic" id='closeMail'>
                <i class="far fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x" ></i>
              </a>

              {/* <a className="li-ic" >
                <i class="far fa-envelope-open fa-lg white-text mr-md-5 mr-3 fa-2x" id='openMail'></i>
              </a> */}

            </div>
          </div>


        </div>


      </div>






    </footer>
  </div>
  )
}
