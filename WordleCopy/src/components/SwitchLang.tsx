
import { languages } from './languages';

function SwitchLang({setGameLanguage}: {setGameLanguage: (language: string) => void}) {
  
  return (
    <div>
        <select onChange={(e) => setGameLanguage(e.target.value)} className="p-2 capitalize">
            <option key='0' value={''}>
                Select Language
            </option>
            {languages.map((language) => (
                <option key={language.short} value={language.short}>
                    {language.language}
                </option>
            ))}
        </select>
    </div>
  );
}

export default SwitchLang;