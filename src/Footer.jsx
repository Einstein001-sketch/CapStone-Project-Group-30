import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h5>
        Group 30, a team of frontend developers from the TSA Academy Phoenix
        Cohort names (Mr Diri,Mrs Naya,Mrs Toul,Mr), developed this Capstone Project to showcase our understanding of
        frontend web development fundamentals, including HTML, CSS, JavaScript,
        React component architecture, responsive design, and API integration.
        Each team member contributed to different components and features of the
        project.
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
