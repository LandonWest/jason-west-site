import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi everybody</h1>
    <p>I sell you great house, guarantee!</p>
    <p>Come give me a check out and see my many reasons.</p>
    <div>
      <div>
        <h3>So Many Likes! Very Nice!</h3>
        <ul>
          <li>My Friends 1</li>
          <li>My Friends 2</li>
          <li>My Friends 3</li>
        </ul>
      </div>
      <h3>These are my house.</h3>
      <ul>
        <li>
          <h4>House One</h4>
          <img src="https://picsum.photos/300/200/?random"/>
          <p>Its a great house!</p>
        </li>
        <li>
          <h4>House Two</h4>
          <img src="https://picsum.photos/300/200/?random"/>
          <p>Its a great house!</p>
        </li>
        <li>
          <h4>House Three</h4>
          <img src="https://picsum.photos/300/200/?random"/>
          <p>Its a great house!</p>
        </li>
      </ul>
    </div>
    <div>
      <h3>Give my phone BUZZ! or my email a TINGLE!</h3>
        <form name="contact" method="POST" netlify>
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Phone: <input type="phone" name="phone" /></label>
          </p>
          <p>
            <label>
              Your Role:
              <select name="role[]" multiple>
                <option value="leader">Buyer</option>
                <option value="follower">Seller</option>
              </select>
            </label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
