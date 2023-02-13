import React from 'react'
import "./SideBar.css" 
import { FaBeer, FaLandmark, FaUserAlt,
         FaShoppingCart,
         FaShoppingBag } from 'react-icons/fa';


function SideBar() {
  return (
    <div>
      <div className='side'>
        <div className='side-items'>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 12.0013V7.25863C13 6.92867 12.9334 6.60218 12.8041 6.29915C12.6748 5.99612 12.4857 5.72294 12.2482 5.49634L7.8244 1.27362C7.6016 1.06087 7.30661 0.942322 7 0.942322C6.69339 0.942322 6.3984 1.06087 6.1756 1.27362L1.7518 5.49634C1.51433 5.72294 1.32517 5.99612 1.1959 6.29915C1.06663 6.60218 0.999965 6.92867 1 7.25863V12.0013C1 12.3228 1.12643 12.631 1.35147 12.8583C1.57652 13.0856 1.88174 13.2133 2.2 13.2133H11.8C12.1183 13.2133 12.4235 13.0856 12.6485 12.8583C12.8736 12.631 13 12.3228 13 12.0013Z" fill="none" stroke="#87888C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 <h3>Dashboard</h3></div>
        <div className='side-items'>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6.5C6.79565 6.5 7.55871 6.18393 8.12132 5.62132C8.68393 5.05871 9 4.29565 9 3.5C9 2.70435 8.68393 1.94129 8.12132 1.37868C7.55871 0.816071 6.79565 0.5 6 0.5C5.20435 0.5 4.44129 0.816071 3.87868 1.37868C3.31607 1.94129 3 2.70435 3 3.5C3 4.29565 3.31607 5.05871 3.87868 5.62132C4.44129 6.18393 5.20435 6.5 6 6.5V6.5ZM8 3.5C8 4.03043 7.78929 4.53914 7.41421 4.91421C7.03914 5.28929 6.53043 5.5 6 5.5C5.46957 5.5 4.96086 5.28929 4.58579 4.91421C4.21071 4.53914 4 4.03043 4 3.5C4 2.96957 4.21071 2.46086 4.58579 2.08579C4.96086 1.71071 5.46957 1.5 6 1.5C6.53043 1.5 7.03914 1.71071 7.41421 2.08579C7.78929 2.46086 8 2.96957 8 3.5V3.5ZM12 11.5C12 12.5 11 12.5 11 12.5H1C1 12.5 0 12.5 0 11.5C0 10.5 1 7.5 6 7.5C11 7.5 12 10.5 12 11.5ZM11 11.496C10.999 11.25 10.846 10.51 10.168 9.832C9.516 9.18 8.289 8.5 6 8.5C3.71 8.5 2.484 9.18 1.832 9.832C1.154 10.51 1.002 11.25 1 11.496H11Z" fill="#87888C"/>
</svg>
<h3>Profile</h3></div>
        <div className='side-items'><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5265 9.00725H3.56081L3.96076 8.10134L10.6062 8.08795C10.8309 8.08795 11.0235 7.90945 11.0637 7.66251L11.9839 1.93399C12.008 1.78375 11.9719 1.62904 11.8836 1.51153C11.84 1.45369 11.7856 1.40711 11.7241 1.375C11.6627 1.34289 11.5957 1.32603 11.5278 1.32559L3.07391 1.29435L3.00167 0.916512C2.95619 0.67553 2.7609 0.5 2.53885 0.5H0.472188C0.346956 0.5 0.226853 0.555323 0.138301 0.653799C0.0497483 0.752275 0 0.885837 0 1.0251C0 1.16437 0.0497483 1.29793 0.138301 1.39641C0.226853 1.49488 0.346956 1.5502 0.472188 1.5502H2.15628L2.47197 3.21923L3.24914 7.40368L2.24858 9.21997C2.19662 9.29796 2.16532 9.39056 2.15823 9.48731C2.15114 9.58405 2.16853 9.68107 2.20845 9.76739C2.28871 9.9444 2.45056 10.056 2.62981 10.056H3.46985C3.29076 10.3205 3.19403 10.6427 3.19429 10.9738C3.19429 11.8157 3.80961 12.5 4.56672 12.5C5.32382 12.5 5.93914 11.8157 5.93914 10.9738C5.93914 10.6421 5.84015 10.3193 5.66358 10.056H7.81853C7.63944 10.3205 7.54271 10.6427 7.54297 10.9738C7.54297 11.8157 8.15829 12.5 8.91539 12.5C9.6725 12.5 10.2878 11.8157 10.2878 10.9738C10.2878 10.6421 10.1888 10.3193 10.0123 10.056H11.5278C11.7873 10.056 12 9.82094 12 9.53087C11.9992 9.39175 11.949 9.25861 11.8603 9.16052C11.7716 9.06242 11.6516 9.00733 11.5265 9.00725ZM3.27054 2.32968L10.9727 2.35794L10.2183 7.0556L4.1681 7.0675L3.27054 2.32968ZM4.56672 11.4438C4.33397 11.4438 4.14402 11.2326 4.14402 10.9738C4.14402 10.7149 4.33397 10.5037 4.56672 10.5037C4.79947 10.5037 4.98941 10.7149 4.98941 10.9738C4.98941 11.0984 4.94488 11.218 4.86561 11.3062C4.78633 11.3943 4.67882 11.4438 4.56672 11.4438ZM8.91539 11.4438C8.68264 11.4438 8.4927 11.2326 8.4927 10.9738C8.4927 10.7149 8.68264 10.5037 8.91539 10.5037C9.14814 10.5037 9.33809 10.7149 9.33809 10.9738C9.33809 11.0984 9.29356 11.218 9.21428 11.3062C9.13501 11.3943 9.0275 11.4438 8.91539 11.4438Z" fill="#87888C"/>
</svg>
<h3>Order</h3></div>
        <div className='side-items'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.54985 5.20408C1.57717 4.90337 1.73174 4.62277 1.98276 4.41818C2.23378 4.21359 2.56284 4.10002 2.9044 4.10008H11.0956C11.4372 4.10002 11.7662 4.21359 12.0172 4.41818C12.2683 4.62277 12.4228 4.90337 12.4502 5.20408L12.9956 11.2041C13.0106 11.3692 12.9868 11.5353 12.9256 11.6918C12.8643 11.8484 12.7671 11.9921 12.6399 12.1138C12.5127 12.2356 12.3584 12.3327 12.1866 12.3992C12.0148 12.4657 11.8293 12.5 11.6418 12.5001H2.35823C2.17069 12.5 1.98519 12.4657 1.81341 12.3992C1.64163 12.3327 1.48729 12.2356 1.36011 12.1138C1.23293 11.9921 1.13567 11.8484 1.07444 11.6918C1.01321 11.5353 0.989351 11.3692 1.00435 11.2041L1.54985 5.20408V5.20408Z" stroke="#87888C" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.7167 5.9V2.9C9.7167 2.26348 9.43041 1.65303 8.92083 1.20294C8.41124 0.752857 7.72009 0.5 6.99943 0.5C6.27877 0.5 5.58762 0.752857 5.07803 1.20294C4.56845 1.65303 4.28217 2.26348 4.28217 2.9V5.9" stroke="#87888C" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h3>Product</h3></div>
        </div>
        ihi
      </div>
  )
}


export default SideBar