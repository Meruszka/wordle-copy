
import { Language } from '../types/language/main';
import { languages } from './languages';

function SwitchLang({setGameLanguage, defaultLanguage}: {setGameLanguage: (language: string) => void, defaultLanguage: Language}) {
  
  return (
    <div>
        <select onChange={(e) => setGameLanguage(e.target.value)} className="p-2 capitalize">
            <option key={defaultLanguage.short} value={defaultLanguage.short}>
                {defaultLanguage.language}
            </option>
            {languages.filter((language) => language !== defaultLanguage).map((language) => (
                <option key={language.short} value={language.short}>
                    {language.language}
                </option>
            ))}
        </select>
    </div>
  );
}

export default SwitchLang;