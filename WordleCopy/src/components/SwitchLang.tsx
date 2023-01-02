function SwitchLang({possibleLanguages, setGameLanguage}: {possibleLanguages: string[], setGameLanguage: (language: string) => void}) {
  
  return (
    <div>
        <select onChange={(e) => setGameLanguage(e.target.value)}>
            {possibleLanguages.map((language) => (
                <option key={language} value={language}>
                    {language}
                </option>
            ))}
        </select>
    </div>
  );
}

export default SwitchLang;