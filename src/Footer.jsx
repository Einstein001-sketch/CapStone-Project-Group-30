import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h5>
        The footer was designed by 4 persons from Group 30 of CapStone Project
        and was head by Mr Emmanuel
      </h5>
      <div className="Footer-Links">
        <ul>
          <li>
            <a href="https://amakandukwu.com/">Amaka</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma</a>
          </li>
          <li>
            <a href="https://tsacademyonline.com/">TSAacademy</a>
          </li>
          <li>
            <a href="">Group 30</a>
          </li>
        </ul>
      </div>
      <hr className="footer-divider" />
      <div className="bottom-footer">
        <p>
          &copy; 2026 Designed by Emmanuel <br />
          Built by CapStone Project Group 30. All rights reserved.
        </p>
      </div>
      <div className="left-p">
        <p>TSAcademy</p>
      </div>
    </footer>
  );
}
