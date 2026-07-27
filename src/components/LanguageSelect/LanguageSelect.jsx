import { useLanguageContext } from "../../context/languageContext.jsx";
import { BsGlobe } from "react-icons/bs";

const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <>
      <span className="d-flex align-items-center gap-2">
        <BsGlobe className="ms-md-4"/>
        <select
          className="nav-link"
          onChange={onClickLanguageChange}
        >
          {Object.keys(languages).map((lng) => (
            <option key={languages[lng].nativeName} value={lng}>
              {languages[lng].nativeName}
            </option>
          ))}
        </select>
      </span>
    </>
  );
};

export default LanguageSelect;