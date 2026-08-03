import { useLanguageContext } from "../../context/languageContext.jsx";
import { BsGlobe } from "react-icons/bs";

const LanguageSelect = () => {
  const { languages, currentLang, onClickLanguageChange } =
    useLanguageContext();

  const langToCountry = {
    en: "us",
    es: "ar",
  };
  return (
    <div className="nav-item dropdown d-flex align-items-center">
      <span className={`flag-icon flag-icon-${langToCountry[currentLang]} ms-lg-2 me-2 me-lg-0`}></span>
      <a
        className="nav-link dropdown-toggle no-hover-effect"
        href="#"
        id="languageDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {languages[currentLang]?.nativeName || "Idioma"}
      </a>
      <ul className="dropdown-menu" aria-labelledby="languageDropdown">
        {Object.keys(languages).map((lng) => (
          <li key={lng}>
            <button
              className="dropdown-item"
              onClick={() => onClickLanguageChange({ target: { value: lng } })}
            >
              {languages[lng].nativeName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  //return (
  //  <>
  //    <span className="d-flex align-items-center gap-2">
  //      <BsGlobe className="ms-md-4"/>
  //      <select
  //        className="nav-link"
  //        onChange={onClickLanguageChange}
  //      >
  //        {Object.keys(languages).map((lng) => (
  //          <option key={languages[lng].nativeName} value={lng}>
  //            {languages[lng].nativeName}
  //          </option>
  //        ))}
  //      </select>
  //    </span>
  //  </>
  //);
};

export default LanguageSelect;
