import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar()
{
    return(
        <>
            <div className="navouter">
                <div className="navLeft">
                    <NavLink className={'nav-link d-inline'} to={'/'}><img src="./images/logo.webp" className="logo" alt="" /></NavLink>
                </div>
                <div className="navright pt-sm-2 pt-xl-0">
                    <ul>
                        <li> <NavLink className={'nav-link  d-inline'} to={'/'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>home</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/about'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>about us</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/department'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>department</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/services'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>services</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/gallery'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>galery</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/contact'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>contact</NavLink></li>
                        <li>
                            <button>
                            <a href="tel:+91 9403820779" className="d-inline text-decoration-none text-light fw-bolder">+91 9403820779</a>
                            </button>
                        </li>
                        <i class="ri-menu-line"></i>
                    </ul>
                </div>
            </div>






            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h1 class="modal-title text-primary fs-5" id="exampleModalLabel">Appoinment Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" />
        <input type="text" class="form-control" placeholder="Your email" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Phone No..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <input type="date" class="form-control" placeholder="Birth Date" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      </div>

<div class="mb-3">
  <label for="basic-url" class="form-label text-capitalize">apoinment date</label>
        <input type="date" class="form-control" placeholder="Phone No..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
</div>

<div class="mb-3">
  {/* <span class="input-group-text">$</span> */}
  <label for="basic-url" class="form-label text-capitalize">Subject</label>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
  {/* <span class="input-group-text">.00</span> */}
</div>

{/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
</div> */}

<div class="mb-3">
  {/* <span class="input-group-text">With textarea</span> */}
  <label for="basic-url" class="form-label text-capitalize">paragraph text</label>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}