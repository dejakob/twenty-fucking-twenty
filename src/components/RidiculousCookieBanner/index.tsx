import './RidiculousCookieBanner.scss';

const RidiculousCookieBanner = () => {
  return (
    <>
      <input type="checkbox" className="RidiculousCookieBanner-trigger" id="RidiculousCookieBanner" />
      <div className="RidiculousCookieBanner">
        <div className="RidiculousCookieBanner-content">
          <h2 className="RidiculousCookieBanner-title">This website doesn't use cookies</h2>
          <p className="RidiculousCookieBanner-paragraph">
            I know, it makes absolutely no sense to show this message, but since this is showing on every single
            message, you'll probably ignore this message anyway and accept without reading it.
          </p>
          <label htmlFor="RidiculousCookieBanner" className="RidiculousCookieBanner-accept">
            I'm a sheep
          </label>
        </div>
      </div>
    </>
  );
};

export default RidiculousCookieBanner;
