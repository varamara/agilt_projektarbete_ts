import React from "react";
import "./size.scss"
import Navbar from "../../components/navbar/Navbar"

const Size: React.FC = () => {
  return (
    <>
    <Navbar navbarClassName="alt-view-navbar" />
    <section className="size-section">
      <div className="circle-container">
      <div className="size-circle"></div></div>
      <h1>
        Storleksguide
      </h1>
      <div className="size-chart">
      <table>
        <thead>
          <tr>
            <th>EU</th>
            <th>BRÖSTVIDD</th>
            <th>MIDJEMÅTT</th>
            <th>HÖFTMÅTT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>36</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>38</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>40</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>42</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>44</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>46</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>48</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          
        </tbody>
      </table>
      
    </div>
    </section>
    </>
  )
}

export default Size