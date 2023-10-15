export const Footer = () => {
  return (
    <footer className="grid grid-cols-4 px-6 pb-6 pt-8 align-baseline">
      <div className="col-start-1">
        <div>
          <h1>IB</h1>
        </div>
        <div className="my-2">
          <a href="#"></a>
          <a href="#" className="mx-5"></a>
          <a href="#"></a>
        </div>
        <div>
          <a href="https://de.linkedin.com/in/josemanuelmontanomengual697745171">
            Developed with &hearts; by j3
          </a>
        </div>
      </div>

      <div className="col-start-2">
        <h4 className="mb-4">Services</h4>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li className="my-2">
            <a href="#">Book Event</a>
          </li>
          <li>
            <a href="#">Workshop</a>
          </li>
        </ul>
      </div>

      <div className="col-start-3">
        <h4>Account</h4>
        <ul>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
      <div className="col-start-4">
        <h4>Account</h4>
        <ul>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>

      <div className="col-end-6 pr-4">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="#">Allergens</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
        </ul>
      </div>

      <div></div>
    </footer>
  );
};
